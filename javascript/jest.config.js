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
    '^@/lib/(.*)$': '<rootDir>/../lib/$1'
  },
  coverageDirectory: null,
  testEnvironment: 'node',
};
