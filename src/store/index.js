import Vue from 'vue'
import Vuex from 'vuex'
import EventService from "../services/EventService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showShoppingList : false,
    checkout : true,
    filteredCategory : "POPULAR",
    // things : Object
    cat1 : ["POPULAR","COMBOS", "SUSHI", "MAKI"],
    cat2 : ["BAKED", "SNACKS" ,"SOUPS", "SAUCES", "DRINKS"],
    products: [
        {id: 1, name: "AVOCADO!!!", category: ["POPULAR","SUSHI"],
          ingredients : ["AVOCADO", "SOME FISH", ""], price : 10},
        {id: 2, name: "AVOCADO???", category: ["POPULAR", "BAKED"],
          ingredients : ["AVOCADO", "AVOCADO"], price : 11},
        {id: 3, name: "HMM", category: ["POPULAR"],
          ingredients : ["HMM", "RICE"], price : 8},
        {id: 4, name: "NAMELESS", category: ["POPULAR","SUSHI"],
          ingredients : ["AVOCADO", "RICE"], price : 8},
        {id: 5, name: "name2", category: ["POPULAR"],
          ingredients : ["AVOCADO", "Red blood"], price : 8},
        {id: 6, name: "SASHIMI", category: ["POPULAR", "COMBOS"],
          ingredients : ["AVOCADO", "RICE"], price : 5},
        {id: 7, name: "SUSHI", category: ["POPULAR","SUSHI"],
          ingredients : ["AVOCADO", "RICE"], price : 15},
        {id: 8, name: "SNACK ME UP", category: ["POPULAR", "SNACK"],
          ingredients : ["SNACK","Salmon", "Rice"], price : 4},
        {id: 9, name: "NAME$", category: ["POPULAR"],
          ingredients : ["AVOCADO", "RICE"], price : 5},
        {id: 10, name: "2314344", category: ["POPULAR","SUSHI"],
          ingredients : ["AVOCADO", "RICE"], price : 11},
        {id: 11, name: "NAME6", category: ["POPULAR", "DRINKS"],
          ingredients : ["AVOCADO", "RICE"], price : 11},
        {id: 12, name: "SOUP SAUCE", category: ["SAUCES", "SOUPS"],
          ingredients : ["AVOCADO", "RICE"], price : 8}
    ],
    shoppingList : []
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
    isCheckout : state => {
      return state.checkout;
    },
  },
  computed : {
  },
  mutations: {
    TOGGLE_SHOPPING_LIST(state) {
      state.showShoppingList = !state.showShoppingList;
    },
    CHECKOUT_TRUE(state) {
      state.checkout = true;
    },
    CHECKOUT_FALSE(state) {
      state.checkout = false;
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
