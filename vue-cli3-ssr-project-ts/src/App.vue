<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/statham">Statham</router-link> |
      <router-link :to="'/item/'+id">Item</router-link> |
      <router-link :to="'/item/'+id2">Item2</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {

  data() {
    // 定义组件，template里能够访问的变量，需要data()函数返回对象
    return { id: 1, id2: 2 }
  }

}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 20px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
