const path = require('path');
const webpack = require('webpack');
const __PRODUCTION__ = process.env.NODE_ENV === 'production';

module.exports = {
  entry: [
    './src/app.ts',
  ],
  target: 'node',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.ts'],
  },

  plugins: __PRODUCTION__ ? [
    new webpack.optimize.UglifyJsPlugin({
      screwIE8: true,
    }),
  ] : undefined,

  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: 'awesome-typescript-loader',
      }],
    }, {
      test: /\.html$/,
      use: [{
        loader: 'raw-loader',
      }],
    }],
  },
};
