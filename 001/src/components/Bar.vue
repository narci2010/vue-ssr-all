<template>
  <div class="bar">
    <h1>Bar Component</h1>
    <router-link to="/home">Home</router-link>
    <router-link :to="'/item/'+id">Item</router-link>
    <router-view></router-view>
  </div>
</template>
<script>

export default {

  data() {
    // 定义组件，template里能够访问的变量，需要data()函数返回对象
    return { id: 1 }
  }

}
</script>
<style>
.bar {
  background: bisque;
}
</style>
