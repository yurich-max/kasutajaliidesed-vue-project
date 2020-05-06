<template>
    <div >
        <b-container fluid="" class="justify-content-center">

            <!--Start shopping list-->
            <ShoppingList v-if="$store.state.showShoppingList"></ShoppingList>
            <!--End shopping list-->


            <!--Start menu category-->
            <b-row class="justify-content-center">
                <h1>MENU</h1>
            </b-row>
            <b-row class="justify-content-center">
                <b-col v-for="(item, index) in $store.state.cat1" :key="index"
                class="col-12 col-sm-6 col-md-3 col-lg-2 ">
                    <div v-on:click="changeCategory(item)">
                        <MenuButton>{{ item }}</MenuButton>
                    </div>
                </b-col>
            </b-row>

            <b-row class="justify-content-center">
                <b-col v-for="(item, index) in $store.state.cat2" :key="index"
                   class="col-12 col-sm-6 col-md-3 col-lg-2">
                    <div v-on:click="changeCategory(item)">
                        <MenuButton>{{ item }}</MenuButton>
                    </div>
                </b-col>
            </b-row>
            <!--End menu category-->

            <b-container>
                <b-row>
                    <!--Start product-->
                    <Product v-for="(row, index) in availableProducts" :key="index" v-bind:data="row"></Product>
                    <!--End product-->
                </b-row>
            </b-container>
        </b-container>
    </div>

<!--            <b-col><h1 @click="emitGlobalClickEvent()">{{info}}</h1></b-col>-->

</template>

<script>

import MenuButton from "./MenuButton";
import ShoppingList from "./ShoppingList";
import Product from "./Product";
// import ShoppingList from "./ShoppingList";


export default {
    name: 'Menu',
    components:  {ShoppingList, Product, MenuButton},
    props: {},
    data : function() {
        return {
            data : Object,
            activeCategory : "POPULAR",
            activeProducts : [],
            showList : false,
            'info' : '',
            'menuName' : 'menu',
        };
    },
    created() {
        this.$store.dispatch('fetchEvents')
    },
    computed: {
        availableProducts () {
            return this.$store.getters.availableProducts;
        }
    },
    methods : {
        getActiveProducts() {
            return this.store.state.products;

        },
        changeCategory(name) {
            this.$store.commit('SET_CATEGORY', name)
        },
    }

}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
