<template>
  <ul>
    <li v-for="item in items"
        :key="item.index">
      {{ item.title }} - {{ item.content }}
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  asyncData({ store, route }) {
    // アクションから Promise が返されます
    return store.dispatch('item/getItems', route.params.itemId);
  },

  computed: {
    ...mapState({
      items: state => state.item.items,
    })
  }
}
</script>