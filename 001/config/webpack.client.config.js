const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = merge(baseConfig, {
  entry: {
    client: path.resolve(__dirname, '../src/entry-client.js')
  },
  devServer: {
    // 解决history模式，开发模式下刷新出错
    historyApiFallback: {
      //  index: url.parse(options.dev ? '/assets/' : publicPath).pathname,
      //  rewrites: [
      //    { from: /^.*/, to: path.resolve(__dirname, '../dist/index.html') }
      //  ]
      index: '/index.html'
    },
    contentBase: path.resolve(__dirname, '../dist'), // 定义页面文件的位置
    hot: true,
    inline: true,
    compress: true,
    publicPath: '/',
    port: 8181 //端口你可以自定义
  },
  optimization: {
    // minimizer: true, // [new UglifyJsPlugin({...})]
    providedExports: true,
    usedExports: true,
    //识别package.json中的sideEffects以剔除无用的模块，用来做tree-shake
    //依赖于optimization.providedExports和optimization.usedExports
    sideEffects: true,
    //取代 new webpack.optimize.ModuleConcatenationPlugin()
    concatenateModules: true,
    //取代 new webpack.NoEmitOnErrorsPlugin()，编译错误时不打印输出资源。
    noEmitOnErrors: true,
    splitChunks: {
      // maxAsyncRequests: 1,                     // 最大异步请求数， 默认1
      // maxInitialRequests: 1,                   // 最大初始化请求数，默认1
      cacheGroups: {
        // 抽离第三方插件
        commons: {
          // test: path.resolve(__dirname, '../node_modules'),
          chunks: 'all',
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
          name: 'common'
        }
      }
    }
  },
  plugins: [
    // 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，
    // 以便可以在之后正确注入异步 chunk。
    // 这也为你的 应用程序/vendor 代码提供了更好的缓存。
    // Error: webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
    // 主要是因为webpack4中删除了webpack.optimize.CommonsChunkPlugin，并且使用optimization中的splitChunk来替代
    //     new webpack.optimize.CommonsChunkPlugin({
    //       name: 'manifest',
    //       minChunks: Infinity
    //     }),

    // 此插件在输出目录中
    // 生成 `vue-ssr-client-manifest.json`。
    new VueSSRClientPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html'
    })
  ]
})
