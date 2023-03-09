/*
 * @Author: wei yin
 * @Date: 2023-03-08 16:37:04
 * @LastEditors: wei yin
 * @LastEditTime: 2023-03-08 16:39:33
 * @Description:
 */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
const config = {
  entry: './src/index',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
    publicPath: '/'
  },
  mode: 'development',
  cache: {
    type: 'memory'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000,
    hot: true,
    proxy: {
      '/api': 'http://localhost:7001'
    },
    historyApiFallback: true
    // magicHtml: true,
  },
  performance: {
    hints: 'warning', // 枚举
    hints: 'error', // 性能提示中抛出错误
    hints: false, // 关闭性能提示
    maxAssetSize: 200000, // 整数类型（以字节为单位）
    maxEntrypointSize: 400000, // 整数类型（以字节为单位）
    assetFilter: function (assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader'
          // "./loader",
          // "postcss-loader",
          // {
          //     loader: "less-loader",
          // },
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: 'asset'
      }
    ]
  }
}

module.exports = smp.wrap(config)
