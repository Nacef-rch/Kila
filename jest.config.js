module.exports = {
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
    moduleNameMapper: {
        '^lodash-es$': 'lodash',
    },

    globals: {
        __TRANSFORM_HTML__: true,
    },
    transform: {
        '^.+\\.(ts|js|html)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],

    transformIgnorePatterns: ['node_modules/(?!@storybook/*)'],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/dist/',
        '<rootDir>/storybook-static/',
        '<rootDir>/src/test.ts',
    ],
    testMatch: ['<rootDir>/src/**/*.spec.ts'],
    collectCoverage: false,
    collectCoverageFrom: [
        '**/src/**/*.ts',
        '!**/node_modules/**',
        '!**/src/**/*.module.ts',
        '!test/**',
        '!**/polyfills.ts',
        '!**/environments/**',
        '!**/src/setupJest.ts',
    ],
};
