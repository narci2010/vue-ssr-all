// 直接运行即可
// npm run s10
const Vue = require('vue')
const server = require('express')()
const path = require('path')
const templatePath = path.resolve(__dirname, '../src/index.template.html')
// template: require('fs').readFileSync('./src/index.template.html', 'utf-8')
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync(templatePath, 'utf-8')
})
// const renderer = require('vue-server-renderer').createRenderer({
//   template:
//     '<!DOCTYPE html>' +
//     '<html lang="en">' +
//     '<head>' +
//     '<meta charset="utf-8">' +
//     // context.head will be injected here
//     // context.styles will be injected here
//     '</head>' +
//     '<body>' +
//     '<!--vue-ssr-outlet-->' + // <- app content rendered here
//     // context.state will be injected here
//     '</body>' +
//     '</html>'
// })

const context = {
  title: 'hello',
  meta: `
       <meta http-equiv="expires" content="31 Dec 2008">
       <meta name="keywords" content="HTML,ASP,PHP,SQL">
       <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
     `
}

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })

  renderer.renderToString(app, context, (err, html) => {
    // 页面 title 将会是 "Hello"
    // meta 标签也会注入
    console.log('err:' + err)
    console.log(html) // html 将是注入应用程序内容的完整页面
    //     res.end(`
    //     <!DOCTYPE html>
    //     <html lang="utf-8">
    //       <head>
    //       <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    //       <title>Hello</title></head>
    //       <body>${html}</body>
    //     </html>
    //   `)
    res.end(html)
  })
})
console.log('启动端口启动成功：' + 8080)
server.listen(8080)
