<template>
    
    <div class="page-output">
        <div class="container">

            <div class="breadcrumb-in" v-show="!isLoading">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Classes</li>
                    </ol>
                </nav>
            </div>

            <div ref="vldParent">
                <loading :active.sync="isLoading" 
                    :can-cancel="false" 
                    :on-cancel="onCancel"
                    :is-full-page="false"
                    loader="spinner"
                    :container="$refs.vldParent"
                    color="#1a3357">
                </loading>
            
                <vue-confirm-dialog></vue-confirm-dialog>

                <div v-show="!isLoading">
                    <button class="btn btn-success" @click="createClass">Create</button>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Description</th>
                                <th>Max Student</th>
                                <th>Students</th>
                                <th class="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(room, i) in getClassList" :key="i">
                                <td>{{i+1}}</td>
                                <td>{{room.code}}</td>
                                <td>{{room.name}}</td>
                                <td>{{room.status}}</td>
                                <td>{{room.description}}</td>
                                <td>{{room.max_students}}</td>
                                <td>
                                    <!-- <button class="btn btn-default btn-sm mr-1">  -->
                                        <router-link :to="'/classes/'+room.id+'/students'" >{{room.students.length}}</router-link>
                                    <!-- </button> -->
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-warning btn-sm mr-1" @click="editClass(room.id)">Edit</button>
                                    <button class="btn btn-danger btn-sm" @click="deleteClassD(room.id)">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import router from '@/router/index';

export default {
    data(){
        return {
            isLoading: false
        }
    },
    async created(){
        this.isLoading = true;
        var self = this;
        await self.$store.dispatch('getRoomsStudent').then(()=>{
            self.isLoading = false;
        });
    },
    
    computed: {
        ...mapGetters([
            "getClassList"
        ]),
        ...mapActions([
            'deleteClass',
            'getRoomsStudent'
        ]),
    },

    methods: {
        
        onCancel(){
            console.log("is cancel loading");
        },

        createClass(){
            router.push('/classes/create');
        },

        editClass(id){
            router.push({
                name:"class.edit", 
                params: {id: id}
            });
        },

        deleteClassD(id){
            // console.log("id = ", id);
            this.$confirm({
                title: 'Are you sure?',
                message: 'Are you sure you want to delete?',
                button: {
                    yes: 'Yes',
                    no: 'Cancel'
                },
                callback: confirm => {
                    
                    if(confirm){
                        this.$store.dispatch('deleteClass', id).then((resp)=>{
                            this.flashMessage.show({
                                status: resp.data.status? 'success': 'error',
                                title: 'Delete Class',
                                message: resp.data.message
                            });

                            this.getRoomsStudent();
                        });
                    }
                }
            })
        }
    }
}
</script>

<style>

</style>