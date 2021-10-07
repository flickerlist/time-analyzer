module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'ts'
  ],
  rootDir: '__test',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  moduleNameMapper: {
    '^time-analyzer$': '<rootDir>/../src/index',
    '^time-analyzer/(.*)$': '<rootDir>/../src/$1'
  },
  coverageDirectory: null,
  testEnvironment: 'node',
};
