<template>
    <b-container class="shopping-list position-fixed">
        <b-container fluid="">
            <b-row>
                <div class="col-12 no-gutters">
                    <div class="col-12" style="background-color:rgb(0,0,0); border-radius: 20px;"><p>CART</p></div>
                </div>
            </b-row>

            <CartItem></CartItem>
            <div >
                <CartItem v-for="(row, index) in chosenProducts" :key="index" v-bind:data="row"></CartItem>
            </div>


            <b-container fluid="">
                <hr>
                <div class="row" >
                    <div class="col-12 mt-2"><h4>Total: 0 €</h4></div>
                </div>
                <hr>
                <div class="row " >
                    <div class="col-12 mb-2 text-center">
                        <button type="button" class="btn-lg btn-primary btn-block disabled" disabled>Proceed</button>
                    </div>
                </div>
            </b-container>
        </b-container>

    </b-container>
</template>

<script>
    import CartItem from "./CartItem";
    export default {
        name: "ShoppingList",
        components: {CartItem},
        computed : {
            chosenProducts() {
                return this.$store.getters.shoppingList;
            }
        }
    }
</script>

<style scoped>
    .shopping-list {
        z-index: 1;
        top: 60px;
        right: 0;
        float: right;
        width: 360px;
        background-color: #8d7c81;
    }
</style>
