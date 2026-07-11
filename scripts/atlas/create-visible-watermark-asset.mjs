import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "../..");
const outputPath = path.join(
  scriptDirectory,
  "assets/xqy-visible-mesh-wordmark-v2.png",
);
const width = 900;
const height = 240;
const wordmarkSvg = Buffer.from(
  `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <text x="450" y="128" dominant-baseline="middle" text-anchor="middle"
      font-family="Noto Serif CJK SC, Source Han Serif SC, Songti SC, STSong, serif"
      font-size="200" font-weight="600" letter-spacing="12"
      fill="#ffffff">小钟岐医</text>
  </svg>`,
  "utf8",
);

await mkdir(path.dirname(outputPath), { recursive: true });
await sharp(wordmarkSvg)
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(outputPath);

console.log(path.relative(projectRoot, outputPath));
