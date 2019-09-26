const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  entry: {
    main: './src/js/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.[hash].js',
    hashDigestLength: 8
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: './src/img/',
        to: 'img/'
      }
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',  
      favicon: 'src/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css'
    }),
    new WebpackMd5Hash()
  ]
};