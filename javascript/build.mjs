import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import * as esbuild from "esbuild";
import { NodeResolvePlugin } from "@esbuild-plugins/node-resolve";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

const platform = process.argv[2] ?? "esm";

/**
 * @type{esbuild.BuildOptions}
 */
const cjsConfig = {
  platform: "node",
  format: "cjs",
  plugins: [],
  minify: false,
};

/**
 * @type{esbuild.BuildOptions}
 */
const esmConfig = {
  format: "esm",
  platform: "browser",
};

/**
 * @type{esbuild.BuildOptions}
 */
const umdConfig = {
  format: "iife",
  globalName: "TimeAnalyzerLib",
  platform: "browser",
};

/**
 * @type{esbuild.BuildOptions}
 */
const commonConfig = {
  entryPoints: ["src/index.ts"],
  outfile: `dist/${platform}/index.js`,
  bundle: true,
  minify: true,
  plugins: [
    NodeModulesPolyfillPlugin(),
    NodeResolvePlugin({
      extensions: [".ts", ".js"],
      onResolved: (resolved) => {
        if (resolved.includes("node_modules")) {
          return {
            external: false,
          };
        }
        return resolved;
      },
    }),
    NodeGlobalsPolyfillPlugin({
      process: true,
    }),
  ],
};

const configMap = {
  esm: esmConfig,
  umd: umdConfig,
  cjs: cjsConfig,
};
esbuild.build({
  ...commonConfig,
  ...configMap[platform],
});
