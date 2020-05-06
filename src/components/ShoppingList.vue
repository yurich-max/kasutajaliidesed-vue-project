<template>
    <div >
        <b-container fluid="" class="pane position-fixed rounded p-0">
            <b-container class="p-0 rounded">
                <b-container fluid="" class="rounded">
                    <b-row>
                            <b-col class="col-12 cart-header pt-2" ><h3>CART</h3></b-col>
                    </b-row>
                </b-container>
            <b-container class="p-0 rounded shopping-list">
            <b-row>
                <CartItem v-for="(row, index) in chosenProducts" :key="index" v-bind:data="row"></CartItem>
            </b-row>
            </b-container>

                <hr>
            <b-container class="p-0 rounded total">
            <b-row>
                <b-col class="col-12 mt-2"><h4>Total: {{itemsSum}} €</h4></b-col>
            </b-row>
            <hr>
            <b-row class="p-0">
                <b-col class="col-12 mb-2 text-center">
                    <button type="button" class="btn-lg btn-primary btn-block pt-n5">Proceed</button>
                </b-col>
            </b-row>
                </b-container>
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
        background-color: rgb(172, 52, 52);
        border-radius: 2px;
    }
    h3 {
        color: white;
    }

    .pane {
        z-index: 9999;
        top: 60px;
        width: 360px;
        right: 0;
        float: right;

        background-color: rgba(0, 0, 0, 0.85);
        overflow-x: hidden;


    }
    .total {
        background-color: rgba(0, 0, 0, 0.7);
    }

    .shopping-list, test {



        overflow-y: scroll;
        max-height: 400px;
        overflow-x: hidden;

    }
    .items {
        overflow-y: scroll;

    }
    /* width */
    ::-webkit-scrollbar {
        width: 20px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #181818;
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #363636;
    }
</style>
