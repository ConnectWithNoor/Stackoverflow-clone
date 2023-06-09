// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const base = require("../../jest.config");

module.exports = {
  ...base,
  rootDir: "./build",
  name: "drivers",
  collectCoverage: true,
  verbose: true,
  coverageThreshold: {
    global: {
      statements: 5,
      branches: 5,
      functions: 5,
      lines: 5,
    },
  },
};
