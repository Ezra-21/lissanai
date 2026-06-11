/** @type {import('jest').Config} */
const config = {
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
  },
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
  collectCoverageFrom: [
    "src/lib/**/*.{ts,tsx}",
    "src/app/lib/**/*.{ts,tsx}",
    "src/app/api/**/*.ts",
    "src/components/ui/**/*.tsx",
    "src/constants/**/*.ts",
    "!src/**/*.d.ts",
    "!src/app/api/auth/[...nextauth]/route.ts",
  ],
  coverageReporters: ["text", "text-summary", "lcov"],
};

module.exports = config;
