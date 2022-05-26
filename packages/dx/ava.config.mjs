export default {
  extensions: {
    ts: "module",
    tsx: "module",
  },
  failFast: true,
  files: [
    "src/__tests__/**/*",
    "src/tests/**/*",
    "src/**/*.test.ts",
    "src/**/*.test.js",
  ],
  nodeArguments: [
    "--loader=ts-node/esm",
    "--experimental-specifier-resolution=node",
  ],
  verbose: false,
};
