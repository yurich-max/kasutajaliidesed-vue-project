import Vue from 'vue'
import Vuex from 'vuex'
import EventService from "../services/EventService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showShoppingList : false,
    filteredCategory : "POPULAR",
    // things : Object
    cat1 : ["POPULAR","COMBO", "SUSHI", "MAKI"],
    cat2 : ["BAKED", "SNACKS" ,"SOUPS", "SAUCES", "DRINKS"]
  },
  computed : {

  },
  mutations: {
    TOGGLE_SHOPPING_LIST(state) {
      state.showShoppingList = !state.showShoppingList;
    },
    SET_DATA(state, data) {
      state.things = data;
    }
  },
  actions: {
    fetchEvents({ commit }) {
      EventService.getData()
          .then(response => {
            commit('SET_DATA', response.data)
          })
          .catch(error => {
            console.log('There was an error:', error.response)
          })
    }

  },
  modules: {
  }
})
