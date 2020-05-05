<template>
    <b-container fluid="" class="header fixed-top">
        <b-row>
            <b-col class="p-0 pb-1" >
                <router-link to="/">
                    <img alt="Vue logo" src="../assets/logo.png">
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
        height: 40px;
        position: sticky;
    }
</style>
