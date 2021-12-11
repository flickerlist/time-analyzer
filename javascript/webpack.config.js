const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/umd.ts',
  mode: 'production',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      assert: false,
      util: require.resolve('util/'),
      process: require.resolve('process/browser'),
    },
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};