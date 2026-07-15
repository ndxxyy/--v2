import { randomUUID } from "node:crypto";
import { chmod, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const REGISTRY_VERSION = 1;

function validateRegistry(registry, registryPath) {
  if (
    !registry ||
    registry.version !== REGISTRY_VERSION ||
    !Array.isArray(registry.entries) ||
    registry.entries.length === 0
  ) {
    throw new Error(`盲水印登记表格式无效：${registryPath}`);
  }

  const byFingerprint = new Map();
  const bySchemeAndAsset = new Map();

  for (const entry of registry.entries) {
    if (
      !entry ||
      typeof entry.assetId !== "string" ||
      typeof entry.fingerprint !== "string" ||
      typeof entry.registeredAt !== "string" ||
      typeof entry.scheme !== "string" ||
      !/^[a-f0-9]{8}$/.test(entry.fingerprint) ||
      entry.assetId.trim() === "" ||
      entry.scheme.trim() === "" ||
      Number.isNaN(Date.parse(entry.registeredAt))
    ) {
      throw new Error(`盲水印登记表存在无效记录：${registryPath}`);
    }

    const key = `${entry.scheme}:${entry.fingerprint}`;
    const assetKey = `${entry.scheme}:${entry.assetId}`;
    const existing = byFingerprint.get(key);
    const existingAsset = bySchemeAndAsset.get(assetKey);

    if (existing || existingAsset) {
      throw new Error(
        `盲水印登记表存在重复、冲突或同方案密钥漂移：${key} -> ${existing?.assetId ?? existingAsset.fingerprint}/${entry.assetId}`,
      );
    }

    byFingerprint.set(key, entry);
    bySchemeAndAsset.set(assetKey, entry);
  }

  return registry;
}

export async function readWatermarkRegistry(registryPath) {
  try {
    return validateRegistry(
      JSON.parse(await readFile(registryPath, "utf8")),
      registryPath,
    );
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      throw new Error(`盲水印登记表缺失，拒绝静默重建历史：${registryPath}`);
    }

    throw error;
  }
}

export function assertWatermarkRegistryContains(
  registry,
  records,
  label = "当前图谱资产",
) {
  const byFingerprint = new Map(
    registry.entries.map((entry) => [
      `${entry.scheme}:${entry.fingerprint}`,
      entry,
    ]),
  );
  const missing = records.filter((record) => {
    const entry = byFingerprint.get(`${record.scheme}:${record.fingerprint}`);
    return !entry || entry.assetId !== record.assetId;
  });

  if (missing.length > 0) {
    throw new Error(
      `${label}的盲水印历史指纹未完整保留：${missing
        .slice(0, 10)
        .map((record) => record.assetId)
        .join(", ")}`,
    );
  }
}

export async function registerWatermarkAssets(
  registryPath,
  records,
  { requiredRecords = [] } = {},
) {
  const registry = await readWatermarkRegistry(registryPath);
  assertWatermarkRegistryContains(
    registry,
    requiredRecords,
    "生成前既有公开资产",
  );
  const registryKey = (scheme, fingerprint) => `${scheme}:${fingerprint}`;
  const bySchemeAndFingerprint = new Map(
    registry.entries.map((entry) => [
      registryKey(entry.scheme, entry.fingerprint),
      entry,
    ]),
  );
  const bySchemeAndAsset = new Map(
    registry.entries.map((entry) => [
      `${entry.scheme}:${entry.assetId}`,
      entry,
    ]),
  );
  let changed = false;
  const incomingKeys = new Set();

  for (const record of records) {
    const key = registryKey(record.scheme, record.fingerprint);

    if (
      typeof record.assetId !== "string" ||
      typeof record.scheme !== "string" ||
      !/^[a-f0-9]{8}$/.test(record.fingerprint) ||
      incomingKeys.has(key)
    ) {
      throw new Error(`待登记盲水印记录无效或重复：${record.assetId ?? "未知"}`);
    }

    incomingKeys.add(key);
    const existing = bySchemeAndFingerprint.get(key);
    const existingAsset = bySchemeAndAsset.get(
      `${record.scheme}:${record.assetId}`,
    );

    if (existingAsset && existingAsset.fingerprint !== record.fingerprint) {
      throw new Error(
        `检测到同一资产/方案指纹变化，拒绝疑似密钥漂移：${record.scheme}/${record.assetId}`,
      );
    }

    if (existing) {
      if (existing.assetId !== record.assetId) {
        throw new Error(
          `盲水印指纹冲突：${record.scheme}/${record.fingerprint} 同时指向 ${existing.assetId} 与 ${record.assetId}`,
        );
      }

      continue;
    }

    const entry = {
      assetId: record.assetId,
      fingerprint: record.fingerprint,
      registeredAt: new Date().toISOString(),
      scheme: record.scheme,
    };
    registry.entries.push(entry);
    bySchemeAndFingerprint.set(key, entry);
    bySchemeAndAsset.set(`${record.scheme}:${record.assetId}`, entry);
    changed = true;
  }

  if (!changed) {
    return registry;
  }

  registry.entries.sort(
    (left, right) =>
      left.scheme.localeCompare(right.scheme, "en") ||
      left.assetId.localeCompare(right.assetId, "en"),
  );
  const temporaryPath = path.join(
    path.dirname(registryPath),
    `.${path.basename(registryPath)}.${randomUUID()}.tmp`,
  );
  await mkdir(path.dirname(registryPath), { recursive: true });

  try {
    await writeFile(temporaryPath, `${JSON.stringify(registry, null, 2)}\n`, {
      encoding: "utf8",
      mode: 0o600,
    });
    await chmod(temporaryPath, 0o600);
    await rename(temporaryPath, registryPath);
    await chmod(registryPath, 0o600);
  } catch (error) {
    try {
      await rm(temporaryPath, { force: true });
    } catch {
      // 保留原始写入异常。
    }

    throw error;
  }

  return registry;
}
