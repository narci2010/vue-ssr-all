const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.base.config')
// 浏览器端渲染
module.exports = merge(base, {
  entry: {
    client: path.resolve(__dirname, '../src/entry-client01.js')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html'
    })
  ]
})
