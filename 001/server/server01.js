// npm run build:client01
// npm run build:server01
// npm run s01
const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const path = require('path')
const fs = require('fs')
const backendApp = new Koa()
const backendRouter = new Router()

// server.bundle.js在这里被使用啦
const bundle = fs.readFileSync(
  path.resolve(__dirname, '../dist/server.bundle.js'),
  'utf-8'
)
const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
  template: fs.readFileSync(
    path.resolve(__dirname, '../dist/index.ssr.html'),
    'utf-8'
  )
})

// 后端Server
backendRouter.get('/index', (ctx, next) => {
  // 这里用 renderToString 的 promise 返回的 html 有问题，没有样式
  renderer.renderToString((err, html) => {
    if (err) {
      console.error(err)
      ctx.status = 500
      ctx.body = '服务器内部错误'
    } else {
      console.log(html)
      ctx.status = 200
      ctx.body = html
    }
  })
})

backendApp.use(serve(path.resolve(__dirname, '../dist')))

backendApp.use(backendRouter.routes()).use(backendRouter.allowedMethods())

backendApp.listen(8080, () => {
  console.log('服务器端渲染地址： http://localhost:8080')
})
