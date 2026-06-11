/** @type {import('jest').Config} */
const config = {
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
  collectCoverageFrom: [
    "src/lib/**/*.{ts,tsx}",
    "src/app/lib/**/*.{ts,tsx}",
    "src/constants/**/*.ts",
    "!src/**/*.d.ts",
  ],
  coverageReporters: ["text", "text-summary", "lcov"],
};

module.exports = config;
