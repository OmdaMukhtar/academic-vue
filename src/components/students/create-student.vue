<template>
    <div class="col-lg-8">
        <div class="block_in">
            <h3 class="title"><i class="fa fa-add"></i> Create class</h3>
            <div class="box-form">
                 <ValidationObserver v-slot="{ handleSubmit }">
                    <form class="layout-1" @submit.prevent="handleSubmit(handleForm)">
                         <ValidationObserver>
                                <ValidationProvider name="class_id" :rules="{ required: true }" mode="lazy">
                                    <div slot-scope="{ errors }">
                                        <select class="input-text mb-1" name="class_id" v-model="class_id">
                                            <option value="" class="text-center">-- select class --</option>
                                            <option v-for="(room, i) in getClassList" :key="i" 
                                                :value="room" v-text="room.name"></option>
                                        </select>
                                        <p class="text-danger">{{ errors[0] }}</p>
                                    </div>
                                </ValidationProvider>
                         </ValidationObserver>
                         <ValidationObserver>
                                <ValidationProvider name="first_name" :rules="{ required: true }" mode="lazy">
                                    <div slot-scope="{ errors }">
                                        <label>
                                            <h4>First Name</h4>
                                            <input class="input-text" type="text" name="first_name" v-model="first_name">
                                            <p class="text-danger">{{ errors[0] }}</p>
                                        </label>
                                    </div>
                                </ValidationProvider>
                         </ValidationObserver>
                         <ValidationObserver>
                                <ValidationProvider name="last_name" :rules="{ required: true }" mode="lazy">
                                    <div slot-scope="{ errors }">
                                        <label>
                                            <h4>Last Name</h4>
                                            <input class="input-text" type="text" name="last_name" v-model="last_name">
                                            <p class="text-danger">{{ errors[0] }}</p>
                                        </label>
                                    </div>
                                </ValidationProvider>
                         </ValidationObserver>
                         <ValidationObserver>
                                <ValidationProvider name="date_of_birth" :rules="{ required: true }" mode="lazy">
                                    <div slot-scope="{ errors }">
                                        <label>
                                            <h4>Birth Date</h4>
                                            <input class="input-text" type="date" name="date_of_birth" v-model="date_of_birth">
                                            <p class="text-danger">{{ errors[0] }}</p>
                                        </label>
                                    </div>
                                </ValidationProvider>
                         </ValidationObserver>
                        <button class="btn-sent" type="submit">Save</button>
                    </form>
                </ValidationObserver>
            </div>
        </div>
    </div>
</template>

<script>

import mixins from './../../mixins/user';
import { mapActions } from 'vuex';

import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate';

export default {
    mixins: [mixins],
    components: {
        ValidationProvider,
        ValidationObserver,
    },

    async created(){
        var self = this;
        await self.$store.dispatch('getRoomsStudent').then((resp)=>{
            self.getClassList = resp.data.data;
        });
    },
    data(){
        return {
            limit: 5,
            class_id: ``,
            first_name: ``,
            last_name: ``,
            date_of_birth: ``,
            getClassList: ``
        }
    },

     methods: {
        ...mapActions([
            'createStudent'
        ]),

        handleForm(){
            if(this.class_id.students.length == this.limit){
                this.flashMessage.show({
                    status: 'error',
                    title: 'Create Student',
                    message: "class is reach to his limit ["+this.limit+"]"
                });

            }else {
    
                this.createStudent({
                        class_id: this.class_id.id,
                        first_name: this.first_name,
                        last_name:  this.last_name,
                        date_of_birth: this.date_of_birth,
                    }).then((response)=>{
    
                        this.flashMessage.show({
                            status: response.data.status? 'success': 'error',
                            title: 'Create Student',
                            message: response.data.message
                        });
    
                        this.$router.push('/students');
                });

            }
        }
    }
}
</script>
