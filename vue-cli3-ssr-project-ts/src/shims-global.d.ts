import Vue from 'vue'
// import VueRouter from 'vue-router'
// import { Store } from 'vuex'
// import {
//   DefaultData,
//   DefaultMethods,
//   DefaultComputed,
//   PropsDefinition,
//   ComponentOptions
// } from 'vue/types/options'

declare module '*.ts' {
  export default Vue
}

// 声明全局方法
declare module 'vue/types/vue' {
  interface Vue {
    $Message: any
    $Modal: any
    //     $router: Router
    //     $store: Store<any>
  }
  //   interface VueConstructor<V extends Vue> {
  //     $router: VueRouter
  //     $store: Store<any>
  //   }
  //   interface Component<V extends Vue> {
  //     $router: Router
  //     $store: Store<any>
  //   }
}
// type TypeOrArray = ComponentOptions<
//   Vue,
//   DefaultData<Vue>,
//   DefaultMethods<Vue>,
//   DefaultComputed,
//   PropsDefinition<Record<string, any>>,
//   Record<string, any>
// >

declare global {
  var logger: any
  interface Window {
    logger: any
  }
}
