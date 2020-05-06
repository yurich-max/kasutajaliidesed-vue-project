<template>
    <div >
        <b-container fluid="" class="pane position-fixed p-0">

            <b-container class="p-0 rounded">
                <b-container fluid="" class="rounded">
                    <b-row>
                            <b-col class="col-12 cart-header pt-2" ><h6>CART</h6></b-col>
                    </b-row>
                </b-container>
                <b-container class="p-0 rounded shopping-list">
                    <b-row>
                        <div v-if="!(itemsSum > 0)">
                            <h3 class="px-5">...Your cart is empty...</h3>
                        </div>
                        <div v-else>
                            <CartItem v-for="(row, index) in chosenProducts" :key="index" v-bind:data="row"></CartItem>
                        </div>
                    </b-row>
                </b-container>

                <div v-if="itemsSum > 0">
                    <b-container class="p-0 rounded total mt-1">
                        <b-row>
                            <b-col class="col-12 mt-3 pb-2">

                                    <h3>Total: {{itemsSum}} €</h3>

                            </b-col>
                        </b-row>
                        <b-row class="p-0">
                            <b-col class="col-12 mb-2 text-center">

                                    <button type="button" class="btn-lg btn-primary btn-block bp-5 mb-n2 p2-2">
                                        <router-link tag="li" to="/customerInfo">Proceed</router-link>
                                    </button>

                            </b-col>
                        </b-row>
                    </b-container>
                </div>
            </b-container>
        </b-container>
    </div>
</template>

<script>
    import CartItem from "./CartItem";
    export default {
        name: "ShoppingList",
        components: {CartItem},
        computed : {
            chosenProducts() {
                return this.$store.getters.shoppingList;
            },
            isCheckout() {
                return this.$store.getters.isCheckout;
            },

            itemsSum() {
                var list = this.$store.state.shoppingList;
                var sum = 0
                list.forEach(function (product) {
                    sum += product.amount * product.price
                })
                return sum;

            }
        }
    }
</script>

<style scoped>
    .cart-header {
        background-color: rgb(224, 7, 7);
        border-radius: 2px;
    }
    h3,h6 {
        color: white;
    }
    .btn-block {
        background-image: linear-gradient(0deg, #35000e, #e50000, #e50000, #e50000);
        background-color: #e50000;
        text-shadow: 0 2px rgba(255, 111, 245, 0.85);
        color: white;
        padding: 12px 1px;
        font-size: 18px;
        border-radius: 10px;
        border: none #0b0b0b;
    }

    a {  text-decoration: none;}

    .pane {
        z-index: 9999;
        top: 60px;
        width: 360px;
        float: right;
        right: 0;

        border-radius: 20px;

        background-color: rgba(0, 0, 0, 0.85);
        overflow-x: hidden;


    }
    .total {
        background-image: linear-gradient(30deg, #000000, rgba(0, 0, 0, 0.5));
    }

    .shopping-list {

        overflow-y: scroll;
        max-height: 410px;
        min-height: 100px;
        overflow-x: hidden;

    }

    /* width */
    ::-webkit-scrollbar {
        width: 20px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #000000;
        border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #635d5d;
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #bf0000;
    }
    li {
        list-style-type: none;
    }
</style>
