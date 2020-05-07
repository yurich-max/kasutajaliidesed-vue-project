<template>
    <b-button class="btn-block px-1 pt-1 pb-2">
       <b><slot></slot></b>
    </b-button>
</template>

<script>
    export default {
        name: "MenuButton"
    }
</script>

<style scoped>
    .btn-block {

        font-size: 18px;
        border-radius: 20px;


    }
</style>
