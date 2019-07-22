import { createApp } from './app.js'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, store, App } = createApp()

    let components = App.components
    let asyncDataPromiseFns = []

    // 此步是服务器端渲染的关键，为所有组件在服务器端初始化数据
    // 存在问题：数据并未渲染到html中，还是不利于seo
    Object.values(components).forEach(component => {
      if (component.asyncData) {
        asyncDataPromiseFns.push(component.asyncData({ store }))
      }
    })

    Promise.all(asyncDataPromiseFns).then(result => {
      // 当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态，自动嵌入到最终的 HTML 中
      context.state = store.state

      console.log(222)
      console.log(store.state)
      console.log(context.state)
      console.log(context)
      // 我们使用Promise.all等所有的异步方法都成功返回，才resolve(app)。
      resolve(app)
    }, reject)
  })
}
