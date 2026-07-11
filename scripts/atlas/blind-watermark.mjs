import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { readFile } from "node:fs/promises";

export const WATERMARK_BRAND = "小钟岐医";
export const WATERMARK_SCHEME = "xqy-dct-qim-v2";
export const SUPPORTED_WATERMARK_SCHEMES = Object.freeze([
  WATERMARK_SCHEME,
  "xqy-dct-qim-v1",
]);
export const WATERMARK_ROLES = Object.freeze({
  thumbnail: 1,
  preview: 2,
});

const BLOCK_SIZE = 8;
const BLOCK_MARGIN = 2;
const AUTH_TAG_BYTE_LENGTH = 4;
const KEY_MINIMUM_BYTES = 32;
const MINIMUM_VOTES_PER_BIT = 7;
const TEXTURE_STANDARD_DEVIATION_MINIMUM = 3;
const LEGACY_MAGIC = Buffer.from("XQY", "ascii");
const BRAND_CODE = createHash("sha256")
  .update(WATERMARK_BRAND, "utf8")
  .digest()
  .subarray(0, 3);
const PAYLOAD_FORMATS = Object.freeze({
  [WATERMARK_SCHEME]: Object.freeze({
    authDomain: "payload-auth-v2\0",
    authenticatedBrand: WATERMARK_BRAND,
    brandByteLength: BRAND_CODE.length,
    headerByteLength: 9,
    payloadByteLength: 9 + AUTH_TAG_BYTE_LENGTH,
    prefixByteLength: BRAND_CODE.length,
    seedDomain: "xqy-dct-qim-v1",
    version: 2,
  }),
  "xqy-dct-qim-v1": Object.freeze({
    authDomain: "payload-auth\0",
    brandByteLength: 0,
    headerByteLength: 9,
    payloadByteLength: 9 + AUTH_TAG_BYTE_LENGTH,
    prefixByteLength: LEGACY_MAGIC.length,
    seedDomain: "xqy-dct-qim-v1",
    version: 1,
  }),
});
const QUANTIZATION_STEPS = Object.freeze({
  thumbnail: 58,
  preview: 46,
});
const COEFFICIENT_PAIRS = Object.freeze([
  [[1, 2], [2, 1]],
  [[1, 3], [3, 1]],
  [[2, 3], [3, 2]],
]);

const DCT_BASIS = createDctBasis();
const DIFFERENCE_BASES = COEFFICIENT_PAIRS.map(([left, right]) => {
  const leftBasis = DCT_BASIS.get(coefficientKey(left));
  const rightBasis = DCT_BASIS.get(coefficientKey(right));

  if (!leftBasis || !rightBasis) {
    throw new Error("盲水印 DCT 基函数初始化失败。");
  }

  return leftBasis.map((value, index) => value - rightBasis[index]);
});

function getPayloadFormat(scheme) {
  const format = PAYLOAD_FORMATS[scheme];

  if (!format) {
    throw new Error(`不支持的盲水印格式：${scheme}`);
  }

  return {
    ...format,
    payloadBitLength: format.payloadByteLength * 8,
    scheme,
  };
}

function coefficientKey([u, v]) {
  return `${u},${v}`;
}

function createDctBasis() {
  const basis = new Map();
  const coefficients = new Set(
    COEFFICIENT_PAIRS.flatMap((pair) => pair.map(coefficientKey)),
  );

  for (const key of coefficients) {
    const [u, v] = key.split(",").map(Number);
    const values = new Float64Array(BLOCK_SIZE * BLOCK_SIZE);

    for (let y = 0; y < BLOCK_SIZE; y += 1) {
      for (let x = 0; x < BLOCK_SIZE; x += 1) {
        values[y * BLOCK_SIZE + x] =
          0.25 *
          Math.cos(((2 * x + 1) * u * Math.PI) / 16) *
          Math.cos(((2 * y + 1) * v * Math.PI) / 16);
      }
    }

    basis.set(key, values);
  }

  return basis;
}

function toKey(value) {
  const key = Buffer.isBuffer(value) ? value : normalizeWatermarkKey(value);

  if (key.length < KEY_MINIMUM_BYTES) {
    throw new Error(
      `盲水印密钥至少需要 ${KEY_MINIMUM_BYTES} 字节，且不得放入 public 目录。`,
    );
  }

  return key;
}

function assetFingerprint(assetId, key) {
  return createHmac("sha256", key)
    .update("asset-fingerprint\0", "utf8")
    .update(assetId, "utf8")
    .digest()
    .subarray(0, 4);
}

