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
        {id: 1, name: "Avocado", category: ["POPULAR","SUSHI"],
          ingredients : ["Avocado", "Some fist", "Rice"], price : 10},
        {id: 2, name: "Avocado?", category: ["POPULAR"],
          ingredients : ["Avocado", "Avocado"], price : 11},
        {id: 3, name: "Hmm", category: ["POPULAR"],
          ingredients : ["Hmm", "Rice"], price : 8},
        {id: 4, name: "Nameless", category: ["POPULAR","SUSHI"],
          ingredients : ["Avocado", "Rice"], price : 8},
        {id: 5, name: "name2", category: ["POPULAR"],
          ingredients : ["Avocado", "Red blood"], price : 8},
        {id: 6, name: "name3", category: ["POPULAR"],
          ingredients : ["Avocado", "Rice"], price : 5},
        {id: 7, name: "name4", category: ["POPULAR","SUSHI"],
          ingredients : ["Avocado", "Rice"], price : 15},
        {id: 8, name: "name5", category: ["POPULAR"],
          ingredients : ["Avocado","Salmon", "Rice"], price : 4},
        {id: 9, name: "name6", category: ["POPULAR"],
          ingredients : ["Avocado", "Rice"], price : 5},
        {id: 10, name: "name7", category: ["POPULAR","SUSHI"],
          ingredients : ["Avocado", "Rice"], price : 11},
        {id: 11, name: "name8", category: ["POPULAR"],
          ingredients : ["Avocado", "Rice"], price : 11},
        {id: 12, name: "name9", category: ["POPULAR"],
          ingredients : ["Avocado", "Rice"], price : 8}
    ],
    shoppingList : [{name : "Sushi", amount : 1, price : 10}, {name : "Sushi", amount : 1, price : 10} ]
  },
  getters : {
    currentCategory : state => {
      return state.filteredCategory;
    },

    availableProducts : (state, getters) => {
      return state.products.filter(product =>
          product.category.indexOf(getters.currentCategory) > -1);
    },
    shoppingList : state => {
      return state.shoppingList;
    },
  },
  computed : {
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
    },
    PUT_ITEM(state, data) {
        let res =  state.shoppingList.filter(product => {
            return product.name === data.name;
        })
        if (res.length > 0) {
            res[0].amount += data.amount;
        } else {
            state.shoppingList.push(data);

        }
        console.log(state.shoppingList)
    },
    DELETE_ITEM(state, item) {
        const index = state.shoppingList.indexOf(item);
        if (index > -1) {
            state.shoppingList.splice(index, 1);
        }
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
