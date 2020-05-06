import Vue from 'vue'
import Vuex from 'vuex'
import EventService from "../services/EventService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showShoppingList : false,
    filteredCategory : "POPULAR",
    // things : Object
    cat1 : ["POPULAR","COMBOS", "SUSHI", "MAKI"],
    cat2 : ["BAKED", "SNACKS" ,"SOUPS", "SAUCES", "DRINKS"],
    products: [
        {
        "id": "1",
        "name": "name1",
        category: ["POPULAR","SUSHI"]
      },
      {
        "id": "2",
        "name": "name2",
        category: ["POPULAR"]
      },
      {"id": "3",
        "name": "name3",
        category: ["SUSHI"]
      }
    ]
  },
  getters : {
    availableProducts : state => {
      return state.products;
    }
  },
  mutations: {
    TOGGLE_SHOPPING_LIST(state) {
      state.showShoppingList = !state.showShoppingList;
    },
    SET_DATA(state, data) {
      state.things = data;
    },
    SET_CATEGORY(state, data) {
      state.filteredCategory = data;
      console.log(this.state.filteredCategory);
    }
    }
  ,
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
