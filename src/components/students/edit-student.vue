<template>
    <div class="col-lg-8">
        <div class="block_in">
            <h3 class="title"><i class="fa fa-add"></i> Edit class</h3>
            <div class="box-form">
                 <ValidationObserver v-slot="{ handleSubmit }">
                    <form class="layout-1" @submit.prevent="handleSubmit(handleForm)">
                        <ValidationObserver>
                            <ValidationProvider name="class_id" :rules="{ required: true }" mode="lazy">
                                <div slot-scope="{ errors }">
                                    <select class="input-text mb-1" name="class_id" v-model="class_id">
                                        <option value="">select class..</option>
                                        <option v-for="(room, i) in getClassList" :key="i" 
                                            :value="room.id" v-text="room.name"></option>
                                    </select>
                                    <p class="text-danger">{{ errors[0] }}</p>
                                </div>
                            </ValidationProvider>
                         </ValidationObserver>
                         <ValidationObserver>
                                <ValidationProvider name="name" :rules="{ required: true }" mode="lazy">
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
                                <ValidationProvider name="code" :rules="{ required: true }" mode="lazy">
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
                                        <h4>Brith Date</h4>
                                        <input type="date" class="input-text" v-model="date_of_birth">
                                        <p class="text-danger">{{ errors[0] }}</p>
                                    </label>
                                </div>
                            </ValidationProvider>
                         </ValidationObserver>
                        <button class="btn-sent" type="submit">Update</button>
                    </form>
                </ValidationObserver>
            </div>
        </div>
    </div>
</template>

<script>

import mixins from './../../mixins/user';
import { mapActions, mapGetters } from 'vuex';
import router from '@/router/index';

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

    data(){
        return {
            id: ``,
            class_id: ``,
            first_name: ``,
            last_name: ``,
            date_of_birth: ``,
            getClassList: ``,
        }
    },
    created(){
        var self = this;
         self.$store.dispatch('getRoomsStudent').then((resp)=>{
            self.getClassList = resp.data.data;
        });

        this.id = router.history.current.params.id;
        // this.getClassList = router.history.current.params.getClassList;
        let myObject = this.getStudentList().filter(class_model => class_model.id == this.id)[0];

        this.class_id = myObject.class_id;
        this.first_name = myObject.first_name;
        this.last_name = myObject.last_name;
        this.date_of_birth = myObject.date_of_birth;
    },
     methods: {
        ...mapGetters([
            'getStudentList'
        ]),
        ...mapActions([
            'updateStudent'
        ]),

        handleForm(){
            this.updateStudent({
                id: this.id,
                class_id: this.class_id,
                first_name: this.first_name,
                last_name:  this.last_name,
                date_of_birth: this.date_of_birth,
            }).then((response)=>{
                console.log(response);
                    this.flashMessage.show({
                        status: response.data.status? 'success': 'error',
                        title: 'Edit Student',
                        message: response.data.message
                    });

                    this.$router.push('/students');
            });
        }
    }
}
</script>
