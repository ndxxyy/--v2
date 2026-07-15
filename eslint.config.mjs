import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  globalIgnores([
    ".next/**",
    ".open-next/**",
    ".agents/**",
    "node_modules/**",
    "out/**",
    "coverage/**",
    "artifacts/**",
    "next-env.d.ts",
    "content-assets/masters/**",
    "content-assets/backups/**",
  ]),
]);
