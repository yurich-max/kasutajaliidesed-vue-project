<template>
    <div>
        <b-container style="height: 15vh">

        </b-container>
            <b-container class="bg-1">
                <ShoppingOverview></ShoppingOverview>
            </b-container>
        <b-container class="bg-2 pt-4">
            <b-col class="label">
                <h5 class="pull-left">DELIVERY?</h5>
            </b-col>
            <b-container class="pt-2 bg-3">
            <div class="label d-flex justify-content-center ">
                <b-form-radio-group>
                    <b-form-radio v-model="deliveryOption" name="some-radios" value="A">DELIVERY</b-form-radio>
                    <b-form-radio v-model="deliveryOption" name="some-radios" value="B">I'L COME</b-form-radio>
                </b-form-radio-group>

            </div>
            </b-container>
            <b-col>
                <div v-if="$v.deliveryOption.$error">
                    <p class="error">Please select option</p>
                </div>
            </b-col>

            <b-col class="label">
                    <h5 class="pull-left">EMAIL</h5>
            </b-col>
            <b-col>
                <label>
                    <input
                        type="email"
                        placeholder="Email"
                        v-model="email"
                        class="input"
                        @blur="$v.email.$touch()"
                    />
                </label>
            </b-col>
            <b-col class="message">
                <div v-if="$v.email.$error">
                    <p v-if="!$v.email.required" class="error">Email is required</p>
                    <p v-else-if="!$v.email.email" class="error">Please enter valid email</p>
                </div>
                <div v-else-if="$v.email.$dirty">
                    <p class="success">Email is OK :)</p>
                </div>
            </b-col>

            <b-col class="label">
                    <h5 class="pull-left">FIRST NAME</h5>
            </b-col>
            <b-col>
                <label>
                    <input
                        type="text"
                        placeholder="First name"
                        v-model="firstName"
                        class="input"
                        @blur="$v.firstName.$touch()"
                    />
                </label>
            </b-col>
            <b-col class="message">
                <div v-if="$v.firstName.$error">
                    <p v-if="!$v.firstName.required" class="error">Name is required</p>
                    <p v-else-if="!$v.firstName.noNumbers" class="error">Name cannot contain numbers</p>
                    <p v-else-if="!$v.firstName.noSpecialChars" class="error">Name cannot contain special characters</p>
                    <p v-else-if="$v.firstName.$invalid" class="error">Please enter valid name</p>
                </div>
                <div v-else-if="$v.firstName.$dirty">
                    <p class="success">first name is OK</p>
                </div>
            </b-col>

            <b-col class="label">
                <h5 class="pull-left">LAST NAME</h5>
            </b-col>
            <b-col>
                <label>
                    <input
                        type="text"
                        placeholder="Last name"
                        v-model="lastName"
                        class="input"
                        @blur="$v.lastName.$touch()"
                    />
                </label>
            </b-col>
            <b-col class="message">
                <div v-if="$v.lastName.$error">
                    <p v-if="!$v.lastName.required" class="error">Last name is required</p>
                    <p v-else-if="!$v.lastName.noNumbers" class="error">Last name cannot contain numbers</p>
                    <p v-else-if="!$v.lastName.noSpecialChars" class="error">Last name cannot contain special characters</p>
                    <p v-else-if="$v.lastName.$invalid" class="error">Please enter valid last name</p>
                </div>
                <div v-else-if="$v.lastName.$dirty">
                    <p class="success">Last name is OK</p>
                </div>
            </b-col>


            <b-col class="label">
                <h5 class="pull-left">ADDRESS</h5>
            </b-col>
            <b-col>
                <label>
                    <input
                        type="text"
                        placeholder="Address"
                        v-model="address"
                        class="input"
                        @blur="$v.address.$touch()"
                    />
                </label>
            </b-col>
            <b-col class="message">
                <p class="error pull-left">*TALLINN ONLY</p>
                <div v-if="$v.address.$error">
                    <p v-if="!$v.address.required" class="error">Address is required</p>
                    <p v-else-if="!$v.address.minLength" class="error">Address too short</p>
                    <p v-else-if="!$v.address.noSpecialChars" class="error">No special characters</p>
                    <p v-else-if="$v.address.$invalid" class="error">Please enter address</p>
                </div>
                <div v-else-if="$v.address.$dirty">
                    <p class="success">Address is OK</p>
                </div>
            </b-col>


            <b-col class="label">
                <h5 class="pull-left">APARTMENT NUMBER</h5>
            </b-col>
            <b-col>
                <label>
                    <input
                        type="text"
                        placeholder="Apt. number"
                        value=0
                        v-model="addressNumber"
                        class="input"
                        @blur="$v.addressNumber.$touch()"
                    />
                </label>
            </b-col>
            <b-col class="message">
                <div v-if="$v.addressNumber.$error">
                    <p v-if="!$v.addressNumber.required" class="error">Apt. number is required</p>
                    <p v-else-if="!$v.addressNumber.isAddress" class="error">No special chars.</p>
                    <p v-else-if="$v.addressNumber.$invalid" class="error">Please enter valid apt. number</p>
                </div>
                <div v-if="$v.addressNumber.$dirty">
                    <p class="success">Address is OK</p>
                </div>
            </b-col>



            <b-col class="label mt-4">

                <button type="button" @click.prevent="submitForm" class="btn-lg btn-primary btn-block bp-5 mb-n2 p2-2">
                    Proceed
                </button>
