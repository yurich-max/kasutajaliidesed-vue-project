<template>
    <div>
        <b-container class="bg">

        </b-container>
        <ShoppingOverview></ShoppingOverview>
    </div>

</template>

<script>
    import ShoppingOverview from "../components/ShoppingOverview";
    export default {
        name: "OrderRevue",
        components: {ShoppingOverview}
    }
</script>

<style scoped>
    .bg {
        width: 80vw;
        height: 20vh;
        background-color: #42b983;
    }
</style>
