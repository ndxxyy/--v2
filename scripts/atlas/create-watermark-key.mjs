import { randomBytes } from "node:crypto";
import { chmod, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "../..");
const defaultKeyPath = path.join(
  projectRoot,
  "content-assets/masters/.atlas-watermark-key",
);

function readArgument(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

async function main() {
  const keyPath = path.resolve(readArgument("--output") ?? defaultKeyPath);
  await mkdir(path.dirname(keyPath), { recursive: true });

  try {
    await writeFile(keyPath, `${randomBytes(32).toString("hex")}\n`, {
      encoding: "utf8",
      flag: "wx",
      mode: 0o600,
    });
    await chmod(keyPath, 0o600);
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "EEXIST"
    ) {
      throw new Error(
        `密钥已存在，为避免已发布水印失效，未覆盖：${keyPath}`,
      );
    }

    throw error;
  }

  console.log(`已创建图谱盲水印密钥：${keyPath}`);
  console.log("请将该文件单独备份；丢失后将无法验证已发布图片。");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
