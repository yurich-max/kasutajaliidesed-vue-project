<template>
    <b-row>
        <div class="col-2 ml-0 mt-1">
            <div class="pull-left">
                <img class="rounded-circle" width="60" height="60" src="https://placekitten.com/100/100/"  alt="IMG">
            </div>
        </div>
        <div class="col-3 mt-2 ml-2 px-4">
            <p>CAT SOUP</p>
        </div>
        <div class="col-3 ">
            <div class="cart-options">
                <div class="btn-group mt-1" role="group" aria-label="Basic example" >
                    <button type="button" class="btn- button5 "><i class="fa fa-minus fa-lg" aria-hidden="true"></i></button>
                    <input type="text" class="input-text rounded-circle text-center mx-1" value="1" size="1" pattern="[0-9]*" readonly="">
                    <button type="button" class="btn- button5 mr-4"><i class="fa fa-plus fa-lg" aria-hidden="true"></i></button>
                    <i class="fa fa-times fa-lg" aria-hidden="true" onclick="window.location.href='index.html'"></i>

                </div>
                <br/> <h4 class="mt-2 mb-0 ml-0">3&nbsp;×&nbsp;10€</h4>
            </div>
        </div>
    </b-row>
</template>

<script>
    export default {
        name: "CartItem"
    }
</script>

<style scoped>

</style>
