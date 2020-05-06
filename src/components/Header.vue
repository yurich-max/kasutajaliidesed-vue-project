<template>
    <b-container fluid="" class="header fixed-top">
        <b-row>
            <b-col class="p-0 pl-5" >
                <router-link to="/">
                    <img alt="Sushi logo" src="../assets/logo.png" class="mt-1 pb-5">
                </router-link>

                <div class="btn-lg border-0"  @click="toggleShoppingList">
                    <span class="fa fa-shopping-cart fa-2x mx-0 my-0 " ></span>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'Header',
        props: {},
        methods : {
            toggleShoppingList() {
                this.$store.commit('TOGGLE_SHOPPING_LIST')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        background-color: #101010;
        height: 43px;
  }
    .btn-lg {
        z-index: 1;
        top: 3px;
        right: 3px;
        margin: 0;
        float: right;
        width: 50px;
        border-radius: 3px;
        padding: 0;
        color: white;
        background: #e50000;
        cursor: pointer;
    }



</style>
