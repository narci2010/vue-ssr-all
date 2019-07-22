# startup

'''
npm run dev
客户端，支持 history 路由刷新配置

'''
执行过程：当用户点击 router-link 标签时，会去寻找它的 to 属性， 它的 to 属性和 js
中配置的路径{ path: '/home', component: Home} path 一一对应，从而找到了匹配的组件， 最后把组件渲染到
<router-view> 标签所在的地方。所有的这些实现才是基于 hash 实现的。
