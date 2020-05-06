<template>
    <b-row class="cartItem mt-2 ml-0">
        <b-col class="col-2">
            <div class="pull-left ml-2">
                <img class="rounded-circle" width="65" height="65" src="https://placekitten.com/100/100/"  alt="IMG">
            </div>
        </b-col>
        <b-col class="col-3">
            <h5 class="pl-3 py-3">{{data.name}}</h5>
        </b-col>
        <b-col class="col-2 ">
            <b-container>
                <div class="btn-group mt-1" role="group">

                    <button type="button" class="btn- " @click="decrease">
                        <i class="fa fa-minus fa-lg" aria-hidden="true"></i>
                    </button>
                    <label>
                        <input type="text" class="input-text rounded-circle text-center mx-1 disabled" v-bind:value="data.amount" size="1" pattern="[0-9]*" readonly="fa">
                    </label>
                    <button type="button" class="btn- mr-4" @click="increase">
                        <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
                    </button>
                    <i class="fa fa-times fa-lg pt-2" aria-hidden="true" @click="remove"></i>



                </div>
                <br/> <h4 class="mt-2 mb-0 ml-0">{{data.amount}}X{{data.price}}€</h4>
            </b-container>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "CartItem",
        props: {
            data : Object
        },
        methods : {
            decrease() {
                if (this.data.amount > 1) {
                    this.data.amount--;
                } else {
                    this.remove()
                }
            },
            increase() {
                this.data.amount++;
            },
            remove() {
                this.$store.commit('DELETE_ITEM', this.data)
            }
        }
    }
</script>

<style scoped>
    .btn- {
        border-radius: 50%;
        width: 35px;
        height: 35px;
    }
    .input-text {
        width: 35px;
        height: 35px;
        background-color: #282828;
        color: white;
        border-color: rgba(82, 1, 1, 0.91);
    }
</style>
