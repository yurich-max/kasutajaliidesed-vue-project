<template>
    <a href="#" class="cart btn btn-info btn-lg d-lg-none" id="cart">
        <span class="fa fa-shopping-cart fa-2x mx-0 my-0" ></span>
    </a>
</template>

<script>
    export default {
        name: "ShoppingCart"
    }
</script>


<style scoped>
    .card {
        z-index: 1;
        position: absolute;
        top: 70px;
        right: 0;
        margin: 0;
        float: right;
        background: black;
        width: 360px;
        border-radius: 3px;
        padding: 0;
    }

</style>
