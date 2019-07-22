import Vue from 'vue'
import { createApp } from './main'
import ProgressBar from './components/ProgressBar.vue'

// global progress bar
const bar: any = (Vue.prototype.$bar = new Vue(ProgressBar).$mount())
document.body.appendChild(bar.$el)

// $mountについて　https://v1-jp.vuejs.org/api/#vm-mount
// $elについて　https://jp.vuejs.org/v2/api/index.html#vm-el

// ルートコンポーネントが再利用されたとき（つまりルートは同じだがパラメーターやクエリが変わったとき。例えば user/1 から user/2) も
// asyncDataを呼ぶ
// https://ssr.vuejs.org/ja/guide/data.html#クライアントサイドのデータ取得
Vue.mixin({
  beforeRouteUpdate(to, from, next) {
    const { asyncData } = (this as any).$options
    if (asyncData) {
      asyncData({
        store: (this as any).$store,
        route: to
      })
        .then(next)
        .catch(next)
    } else {
      next()
    }
  }
})

const { app, router, store } = createApp()

interface IWindow {
  __INITIAL_STATE__: any
  addEventListener: any
}
declare var window: IWindow

// SSRによりstoreが更新された際に、それがクライアント側にも反映されるようにする
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
// 匹配要渲染的视图后，再获取数据：
// 此策略将客户端数据预取逻辑，放在视图组件的 beforeMount 函数中。当路由导航被触发时，可以立即切换视图，因此应用程序具有更快的响应速度。
// 然而，传入视图在渲染时不会有完整的可用数据。因此，对于使用此策略的每个视图组件，都需要具有条件加载状态。
// Vue.mixin({
//   beforeMount() {
//     const { asyncData } = this.$options
//     if (asyncData) {
//       // 将获取数据操作分配给 promise
//       // 以便在组件中，我们可以在数据准备就绪后
//       // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
//       this.dataPromise = asyncData({
//         store: this.$store,
//         route: this.$route
//       })
//     }
//   }
// })
// 但是无论你选择哪种策略，当路由组件重用（同一路由，但是 params 或 query 已更改，例如，从 user/1 到 user/2）时，
// 也应该调用 asyncData 函数。我们也可以通过纯客户端 (client-only) 的全局 mixin 来处理这个问题：
// Vue.mixin({
//   beforeRouteUpdate(to, from, next) {
//     const { asyncData } = this.$options
//     if (asyncData) {
//       asyncData({
//         // Property '$store' does not exist on type 'VueConstructor<Vue>
//         // 不是原始vue实例，封装过this.$store this['$store']   (this as any).$store 用as关键字强制类型转换，巧妙解决类型问题
//         store: this.$store,
//         route: to
//       })
//         .then(next)
//         .catch(next)
//     } else {
//       next()
//     }
//   }
// })

router.onReady(() => {
  // asyncData を扱うためにルーターのフックを追加します。これは初期ルートが解決された後に実行します
  // そうすれば（訳注: サーバーサイドで取得したために）既に持っているデータを冗長に取得しなくて済みます
  // すべての非同期なコンポーネントが解決されるように router.beforeResolve() を使います

  // 在路由导航之前解析数据：
  // 使用此策略，应用程序会等待视图所需数据全部解析之后，再传入数据并处理当前视图。好处在于，可以直接在数据准备就绪时，
  // 传入视图渲染完整内容，但是如果数据预取需要很长时间，用户在当前视图会感受到"明显卡顿"。因此，如果使用此策略，建议提供一个数据加载指示器 (data loading indicator)。
  // 我们可以通过检查匹配的组件，并在全局路由钩子函数中执行 asyncData 函数，来在客户端实现此策略。注意，在初始路由准备就绪之后，
  // 我们应该注册此钩子，这样我们就不必再次获取服务器提取的数据。
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)

    // まだ描画されていないコンポーネントにのみ関心を払うため、　＝＞
    // 2つの一致したリストに差分が表れるまで、コンポーネントを比較します
    let diffed = false
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = prevMatched[i] !== c)
    })

    if (!activated.length) {
      return next()
    }

    // 他のアプローチとして、asyncData が存在するコンポーネントを読み込む場合にのみ、
    // インジケーターを表示させるようなものもある
    // https://github.com/vuejs/vue-hackernews-2.0/blob/master/src/entry-client.js

    // ここでローディングインジケーターを開始
    bar.start()

    Promise.all(
      activated.map((c: any) => {
        if (c.asyncData) {
          return c.asyncData({ store, route: to })
        }
      })
    )
      .then(() => {
        // ローディングインジケーターを停止させます
        bar.finish()
        next()
      })
      .catch(next)
  })
  app.$mount('#app')
})

// service worker
if ('https:' === location.protocol) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
    })
  }
}

// const Foo = {
//      template: `...`,
//      beforeRouteEnter (to, from, next) {
//        // 在渲染该组件的对应路由被 confirm 前调用
//        // 不！能！获取组件实例 `this`
//        // 因为当钩子执行前，组件实例还没被创建
//      },
//      beforeRouteUpdate (to, from, next) {
//        // 在当前路由改变，但是该组件被复用时调用
//        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
//        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
//        // 可以访问组件实例 `this`
//      },
//      beforeRouteLeave (to, from, next) {
//        // 导航离开该组件的对应路由时调用
//        // 可以访问组件实例 `this`
//      }
//    }

//    export default {
//        data(){
//            return {
//                 num: 18
//            }
//        },
//        beforeRouteEnter(to, from, next){
//            next(vm=>{
//                vm.num=19;
//            })
//        }
//    }
