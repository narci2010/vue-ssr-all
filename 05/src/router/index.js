import Vue from 'vue'
import Router from 'vue-router'
import Bar from '../components/Bar.vue'
import App from '../App.vue'

Vue.use(Router)

function createRouter() {
  const routes = [
    {
      path: '/bar',
      component: Bar
    },
    {
      path: '/index',
      component: App
    },
    {
      path: '/foo',
      component: () => import('../components/Foo.vue') // 异步路由
    }
  ]

  const router = new Router({
    mode: 'history',
    routes
  })

  return router
}

export default createRouter
