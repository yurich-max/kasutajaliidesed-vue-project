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
        background-image: linear-gradient(0deg, #35000e, #e50000, #e50000, #e50000);
        background-color: #e50000;
        text-shadow: 0 2px rgba(255, 111, 245, 0.85);
        color: white;
        padding: 12px 1px;
        font-size: 18px;
        border-radius: 20px;
        border: none #0b0b0b;

    }
</style>
