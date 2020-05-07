<template>
    <div>
        <b-container style="height: 15vh">
            <h1>sad</h1>
        </b-container>
        <b-container class="bg">
            <h1>    <h3>Total: {{itemsSum}} €</h3></h1>
            <b-container>

                <b-container class="bg-1">
                    <b-row>
                        <b-col>
                            <h5>PAY NOW:</h5>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="col-6 image">
                            <b-img src="https://i.postimg.cc/1XzHYW5V/swed.png" @click="direct" alt="SWED"/>
                        </b-col>
                        <b-col class="col-6 image">
                            <router-link tag="li" to="/review">
                                <b-img src="https://i.postimg.cc/KvwNJDX4/paypal.jpg" @click="direct" alt="PAYPAL"/>
                            </router-link>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="col-6 image">
                            <router-link tag="li" to="/review">
                                <b-img src="https://i.postimg.cc/tgtNR0sV/seb.png" @click="direct" alt="SEB"/>
                            </router-link>
                        </b-col>
                        <b-col class="col-6 image">
                            <router-link tag="li" to="/review">
                                <b-img src="https://i.postimg.cc/LXxkfzB9/etherium.jpg" @click="direct" alt="ETH"/>
                            </router-link>
                        </b-col>
                    </b-row>
                </b-container>
                <b-container class="bg-2 mt-3">
                    <b-row>
                        <b-col class="mt-3"><h5>PAY LATER</h5></b-col>
                    </b-row>
                    <b-row>
                        <div class="label d-flex justify-content-center mt-5">
                            <b-form-radio-group>
                                <b-form-radio class="white" v-model="choice" name="some-radios" value="A">DELIVERY</b-form-radio>
                                <b-form-radio class="white" v-model="choice" name="some-radios" value="B">I'L COME</b-form-radio>
                            </b-form-radio-group>
                        </div>
                    </b-row>
                    <b-row>
                        <b-col class="py-2 m">
                            <div v-if="$v.choice.$dirty">
                                <h5 class="error">PLZ CHOOSE</h5>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>

                <button type="button" @click.prevent="submitForm" class="btn-lg btn-primary btn-block bp-5 mb-n2 p2-2">
                    Proceed
                </button>
            </b-container>
        </b-container>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'

    export default {
        name: "Checkout",
        components: {},
        data() {
            return {
                choice : ""
            }
        }
        ,computed : {
            chosenProducts() {
                return this.$store.getters.shoppingList;
            },
            isCheckout() {
                return this.$store.getters.isCheckout;
            },

            itemsSum() {
                var list = this.$store.state.shoppingList;
                var sum = 0
                list.forEach(function (product) {
                    sum += product.amount * product.price
                })
                return sum;

            }
        },
        validations: {
            choice : {
                required
            }
        },
        methods : {
            submitForm() {
                this.$v.$touch()
                if (!this.$v.choice.$invalid) {
                    alert("Your order is being processed. Thank you for your purchase. You will receive a receipt on your mail.")
                    this.$router.push({ path: '/' });
                }
            },
            direct() {
                alert("Your order is being processed. Thank you for your purchase. You will receive a receipt on your mail.")
                this.$router.push({ path: '/' });
            }
        }
    }
</script>

<style scoped>
    .bg {
        width: 300px;
        height: 540px;
        background-color: #111111;
        border-radius: 20px;
    }

    .bg-1 {
        background-color: #000000;
        border-radius: 20px;
    }
    .bg-2 {
        background-color: #2a2a2a;
        border-radius: 20px;
        width: 240px;
        height: 180px;
    }
    img {
        width: 100px;
        height: 100px;
        margin: 0 2px 0 2px;
        padding: 2px 0 2px 0;
        border-radius: 10px;
    }
    .image {
        padding: 5px;
    }
    img:hover {
        cursor: pointer;
    }

    .btn-block {
        background-image: linear-gradient(0deg, #35000e, #e50000, #e50000, #e50000);
        background-color: #e50000;
        text-shadow: 0 2px rgba(255, 111, 245, 0.85);
        color: white;
        padding: 12px 1px;
        font-size: 18px;
        border-radius: 10px;
        border: none #0b0b0b;

    }

    .white {
        color: white;
    }

    li {
        list-style-type: none;
    }

</style>
