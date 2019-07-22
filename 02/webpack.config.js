const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// 这个配置给npm run dev 用
module.exports = {
  mode: 'development',

  // 默认入口地址为main.js
  // 服务器端渲染不能用默认webpack-dev-server做服务器，需要自己编码实现（这个是复杂的地方）
  entry: './src/entry-client.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader']
        // use: ExtractTextPlugin.extract({
        //   fallback: 'vue-style-loader',
        //   use: [
        //     'css-loader',
        //     'postcss-loader'
        //   ]
        // })
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000 // 10Kb
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin('styles.css')
  ]
}
