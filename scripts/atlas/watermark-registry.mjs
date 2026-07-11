import { randomUUID } from "node:crypto";
import { chmod, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const REGISTRY_VERSION = 1;

function emptyRegistry() {
  return { version: REGISTRY_VERSION, entries: [] };
}

function validateRegistry(registry, registryPath) {
  if (
    !registry ||
    registry.version !== REGISTRY_VERSION ||
    !Array.isArray(registry.entries)
  ) {
    throw new Error(`盲水印登记表格式无效：${registryPath}`);
  }

  for (const entry of registry.entries) {
    if (
      !entry ||
      typeof entry.assetId !== "string" ||
      typeof entry.fingerprint !== "string" ||
      typeof entry.registeredAt !== "string" ||
      typeof entry.scheme !== "string"
    ) {
      throw new Error(`盲水印登记表存在无效记录：${registryPath}`);
    }
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
      return emptyRegistry();
    }

    throw error;
  }
}

export async function registerWatermarkAssets(registryPath, records) {
  const registry = await readWatermarkRegistry(registryPath);
  const registryKey = (scheme, fingerprint) => `${scheme}:${fingerprint}`;
  const bySchemeAndFingerprint = new Map(
    registry.entries.map((entry) => [
      registryKey(entry.scheme, entry.fingerprint),
      entry,
    ]),
  );
  let changed = false;

  for (const record of records) {
    const key = registryKey(record.scheme, record.fingerprint);
    const existing = bySchemeAndFingerprint.get(key);

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
