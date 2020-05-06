<template>
    <div >
        <b-container fluid="" class="justify-content-center">
            <b-container>

                <!--            All menu options are displayed here-->
                <b-row class="justify-content-center">
                    <h1>MENU</h1>
                </b-row>
                <div v-for="(row, index) in data.categories" :key="index">
                    <b-row class="justify-content-center">
                        <div v-for="(item, index) in row.row" :key="index" class="col-12 col-sm-6 col-md-3 col-lg-2">
                            <b-col>
                                <div v-on:click="filterMenu('does it work?')">
                                <MenuButton>{{ item.name }}</MenuButton>
                                </div>
                            </b-col>
                        </div>
                    </b-row>
                </div>
            </b-container>
        </b-container>


    <!--            <ShoppingList></ShoppingList>-->

    <!--            All products for chosen category are displayed here-->
        <b-container fluid="" class="justify-content-center">
            <b-container>
                <b-row>
                    <Product v-for="(row, index) in data.products" :key="index" v-bind:data="row"></Product>
                </b-row>

            </b-container>
        </b-container>
    </div>



<!--            <b-col><h1 @click="emitGlobalClickEvent()">{{info}}</h1></b-col>-->


</template>

<script>

import EventService from '../services/EventService.js'
import MenuButton from "./MenuButton";
import Product from "./Product";
// import ShoppingList from "./ShoppingList";


export default {
    name: 'Menu',
    components:  {Product, MenuButton},
    props: {},
    data : function() {
        return {
            data : Object,
            products : [],
            'info' : '',
            'menuName' : 'menu',
        };
    },
    created() {
        EventService.getData()
            .then(response => this.data = response.data)
            .catch(error => {
                console.log("Error:", error.response)
            })
    },
    methods : {
        filterMenu : function () {
            console.log(this.data);
            this.products = this.data.products.filter(function (el) {
                return el.id === "1"
            });
            console.log(this.products)
        },


    }

}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
