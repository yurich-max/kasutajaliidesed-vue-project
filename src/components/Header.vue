<template>
    <b-container fluid="" class="header fixed-top">
        <b-row>
            <b-col class="p-0 pb-1" >
                <router-link to="/">
                    <img alt="Sushi logo" src="../assets/logo.png" class="mt-1">
                    <a href="#" class="cart btn btn-info btn-lg border-0" id="cart">
                        <span class="fa fa-shopping-cart fa-2x mx-0 my-0 " ></span>
                    </a>
                </router-link>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'Header',
        props: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        background-color: #101010;
        height: 50px;
        position: sticky;
    }
    .cart {
        z-index: 1;
        position: absolute;
        top: 3px;
        right: 3px;
        margin: 0;
        float: right;
        background: none;
        width: 50px;
        border-radius: 3px;
        padding: 0;
        color: white;
        background-color: #e50000;
    }


</style>