export function getWatermarkId(assetId, key) {
  return assetFingerprint(assetId, toKey(key)).toString("hex");
}

function createAuthTag(header, key, format) {
  const hmac = createHmac("sha256", key).update(
    format.authDomain,
    "utf8",
  );

  if (format.authenticatedBrand) {
    const brand = Buffer.from(format.authenticatedBrand, "utf8");
    const brandLength = Buffer.alloc(2);
    brandLength.writeUInt16BE(brand.length);
    hmac.update("brand\0", "utf8").update(brandLength).update(brand);
  }

  return hmac
    .update(header)
    .digest()
    .subarray(0, AUTH_TAG_BYTE_LENGTH);
}

function createPayload(assetId, role, key, scheme = WATERMARK_SCHEME) {
  const roleCode = WATERMARK_ROLES[role];
  const format = getPayloadFormat(scheme);

  if (!roleCode) {
    throw new Error(`不支持的盲水印资源角色：${role}`);
  }

  const payload = Buffer.alloc(format.payloadByteLength);
  const versionOffset = format.prefixByteLength;
  const fingerprintOffset = versionOffset + 1;
  const roleOffset = fingerprintOffset + 4;

  if (scheme === WATERMARK_SCHEME) {
    BRAND_CODE.copy(payload, 0);
  } else {
    LEGACY_MAGIC.copy(payload, 0);
  }

  payload[versionOffset] = format.version;
  assetFingerprint(assetId, key).copy(payload, fingerprintOffset);
  payload[roleOffset] = roleCode;
  createAuthTag(
    payload.subarray(0, format.headerByteLength),
    key,
    format,
  ).copy(
    payload,
    format.headerByteLength,
  );
  return payload;
}

function bufferToBits(buffer) {
  const bits = [];

  for (const byte of buffer) {
    for (let shift = 7; shift >= 0; shift -= 1) {
      bits.push((byte >> shift) & 1);
    }
  }

  return bits;
}

function bitsToBuffer(bits) {
  const buffer = Buffer.alloc(Math.ceil(bits.length / 8));

  bits.forEach((bit, index) => {
    buffer[Math.floor(index / 8)] |= bit << (7 - (index % 8));
  });

  return buffer;
}

function parsePayload(payload, key, scheme) {
  const format = getPayloadFormat(scheme);
  const versionOffset = format.prefixByteLength;
  const fingerprintOffset = versionOffset + 1;
  const roleOffset = fingerprintOffset + 4;
  const header = payload.subarray(0, format.headerByteLength);
  const suppliedAuthTag = payload.subarray(format.headerByteLength);
  const expectedAuthTag = createAuthTag(header, key, format);
  const roleCode = payload[roleOffset];
  const brandMatches =
    scheme === WATERMARK_SCHEME &&
    payload.subarray(0, BRAND_CODE.length).equals(BRAND_CODE);
  const legacyMagicMatches =
    scheme === "xqy-dct-qim-v1" &&
    payload.subarray(0, LEGACY_MAGIC.length).equals(LEGACY_MAGIC);
  const role = Object.entries(WATERMARK_ROLES).find(
    ([, code]) => code === roleCode,
  )?.[0];
  const valid =
    (brandMatches || legacyMagicMatches) &&
    payload[versionOffset] === format.version &&
    Boolean(role) &&
    timingSafeEqual(suppliedAuthTag, expectedAuthTag);

  return {
    brand: valid && brandMatches ? WATERMARK_BRAND : undefined,
    fingerprint: payload
      .subarray(fingerprintOffset, fingerprintOffset + 4)
      .toString("hex"),
    role,
    valid,
    version: payload[versionOffset],
  };
}

export function normalizeWatermarkKey(value) {
  const normalized = value.trim();
  const key =
    /^[a-f\d]+$/i.test(normalized) && normalized.length % 2 === 0
      ? Buffer.from(normalized, "hex")
      : Buffer.from(normalized, "utf8");

  return toKey(key);
}

export async function loadWatermarkKey(keyFile) {
  if (process.env.ATLAS_WATERMARK_KEY) {
    return normalizeWatermarkKey(process.env.ATLAS_WATERMARK_KEY);
  }

  let value;

  try {
    value = await readFile(keyFile, "utf8");
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      throw new Error(
        `未找到盲水印密钥：${keyFile}\n请先运行 npm run atlas:watermark:init，或设置 ATLAS_WATERMARK_KEY。`,
      );
    }

    throw error;
  }

  return normalizeWatermarkKey(value);
}

