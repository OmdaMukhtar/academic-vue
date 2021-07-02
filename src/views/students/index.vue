<template>
    
    <div class="page-output">
        <div class="container">

            <div class="breadcrumb-in" v-show="!isLoading">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Students</li>
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

                <div v-show="!isLoading">
                    <button class="btn btn-success" @click="createStudent">Create</button>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Class Name</th>
                                <th>Birth Date</th>
                                <th class="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(student, i) in getStudentList" :key="i">
                                <td>{{i+1}}</td>
                                <td>{{student.first_name}}</td>
                                <td>{{student.last_name}}</td>
                                <td>{{student.class.name}}</td>
                                <td>{{student.date_of_birth}}</td>
                                <td class="text-center">
                                    <button class="btn btn-warning btn-sm mr-1" @click="editStudent(student.id)">Edit</button>
                                    <button class="btn btn-danger btn-sm" @click="deleteClass(student.id)">Delete</button>
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

import { mapGetters } from 'vuex'
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
        await self.$store.dispatch('getStudents').then(()=>{
            self.isLoading = false;
        });
    },
    
    computed: {
        ...mapGetters([
            "getStudentList"
        ]),
    },

    methods: {
        
        onCancel(){
            console.log("is cancel loading");
        },

        createStudent(){
            router.push('/students/create');
        },

        editStudent(id){
            router.push({
                name:"student.edit", 
                params: {id: id}
            });
        }
    }
}
</script>

<style>

</style>