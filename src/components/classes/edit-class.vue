<template>
    <div class="col-lg-8">
        <div class="block_in">
            <h3 class="title"><i class="fa fa-add"></i> Edit class</h3>
            <div class="box-form">
                 <ValidationObserver v-slot="{ handleSubmit }">
                    <form class="layout-1" @submit.prevent="handleSubmit(handleForm)">
                         <ValidationObserver>
                                <ValidationProvider name="name" :rules="{ required: true }" mode="lazy">
                                    <div slot-scope="{ errors }">
                                        <label>
                                            <h4>Name</h4>
                                            <input class="input-text" type="text" name="name" v-model="name">
                                            <p class="text-danger">{{ errors[0] }}</p>
                                        </label>
                                    </div>
                                </ValidationProvider>
                         </ValidationObserver>
                         <ValidationObserver>
                                <ValidationProvider name="code" :rules="{ required: true }" mode="lazy">
                                    <div slot-scope="{ errors }">
                                        <label>
                                            <h4>Code</h4>
                                            <input class="input-text" type="text" name="code" v-model="code">
                                            <p class="text-danger">{{ errors[0] }}</p>
                                        </label>
                                    </div>
                                </ValidationProvider>
                         </ValidationObserver>
                         <ValidationObserver>
                                <ValidationProvider name="status" :rules="{ required: true }" mode="lazy">
                                    <div slot-scope="{ errors }">
                                        <label>
                                            <h4>Status</h4>
                                            <input class="input-text" type="text" name="status" v-model="status">
                                            <p class="text-danger">{{ errors[0] }}</p>
                                        </label>
                                    </div>
                                </ValidationProvider>
                         </ValidationObserver>
                         <ValidationObserver>
                            <div slot-scope="{ errors }">
                                <label>
                                    <h4>Description</h4>
                                    <textarea class="input-text" v-model="description"></textarea>
                                    <p class="text-danger">{{ errors[0] }}</p>
                                </label>
                            </div>
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
            name: ``,
            code: ``,
            status: ``,
            description: ``
        }
    },
    created(){
        this.id = router.history.current.params.id;
        let myObject = this.getClassList().filter(class_model => class_model.id == this.id)[0];
        console.log(myObject);
        this.name = myObject.name;
        this.code = myObject.code;
        this.status = myObject.status;
        this.description = myObject.description;
    },
     methods: {
        ...mapGetters([
            'getClassList'
        ]),
        ...mapActions([
            'updateClass'
        ]),

        handleForm(){
            this.updateClass({
                    id: this.id, 
                    code: this.code, 
                    name: this.name, 
                    status: 1, 
                    description: this.description, 
                }).then((response)=>{
                    this.flashMessage.show({
                        status: response.data.status? 'success': 'error',
                        title: 'Edit Class',
                        message: response.data.message
                    });

                    this.$router.push('/classes');
            });
        }
    }
}
</script>
