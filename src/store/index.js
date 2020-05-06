import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showShoppingList : false
  },
  mutations: {
    TOGGLE_SHOPPING_LIST(state) {
      state.showShoppingList = !state.showShoppingList;
    }
  },
  actions: {
    toggleShoppingList() {
      this.$store.commit('TOGGLE_SHOPPING_LIST')
    },

  },
  modules: {
  }
})
