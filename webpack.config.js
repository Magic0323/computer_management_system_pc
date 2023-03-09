/*
 * @Author: wei yin
 * @Date: 2023-03-08 16:50:41
 * @LastEditors: wei yin
 * @LastEditTime: 2023-03-08 16:55:02
 * @Description:
 */
const path = require('path')
module.exports = {
  // 入口文件。指最终渲染index.html页面上原始id为“root”的那个js文件
  entry: ['./src/index.js'],
  // 出口文件。指定最终打包成的文件名和路径
  output: {
    path: path.join(__dirname + '/assets/'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    // 匹配规则。针对各类文件使用的加载器，下面loader和use的写法皆可。
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'jsx-loader?harmony',
          'babel-loader?presets[]=react,presets[]=es2015'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,
        loader: 'url-loader?name=images/[hash:8].[name].[ext]'
      },
      {
        test: /\.html$/,
        loader:
          'file-loader?name=[path][hash:8][name].[ext]!extract-loader!html-loader'
      }
    ]
  }
}
