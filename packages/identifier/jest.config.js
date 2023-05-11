const sourceNameMapper = {
  '@/(.*)$': '<rootDir>/src/$1',
}

module.exports = {
  moduleNameMapper: {
    ...sourceNameMapper,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/cypress/'],
  transform: {
    // @see https://stackoverflow.com/a/60905543
    '^.+\\.ts$': ['ts-jest', { isolatedModules: true }],
  },
  coverageReporters: ['text', 'cobertura'],
}
