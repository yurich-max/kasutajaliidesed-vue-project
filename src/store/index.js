import Vue from 'vue'
import Vuex from 'vuex'
import EventService from "../services/EventService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showShoppingList : false,
    filteredCategory : "POPULAR",
    // things : Object
    categories : [   {
      "row": [
        {
          "name": "POPULAR"
        },
        {
          "name": "COMBO"
        },
        {
          "name": "SUSHI"
        },
        {
          "name": "MAKI"
        }
      ]
    },
      {
        "row": [
          {
            "name": "BAKED"
          },
          {
            "name": "SNACKS"
          },
          {
            "name": "SOUPS"
          },
          {
            "name": "SAUCES"
          },
          {
            "name": "DRINKS"
          }
        ]
      }]
  },
  computed : {
    filteredResult() {
      console.log(this.things.products)
      if (this.state.things) {
      return this.state.things.products.filter(function (product) {
            return product.category.includes(this.filteredCategory)
          });
      }
    }
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
