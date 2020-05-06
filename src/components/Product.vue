<template>
    <b-col class="col-12 col-sm-6 col-md-4 mt-3 mb-2 p-2 ">
        <b-card class="p-0 rounded"
                img-src="https://i.postimg.cc/FzZ1tYM6/susgi-choice.png"
                img-top
                no-body>

                <b-card-title class=" m-0">{{data.name}}, {{data.price}} €</b-card-title>
                <b-card-text class="p-0">
                    <b-row>
                    <b-col v-for="(el, index) in data.ingredients" :key="index">
                        {{el}}
                    </b-col>
                    </b-row>
                    .
                </b-card-text>

                <b-form-group class="m-0">
                    <div class= "text-center">

                        <button type="button" class="btn- button5" @click="decrease">
                            <font-awesome-icon icon="user-secret" />
                        </button>
                        <label>
                            <input type="text" class="input-text rounded-circle text-center" v-bind:value="currentAmount" size="1" pattern="[0-9]*" readonly="">
                        </label>
                        <button type="button" class="btn- button5" @click="increase">
                            <font-awesome-icon icon="user-secret" />
                        </button>

                        <div class="add-item">
                            <b-button type="button" class="btn-block btn-lg mt-2 mb-0 p" @click="add">Add</b-button>
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
            add() {

            }
        }
    }
</script>

<style scoped>
    .card-body {
        padding: 1em;
    }
</style>
