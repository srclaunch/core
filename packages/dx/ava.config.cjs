module.exports = {
  extensions: {
    ts: 'module',
    tsx: 'module',
  },
  failFast: true,
  files: [
    '**/__tests__/*.test.ts',
    '**/__tests__/**/*.test.ts',
    '**/*.test.ts',
    '**/*.test.js',
  ],
  nodeArguments: [
    '--loader=ts-node/esm',
    '--experimental-specifier-resolution=node',
  ],
  require: ['ts-node/register'],
  verbose: true,
};