<!--            <p v-if="$v.$anyError" class="errorMessage">Please fill out required fields</p>-->
            </b-col>
        </b-container>
    </div>
</template>

<script>
    import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
    import ShoppingOverview from "../components/ShoppingOverview";

    export default {
        components: {ShoppingOverview},
        data() {
            return {
                deliveryOption : '',
                email: null,
                firstName : "",
                lastName : "",
                address : "",
                addressNumber : ""
            }
        },
        validations: {
            deliveryOption: {
                required
            },
            email: {
                required,
                email
            },
            firstName: {
                required,
                minLength : minLength(3),
                maxLength : maxLength(18),
                noNumbers(firstName) {
                    return (
                        !(/[0-9]/.test(firstName))
                    )
                },
                noSpecialChars(firstName) {
                    return(
                        !(/\W|_/.test(firstName))
                    )
                }

            },
            lastName: {
                required,
                minLength : minLength(3),
                maxLength : maxLength(18),
                noNumbers(lastName) {
                    return (
                        !(/[0-9]/.test(lastName))
                    )
                },
                noSpecialChars(lastName) {
                    return(
                        !(/\W|_/.test(lastName))
                    )
                }
            },
            address: {
                required,
                minLength : minLength(6),
                maxLength : maxLength(32),
                noSpecialChars(address) {
                    return(
                        !(/\W|_/.test(address))
                    )
                }
            },
            addressNumber: {
                required,
                isAddress(addressNumber) {
                    return (
                        (/[0-9]/.test(addressNumber)) &&
                        (!/[a-z]/.test(addressNumber))
                    )
                }
            },

        },
        methods : {
            submitForm() {
                this.$v.$touch()
                this.formTouched = !this.$v.$anyDirty;
                this.errors = this.$v.$anyError;
                if (this.errors === false && this.formTouched === false && !this.$v.$invalid) {
                    alert("Submitted")
                    this.$router.push({ path: '/checkout' });
                } else {
                    alert("not submitted")
                }
            },
            scrollToTop() {
                window.scrollTo(0,0);
            }
        }
    }
</script>

<style>

    .label {
        height: 35px;
        margin-top: 10px;
    }
    .input {
        height: 30px;
        width: 300px;
        border-radius: 20px;
    }
    .message {
        height: 20px;
    }


    input[type=radio] {
        width: 24px;
        height: 24px;
    }

    .radio {
        padding-right: 20px;
        padding-left: 20px;

    }

    .bg-2 {
        background: #260000;
        width: 360px;
        border-radius: 20px;
    }
    .bg-2 {
        background: #101010;
        width: 360px;
        border-radius: 20px;
        padding-bottom: 30px;
    }
    .bg-3 {
        background-color: #000000;
        border-radius: 20px;
    }






    label {
        text-align: left;
        padding-bottom: 2px;
        margin-bottom: 2px;
        color: white;
    }

    li {
        list-style-type: none;
    }
</style>
