module.exports = {
  collectCoverageFrom: [
    'src/*.{js,ts,tsx}',
    'src/**/*.{js,ts,tsx}',
    '!src/__tests__/**',
    '!src/tests/**',
    '!dist/**',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['json'],
  // preset: 'ts-jest',
  // testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/*.test.ts',
    '**/__tests__/*.test.tsx',
    '**/__tests__/**/*.test.ts',
    '**/__tests__/**/*.test.tsx',
    '**/*.test.ts',
    '**/*.test.tsx',
  ],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc-node/jest'],
  },
};