function mixUint32(value) {
  let mixed = value >>> 0;
  mixed ^= mixed >>> 16;
  mixed = Math.imul(mixed, 0x7feb352d);
  mixed ^= mixed >>> 15;
  mixed = Math.imul(mixed, 0x846ca68b);
  mixed ^= mixed >>> 16;
  return mixed >>> 0;
}

function createCoordinateSeed(key, width, height, role, scheme) {
  return createHmac("sha256", key)
    .update(`${scheme}:${role}:${width}x${height}`, "utf8")
    .digest()
    .readUInt32LE(0);
}

function describeBlock(seed, blockX, blockY, format) {
  const hash = mixUint32(
    seed ^
      Math.imul(blockX + 1, 0x9e3779b1) ^
      Math.imul(blockY + 1, 0x85ebca77),
  );

  return {
    participates: (hash & 1) === 0,
    bitIndex: (hash >>> 1) % format.payloadBitLength,
    pairIndex: (hash >>> 17) % DIFFERENCE_BASES.length,
  };
}

function readLuminance(data, offset) {
  return (
    data[offset] * 0.2126 +
    data[offset + 1] * 0.7152 +
    data[offset + 2] * 0.0722
  );
}

function measureBlock(data, info, blockX, blockY) {
  const originX = blockX * BLOCK_SIZE;
  const originY = blockY * BLOCK_SIZE;
  let sum = 0;
  let squaredSum = 0;

  for (let y = 0; y < BLOCK_SIZE; y += 1) {
    for (let x = 0; x < BLOCK_SIZE; x += 1) {
      const offset =
        ((originY + y) * info.width + originX + x) * info.channels;
      const luminance = readLuminance(data, offset);
      sum += luminance;
      squaredSum += luminance * luminance;
    }
  }

  const mean = sum / (BLOCK_SIZE * BLOCK_SIZE);
  const variance = Math.max(
    0,
    squaredSum / (BLOCK_SIZE * BLOCK_SIZE) - mean * mean,
  );

  return {
    eligible:
      mean > 12 &&
      mean < 250 &&
      Math.sqrt(variance) >= TEXTURE_STANDARD_DEVIATION_MINIMUM,
  };
}

function readCoefficientDifference(data, info, blockX, blockY, pairIndex) {
  const differenceBasis = DIFFERENCE_BASES[pairIndex];
  const originX = blockX * BLOCK_SIZE;
  const originY = blockY * BLOCK_SIZE;
  let difference = 0;

  for (let y = 0; y < BLOCK_SIZE; y += 1) {
    for (let x = 0; x < BLOCK_SIZE; x += 1) {
      const offset =
        ((originY + y) * info.width + originX + x) * info.channels;
      difference +=
        readLuminance(data, offset) *
        differenceBasis[y * BLOCK_SIZE + x];
    }
  }

  return difference;
}

function parity(value) {
  return Math.abs(value) % 2;
}

function nearestQuantizedValue(value, step, bit) {
  const scaled = value / step;
  const rounded = Math.round(scaled);

  if (parity(rounded) === bit) {
    return rounded * step;
  }

  const lower = rounded - 1;
  const upper = rounded + 1;
  return (Math.abs(scaled - lower) <= Math.abs(scaled - upper)
    ? lower
    : upper) * step;
}

function applyDifferenceAdjustment(
  data,
  info,
  blockX,
  blockY,
  pairIndex,
  adjustment,
) {
  const differenceBasis = DIFFERENCE_BASES[pairIndex];
  const originX = blockX * BLOCK_SIZE;
  const originY = blockY * BLOCK_SIZE;

  for (let y = 0; y < BLOCK_SIZE; y += 1) {
    for (let x = 0; x < BLOCK_SIZE; x += 1) {
      const offset =
        ((originY + y) * info.width + originX + x) * info.channels;
      const delta =
        (adjustment / 2) * differenceBasis[y * BLOCK_SIZE + x];

      for (let channel = 0; channel < 3; channel += 1) {
        data[offset + channel] = Math.max(
          0,
          Math.min(255, Math.round(data[offset + channel] + delta)),
        );
      }
    }
  }
}

function assertRawInfo(info) {
  if (
    !info ||
    !Number.isInteger(info.width) ||
    !Number.isInteger(info.height) ||
    !Number.isInteger(info.channels) ||
    info.channels < 3
  ) {
    throw new Error("盲水印需要至少三通道的 RGB 原始像素数据。");
  }
}

