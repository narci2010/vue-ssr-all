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

const app = require('express')()
const LRU = require('lru-cache')
const { createBundleRenderer } = require('vue-server-renderer')
const resolve = file => path.resolve(__dirname, file)
const renderer = createBundleRenderer(serverBundle, {
  // this is only needed when vue-server-renderer is npm-linked
  basedir: resolve('../dist'),
  // for component caching
  cache: new LRU({
    max: 1000,
    maxAge: 1000 * 60 * 15
  }),
  runInNewContext: false, // 推荐
  template, // （可选）页面模板
  clientManifest // （可选）客户端构建 manifest
})

app.get('*', (req, res) => {
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
const port = 8080
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
