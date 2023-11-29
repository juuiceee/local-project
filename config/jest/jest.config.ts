import path from 'path';

export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>src '],
  testMatch: ['<rootDir>src/**/*(*.)@(spec| test). [tj]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup-tests.ts'],
  moduleNameMapper: {
    '\\.(s?css))$': '<rootDir>/__mocks__/styleMock.js',
    '\\.svg': path.resolve(__dirname, ' '),
  },
  rootDir: '../../',
};
