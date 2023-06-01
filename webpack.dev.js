const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './.env.dev'),
    }),
  ],
});
