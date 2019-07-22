const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.base.config')

// 因为是打包服务器端依赖的代码，所以target要设为node，同时，output的libraryTarget要设为commonjs2
module.exports = merge(base, {
  target: 'node',
  entry: {
    server: path.resolve(__dirname, '../src/entry-server.js')
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  // 这里关于HtmlWebpackPlugin配置的意思是，不要在index.ssr.html中引入打包出的server.bundle.js，
  // 要引为浏览器打包的client.bundle.js，原因前面说过了，是为了让Vue可以将服务器吐出来的html进行激活，从而接管后续响应。
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.ssr.html'),
      filename: 'index.ssr.html',
      files: {
        js: 'client.bundle.js'
      },
      excludeChunks: ['server']
    })
  ]
})