function visitCarrierBlocks(data, info, role, key, format, visitor) {
  const blocksWide = Math.floor(info.width / BLOCK_SIZE);
  const blocksHigh = Math.floor(info.height / BLOCK_SIZE);
  const seed = createCoordinateSeed(
    key,
    info.width,
    info.height,
    role,
    format.seedDomain,
  );
  let carrierCount = 0;

  for (
    let blockY = BLOCK_MARGIN;
    blockY < blocksHigh - BLOCK_MARGIN;
    blockY += 1
  ) {
    for (
      let blockX = BLOCK_MARGIN;
      blockX < blocksWide - BLOCK_MARGIN;
      blockX += 1
    ) {
      const descriptor = describeBlock(seed, blockX, blockY, format);

      if (
        !descriptor.participates ||
        !measureBlock(data, info, blockX, blockY).eligible
      ) {
        continue;
      }

      visitor({ blockX, blockY, ...descriptor });
      carrierCount += 1;
    }
  }

  return carrierCount;
}

export function embedBlindWatermark({ data, info, assetId, role, key }) {
  assertRawInfo(info);
  const normalizedKey = toKey(key);
  const format = getPayloadFormat(WATERMARK_SCHEME);
  const output = Buffer.from(data);
  const bits = bufferToBits(
    createPayload(assetId, role, normalizedKey, format.scheme),
  );
  const votes = new Uint16Array(format.payloadBitLength);
  const step = QUANTIZATION_STEPS[role];

  if (!step) {
    throw new Error(`不支持的盲水印资源角色：${role}`);
  }

  const carrierCount = visitCarrierBlocks(
    output,
    info,
    role,
    normalizedKey,
    format,
    ({ blockX, blockY, bitIndex, pairIndex }) => {
      const current = readCoefficientDifference(
        output,
        info,
        blockX,
        blockY,
        pairIndex,
      );
      const target = nearestQuantizedValue(current, step, bits[bitIndex]);
      applyDifferenceAdjustment(
        output,
        info,
        blockX,
        blockY,
        pairIndex,
        target - current,
      );

      const corrected = readCoefficientDifference(
        output,
        info,
        blockX,
        blockY,
        pairIndex,
      );
      if (Math.abs(target - corrected) > 0.75) {
        applyDifferenceAdjustment(
          output,
          info,
          blockX,
          blockY,
          pairIndex,
          target - corrected,
        );
      }

      votes[bitIndex] += 1;
    },
  );
  const minimumVotes = Math.min(...votes);

  if (minimumVotes < MINIMUM_VOTES_PER_BIT) {
    throw new Error(
      `图片 ${info.width}x${info.height} 可用纹理不足：盲水印每位最少 ${minimumVotes} 个载体，需要 ${MINIMUM_VOTES_PER_BIT} 个。`,
    );
  }

  return {
    brand: WATERMARK_BRAND,
    data: output,
    carrierCount,
    minimumVotes,
    scheme: format.scheme,
  };
}

export function extractBlindWatermark({
  data,
  info,
  role,
  key,
  scheme = WATERMARK_SCHEME,
}) {
  assertRawInfo(info);
  const normalizedKey = toKey(key);
  const format = getPayloadFormat(scheme);
  const step = QUANTIZATION_STEPS[role];

  if (!step) {
    throw new Error(`不支持的盲水印资源角色：${role}`);
  }

  const oneVotes = new Uint16Array(format.payloadBitLength);
  const totalVotes = new Uint16Array(format.payloadBitLength);
  const carrierCount = visitCarrierBlocks(
    data,
    info,
    role,
    normalizedKey,
    format,
    ({ blockX, blockY, bitIndex, pairIndex }) => {
      const difference = readCoefficientDifference(
        data,
        info,
        blockX,
        blockY,
        pairIndex,
      );
      oneVotes[bitIndex] += parity(Math.round(difference / step));
      totalVotes[bitIndex] += 1;
    },
  );
  const bits = Array.from(totalVotes, (votes, bitIndex) =>
    oneVotes[bitIndex] > votes / 2 ? 1 : 0,
  );
  const minimumVotes = Math.min(...totalVotes);
  const confidence =
    Array.from(totalVotes).reduce((total, votes, bitIndex) => {
      if (votes === 0) {
        return total;
      }

      const zeroVotes = votes - oneVotes[bitIndex];
      return total + Math.abs(oneVotes[bitIndex] - zeroVotes) / votes;
    }, 0) / format.payloadBitLength;
  const parsed = parsePayload(bitsToBuffer(bits), normalizedKey, format.scheme);

  return {
    ...parsed,
    carrierCount,
    confidence,
    minimumVotes,
    scheme: format.scheme,
    valid: parsed.valid && minimumVotes >= MINIMUM_VOTES_PER_BIT,
  };
}
