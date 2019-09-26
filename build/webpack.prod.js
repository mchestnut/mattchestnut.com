const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      dangerouslyAllowCleanPatternsOutsideProject: true,
      cleanOnceBeforeBuildPatterns: ['../dist/']
    }
    ),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});