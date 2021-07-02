<template>
      
    <div class="container">
        <div class="row justify-content-center">

            <div class="col-lg-4 border-right">
                <div class="block_in" style="margin-top: 100%;">
                    <div class="login-form">
                        <div class="logo" style="width:25%; height:50px;margin:2px auto; margin-bottom:2%">
                            <a href="#"><img src="./../../assets/img/logo.png" alt="logo.png"></a>
                        </div>
                        <ValidationObserver v-slot="{ handleSubmit }">
                            <form class="layout-1" @submit.prevent="handleSubmit(onSubmit)">
                                <label>
                                    <h4>Email</h4>
                                    <ValidationObserver>
                                        <ValidationProvider name="email" :rules="{ required: true, email: true }">
                                            <div slot-scope="{ errors }">
                                                <input class="input-text"  placeholder="foo@bar.com" type="text" name="email" v-model="user_email">
                                                <p class="text-danger">{{ errors[0] }}</p>
                                            </div>
                                        </ValidationProvider>
                                    </ValidationObserver>
                                </label>
                                <label>
                                    <h4>Password</h4>
                                    <ValidationObserver>
                                        <ValidationProvider name="password" :rules="{ required: true }">
                                            <div slot-scope="{ errors }">
                                                <input class="input-text" type="password" name="password"  v-model="password">
                                                <p class="text-danger">{{ errors[0] }}</p>
                                            </div>
                                        </ValidationProvider>
                                    </ValidationObserver>
                                </label>
                                <login-button :loading="loading">
                                    <!-- <button class="btn-sent" type="submit"> -->
                                        Login
                                    <!-- </button> -->
                                </login-button>

                                <div class="forgot">
                                    <a href="#">Forgot your password?</a>
                                </div>
                            </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>

        </div> <!-- // row -->
    </div> <!-- // container -->
</template>

<script>
import loginButton from './../../components/auth/login-button';
import { mapActions } from "vuex";
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate';

import mixins from './../../mixins/user';
import router from '@/router/index';

export default {
    name: "login",
    mixins:[mixins],
    data() {
        return {
            password: ``,
            loading: false
        };
    },
    
    components: {
        ValidationProvider,
        ValidationObserver,
        loginButton
    },

    computed: {
        user_email: {
            get(){
                return this.user.email;
            },

            set(value){
                console.log(value);
                this.$store.commit('SET_USER_EMAIL', value);
            }
        }

    },
    methods: {
        ...mapActions([
            'getLogin'
        ]),

        onSubmit() {
            let self = this;
            this.loading = true;
            // Perform a simple validation that email and password have been typed in
            this.getLogin(this.password).then((response)=> {
                let message = {
                    status: 'error',
                    title: 'Login',
                    message: response.data.message
                };
                if(response.data.status){
                        message.status='success',
                        message.message= 'Login successfully'
                        this.password = "";

                        self.flashMessage.show({
                            status: message.status,
                            title: message.title,
                            message: message.message
                        });

                        this.$store.commit('IS_LOGIN', true); 
                        
                        router.push('/dashboard');
                }else{
                    self.flashMessage.show({
                        status: message.status,
                        title: message.title,
                        message: message.message
                    });
                }

                this.loading = false;
              
            })

           
        }

    }
};
</script>

<style scoped>
    /* svg{
        width: 100px;
        height: 100px;
        margin: 20px;
        display:inline-block;
    } */
</style>