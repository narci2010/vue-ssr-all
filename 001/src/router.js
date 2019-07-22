// router.js
import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import App from './App.vue'
// import App from './App'  ->"export 'default' (imported as 'App') was not found in './App'
Vue.use(Router)

export function createRouter() {
  return new Router({
    //history,hash
    mode: 'history',
    routes: [
      {
        name: 'Home',
        path: '/',
        component: Home
      },
      {
        name: 'App',
        path: '/home',
        component: App
      },
      {
        name: 'Foo',
        path: '/foo',
        component: () => import('./components/Foo.vue')
      },
      {
        name: 'Bar',
        path: '/bar',
        component: () => import('./components/Bar.vue')
      },
      {
        name: 'Baz',
        path: '/baz',
        component: () => import('./components/Baz.vue')
      },
      {
        name: 'Item',
        path: '/item/:itemId',
        component: () => import('./components/Item.vue')
      }
    ]
  })
}
