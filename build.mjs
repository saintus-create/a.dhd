import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build as esbuild } from "esbuild";
import esbuildPluginPino from "esbuild-plugin-pino";
import { rm } from "node:fs/promises";

globalThis.require = createRequire(import.meta.url);

const dir = path.dirname(fileURLToPath(import.meta.url));

async function buildAll() {
  const distDir = path.resolve(dir, "dist");
  await rm(distDir, { recursive: true, force: true });

  await esbuild({
    entryPoints: [path.resolve(dir, "src/index.ts")],
    platform: "node",
    bundle: true,
    format: "esm",
    outdir: distDir,
    outExtension: { ".js": ".mjs" },
    logLevel: "info",
    external: ["*.node", "pg-native"],
    sourcemap: "linked",
    plugins: [esbuildPluginPino({ transports: ["pino-pretty"] })],
    banner: {
      js: `import { createRequire as __crReq } from 'node:module';
import __bPath from 'node:path';
import __bUrl from 'node:url';
globalThis.require = __crReq(import.meta.url);
globalThis.__filename = __bUrl.fileURLToPath(import.meta.url);
globalThis.__dirname = __bPath.dirname(globalThis.__filename);`,
    },
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
