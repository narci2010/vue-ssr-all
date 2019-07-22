// 直接运行即可
// npm run s00
const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="utf-8">
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})
console.log('启动端口启动成功：' + 8080)
server.listen(8080)
