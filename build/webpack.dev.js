const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    open: true,
    port: 9090
  },
  devtool: 'inline-source-map',
  plugins: [
    new UglifyJSPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});