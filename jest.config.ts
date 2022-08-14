export default {
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  rootDir: ".",
  testRegex: ".*\\..*spec\\.ts$",
  transform: {
    "ˆ.+\\.ts?$": ["@swc/jest"],
  },
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
  },
};
