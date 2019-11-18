
module.exports = {
  preset: 'ts-jest',
  watchPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  rootDir: __dirname,
  // 源代码中相同的 `@` -> `src` 别名
  testMatch: ['<rootDir>/__tests__/**/*spec.[jt]s?(x)'],
}
