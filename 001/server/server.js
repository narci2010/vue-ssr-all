// npm run build:client
// npm run build:server
// npm run start
const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const path = require('path')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')
const backendApp = new Koa()
const backendRouter = new Router()

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

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: template,
  clientManifest: clientManifest
})

// 后端Server
backendApp.use(serve(path.resolve(__dirname, '../dist')))

backendRouter.get('*', (ctx, next) => {
  console.log('ctx', ctx)
  console.log('url', ctx.url)

  let context = {
    url: ctx.url
  }

  const ssrStream = renderer.renderToStream(context)
  ctx.status = 200
  ctx.type = 'html'
  ctx.body = ssrStream
})

backendApp.use(backendRouter.routes()).use(backendRouter.allowedMethods())

backendApp.listen(8080, () => {
  console.log('服务器端渲染地址： http://localhost:8080')
})
