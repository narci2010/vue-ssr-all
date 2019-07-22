// npm run build:client01
// npm run build:server02
// npm run s02
const path = require('path')
const fs = require('fs')

const serverBundle = require(path.resolve(
  __dirname,
  '../dist/vue-ssr-server-bundle.json'
))
const clientManifest = require(path.resolve(
  __dirname,
  '../dist/vue-ssr-client-manifest.json'
))
const template = fs.readFileSync(
  path.resolve(__dirname, '../dist/index.ssr.html'),
  'utf-8'
)

const server = require('express')()

const { createBundleRenderer } = require('vue-server-renderer')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 推荐
  template, // （可选）页面模板
  clientManifest // （可选）客户端构建 manifest
})

// const resolve = file => path.resolve(__dirname, file)
// const express = require('express')

// const serve = (path, cache) =>
//   express.static(resolve(path), {
//     maxAge: 60 * 60 * 24 * 30 // 静态资源设置缓存
//   })
// server.use('/dist', serve(path.resolve(__dirname, '../dist'), true)) // 静态资源
server.get('*', (req, res) => {
  // 未渲染好返回
  if (!renderer) {
    return res.end('waiting for a moment.')
  }
  res.setHeader('Content-Type', 'text/html')
  // 错误处理
  const errorHandler = err => {
    if (err && err.code === 404) {
      res.status(404).end('404 | Page Not Found')
    } else {
      console.log(err)
      res.status(500).end('500 | Internal Server Error')
    }
  }
  // 将 Vue 实例渲染为一个 Node.js 流 (stream)
  renderer
    .renderToStream({ url: req.url })
    .on('error', errorHandler)
    .on('end', () => console.log(`ok`))
    .pipe(res)
})

console.log('启动端口启动成功：http://localhost:' + 8080)
server.listen(8080)
