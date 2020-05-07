<template>
    <div>
        <b-container style="height: 50vh">

        </b-container>

        <b-container style="background: black" >

            <b-col class="label fa-pull-left">
                <label>
                    <h5 >EMAIL</h5>
                </label>
            </b-col>
            <b-col>
                <input
                    type="email"
                    placeholder="Email"
                    v-model="email"
                    class="input"
                    @blur="$v.email.$touch()"
                />
            </b-col>
            <b-col class="message">
                <div v-if="$v.email.$error">
                    <p v-if="!$v.email.required" class="error">Email is required</p>
                    <p v-else-if="!$v.email.email" class="error">Please enter valid email</p>
                </div>
            </b-col>

            <b-col class="label">
                <label>
                    <h5>FIRST NAME</h5>
                </label>
            </b-col>
            <b-col>
                <input
                        type="text"
                        placeholder="First name"
                        v-model="firstName"
                        class="input"
                        @blur="$v.firstName.$touch()"
                />
            </b-col>
            <b-col class="message">
                <div v-if="$v.firstName.$error">
                    <p v-if="!$v.firstName.required" class="error">Name is required</p>
                    <p v-else-if="$v.firstName.$invalid" class="error">Please enter valid name</p>

                </div>
            </b-col>

            <b-col class="label">
                <label>
                    <h5>LAST NAME</h5>
                </label>
            </b-col>
            <b-col>
                <input
                        type="text"
                        placeholder="Last name"
                        v-model="lastName"
                        class="input"
                        @blur="$v.lastName.$touch()"
                />
            </b-col>
            <b-col class="message">
                <div v-if="$v.lastName.$error">
                    <p v-if="!$v.lastName.required" class="error">Last name is required</p>
                    <p v-else-if="$v.lastName.$invalid" class="error">Please enter valid last name</p>

                </div>
            </b-col>


            <b-col class="label">
                <label>
                    <h5>ADDRESS</h5>
                </label>
            </b-col>
            <b-col>
                <input
                        type="text"
                        placeholder="Address"
                        v-model="address"
                        class="input"
                        @blur="$v.address.$touch()"
                />
            </b-col>
            <b-col class="message">
                <div v-if="$v.address.$error">
                    <p v-if="!$v.address.required" class="error">Address is required</p>
                    <p v-else-if="$v.address.$invalid" class="error">Please enter address</p>

                </div>
            </b-col>


            <b-col>
            <label class="label">
                <h5>APARTMENT NUMBER</h5>
            </label>
            </b-col>
            <b-col>
                <input
                        type="number"
                        placeholder="Address number"
                        value=""
                        v-model="addressNumber"
                        class="input"
                        @blur="$v.addressNumber.$touch()"
                />
            </b-col>
            <b-col class="message">
                <div v-if="$v.addressNumber.$error">
                    <p v-if="!$v.addressNumber.required" class="error">Address is required</p>
                    <p v-else-if="$v.addressNumber.$invalid" class="error">Please enter address</p>

                </div>
            </b-col>




            <button :disabled="$v.$invalid" type="submit" @submit="console.log('success')">Submit!</button>
<!--            <p v-if="$v.$anyError" class="errorMessage">Please fill out required fields</p>-->

        </b-container>
    </div>
</template>

<script>
    import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                email: null,
                firstName : "",
                lastName : "",
                address : "",
                addressNumber : 0
            }
        },
        validations: {
            email: {
                required,
                email
            },
            firstName: {
                required,
                minLength : minLength(3),
                maxLength : maxLength(18)
            },
            lastName: {
                required,
                minLength : minLength(3),
                maxLength : maxLength(18)
            },
            address: {
                required,
                minLength : minLength(3),
                maxLength : maxLength(18)
            },
            addressNumber: {
                required
            }
        },
        methods : {
            submit() {
                this.$v.$touch()
                if (!this.$v.$invalid) {
                    alert("form submitted " +  this.email)
                }
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
        width: 250px;
        border-radius: 20px;
    }
    .message {
        height: 20px;
    }



    label {
        text-align: left;
    }
</style>
