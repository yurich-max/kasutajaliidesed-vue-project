<template>
    <div >
        <b-container fluid="" class="justify-content-center">

            <!--            All menu options are displayed here-->
            <b-row class="justify-content-center">
                <h1>MENU</h1>
            </b-row>
            <b-row class="justify-content-center">
                <b-col v-for="(item, index) in $store.state.cat1" :key="index"
                class="col-12 col-sm-6 col-md-3 col-lg-2 ">
                    <div v-on:click="console.log('sad')">
                    <MenuButton>{{ item }}</MenuButton>
                    </div>
                </b-col>
            </b-row>

            <b-row class="justify-content-center">
                <b-col v-for="(item, index) in $store.state.cat2" :key="index"
                       class="col-12 col-sm-6 col-md-3 col-lg-2">
                    <div v-on:click="console.log('sad')">
                        <MenuButton>{{ item }}</MenuButton>
                    </div>

                </b-col>
            </b-row>

        </b-container>


    <!--            <ShoppingList></ShoppingList>-->
    <ShoppingList v-if="$store.state.showShoppingList"></ShoppingList>
    <!--            All products for chosen category are displayed here-->
        <b-container fluid="" class="justify-content-center">
            <b-container>
                <b-row>
<!--                    <Product v-for="(row, index) in things.filteredResult()" :key="index" v-bind:data="row"></Product>-->
                </b-row>

            </b-container>
        </b-container>
    </div>



<!--            <b-col><h1 @click="emitGlobalClickEvent()">{{info}}</h1></b-col>-->


</template>

<script>

import MenuButton from "./MenuButton";
import ShoppingList from "./ShoppingList";
import {mapState} from "vuex";
// import ShoppingList from "./ShoppingList";


export default {
    name: 'Menu',
    components:  {ShoppingList, MenuButton},
    props: {},
    data : function() {
        return {
            data : Object,
            products : [],
            showList : false,
            'info' : '',
            'menuName' : 'menu',
        };
    },
    created() {
        this.$store.dispatch('fetchEvents')
    },
    computed: mapState(
        ["things"]
    )
    ,methods : {
    }

}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
