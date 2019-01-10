'use strict';

module.exports = {
  "moduleNameMapper": {
    "\\.(css)$": "<rootDir>/node_modules/jest-css-modules"
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest'
  },
  "setupTestFrameworkScriptFile": "./enzyme.setup.js",
};
