<template>
    <b-row class="cartItem ml-0 ">
        <b-col class="col-2">
            <div class="pull-left ml-2">
                <img class="rounded-circle" width="65" height="65" src="https://placekitten.com/100/100/"  alt="IMG">
            </div>
        </b-col>
        <b-col class="col-3">
            <h6 class="pl-3 ml-3 pt-4 mt-4">{{data.name}}</h6>
        </b-col>
        <b-col class="col-2 ">
            <b-container>
                <div class="btn-group mt-1" role="group">

                    <button type="button" class="btn- " @click="decrease">
                        <i class="fa fa-minus fa-lg" ></i>
                    </button>
                    <label>
                        <input type="text" class="input-text rounded-circle text-center mx-1 disabled" v-bind:value="data.amount" size="1" pattern="[0-9]*" readonly="">
                    </label>
                    <button type="button" class="btn- mr-4" @click="increase">
                        <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
                    </button>
                    <i class="fa fa-times fa-lg pt-2"  @click="remove"></i>


                </div>
                <h5 class="sum m-0">{{data.amount * data.price}}€</h5>
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

    .cartItem {
        margin: 3px 0 0 3px;
        background-color: rgba(0, 0, 0, 0.77);
    }
    .btn- {
        border-radius: 50%;
        width: 35px;
        height: 35px;
        background-color: black;
    }
    .input-text {
        width: 35px;
        height: 35px;
        background-color: #282828;
        color: white;
        border-color: rgba(191, 17, 17, 0.92);
        font-weight: bold;
    }
    .input-text:hover {
        cursor: default;
    }

    .fa-plus {
        color: white;
        background-color: black;
        border-color: rgba(191, 17, 17, 0.92);
    }
    .fa-minus {
        color: white;
        background-color: black;
        border-color: rgba(191, 17, 17, 0.92);
    }
    .fa-times {
        color: #e50000;
    }
    .fa-times:hover {
        cursor: pointer;
    }

    .sum {
        padding-left: 120px;

    }
</style>
