import itemsApi from '../../api/item'

// initial state
const state = {
  items: []
}

// getters
const getters = {}

// actions
const actions = {
  getItems({ commit }: any, itemId: string) {
    return itemsApi.fetchItems(itemId).then((items: any) => {
      console.log('store.items:' + itemId)
      commit('setItemList', items)
    })
  }
}

// mutations
const mutations = {
  setItemList(state: any, items: any) {
    state.items = items
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
