<template>
  <div>
    <Foo></Foo>
    <Bar></Bar>
    <Baz></Baz>

    <router-link :to="{ path: '/foo' }">Foo</router-link>

  </div>
</template>

<script>
import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';
import Baz from './components/Baz.vue';

export default {
  name: "App",
  components: {
    Foo, Bar, Baz
  }
}
</script>

