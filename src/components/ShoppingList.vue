<template>
    <div >
        <b-container class="shopping-list position-fixed">
            <b-container fluid="">
                <b-row>
                    <div class="col-12 no-gutters">
                        <div class="col-12" style="background-color:rgb(0,0,0); border-radius: 20px;"><p>CART</p></div>
                    </div>
                </b-row>

                    <div >
                        <CartItem v-for="(row, index) in chosenProducts" :key="index" v-bind:data="row"></CartItem>
                    </div>




            </b-container>


            <hr>
            <div class="row" >
                <div class="col-12 mt-2"><h4>Total: {{itemsSum}} €</h4></div>
            </div>
            <hr>
            <div class="row " >
                <div class="col-12 mb-2 text-center">
                    <button type="button" class="btn-lg btn-primary btn-block disabled" disabled>Proceed</button>
                </div>
            </div>
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


    .shopping-list, test {
        z-index: 9999;
        top: 60px;
        width: 360px;
        right: 0;
        float: right;
        max-height: 80vh;
        background-color: #8d7c81;
        overflow-y: scroll;
    }
    .items {
        overflow-y: scroll;
    }
</style>
