<template>
    <div>
    <b-container class="h-25">

    </b-container>
    <b-container class="items">
        <div>
            <CartItem v-for="(row, index) in chosenProducts" :key="index" v-bind:data="row"></CartItem>
        </div>

    </b-container>
    </div>

</template>

<script>
    // @ is an alias to /src


    // Import the EventBus.
    import { EventBus } from '../event-bus.js';
    import CartItem from "../components/CartItem";


    // Listen for the i-got-clicked event and its payload.
    EventBus.$on('i-got-clicked', menuName => {
        console.log(`Oh, that's nice. It's gotten ${menuName} clicks! :)`)
    });
    export default {
        name: 'Home',
        components: {
            CartItem
        },
        computed : {
            chosenProducts() {
                return this.$store.getters.shoppingList;
            }
        }

    }
</script>

<style scoped>
    .items {
        margin-top: 200px;
    }

</style>
