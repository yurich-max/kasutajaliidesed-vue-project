<template>
    <b-col class="col-12 col-sm-6 col-md-4 mt-3 mb-2 p-2 ">
        <b-card class="p-0 rounded"
                img-src="https://i.postimg.cc/FzZ1tYM6/susgi-choice.png"
                img-top
                no-body>

                <b-card-title class=" mt-2">{{data.name}}, {{data.price}} €</b-card-title>
                <b-card-text class="p-0">
                        {{ data.ingredients.join(', ') }}

                </b-card-text>

                <b-form-group class="m-0">
                    <div class= "text-center">

                        <button type="button" class="btn- button5" @click="decrease">
                            <i class="fa fa-minus fa-lg" aria-hidden="true"></i>
                        </button>
                        <label>
                            <input type="text" class="input-text rounded-circle text-center" v-bind:value="currentAmount" size="1" pattern="[0-9]*" readonly="">
                        </label>
                        <button type="button" class="btn- button5" @click="increase">
                            <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
                        </button>

                        <div class="add-item">
                            <b-button type="button" class="btn-block btn-lg mt-2 mb-0 p" @click="add(currentAmount)">ADD</b-button>
                        </div>
                    </div>
                </b-form-group>


        </b-card>
    </b-col>
</template>

<script>
    export default {

        name: "Product",
        props: {
            data : Object
        },
        data : function () {
            return {
                currentAmount : 1
            }
        },
        methods : {
            increase() {
                this.currentAmount++;
            },
            decrease() {
                if (this.currentAmount > 1) {
                    this.currentAmount--;
                }
            },
            add(amount) {
                this.$store.commit('PUT_ITEM', {
                    name : this.data.name, price : this.data.price, amount : amount
                })
                this.currentAmount = 1

            }
        }
    }
</script>

<style scoped>
    .card-body {
        padding: 1em;
    }

    .input-text {
        width: 35px;
        height: 35px;
        background-color: #282828;
        color: white;
        border-color: #ca84ff;
        font-weight: bold;
    }
    .btn- {
        border-radius: 50%;
        width: 35px;
        height: 35px;
        background-color: black;
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
    .btn-block {
        background-image: linear-gradient(0deg, #35000e, #000000, #000000, #000000);
        background-color: #e50000;
        text-shadow: 0 2px rgba(255, 111, 245, 0.85);
        color: white;

    }
    h4 {
        color: black;
    }
    input-text:hover {
        cursor: default;
    }
</style>
