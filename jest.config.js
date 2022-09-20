const {defaults} = require('jest-config');

/** @type {import('jest').Config} */
const config = {
    modulePathIgnorePatterns: ['<rootDir>/resources/'],
};

module.exports = config;