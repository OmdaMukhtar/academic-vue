<template>
        <div class="home-page">
        <div class="container">
            <h2 class="title"><i class="fa fa-bar-chart-o"></i>Global statistics</h2>
                <div ref="vldParent">
                    <loading :active.sync="isLoading"
                        :can-cancel="false"
                        :on-cancel="onCancel"
                        :is-full-page="false"
                        loader="spinner"
                        :container="$refs.vldParent"
                        color="#1a3357">
                    </loading>
                    <div class="page-output" >
                        <div class="row">
                            <!-- item -->
                            <div class="col-lg-4 col-md-6">
                                <div class="statistics-item">
                                    <h3><span class="num">{{class_count}}</span>Classes
                                    </h3>
                                </div>
                            </div>
                            <!-- End item -->


                            <!-- item -->
                            <div class="col-lg-4 col-md-6">
                                <div class="statistics-item">
                                    <h3><span class="num">{{student_count}}</span>Students
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return {
            isLoading: false,
            class_count: 0,
            student_count: 0,
        }
    },

    async created(){
        this.isLoading = true;
        var self = this;
        await self.$store.dispatch('getRoomsStudent').then((res)=>{
            self.isLoading = false;
            self.class_count = res.data.data.length;
        });

        this.isLoading = true;
        await self.$store.dispatch('getStudents').then((res)=>{
            self.isLoading = false;
            self.student_count = res.data.meta.total;
        });
    },

    methods:{
        onCancel() {
            console.log('User cancelled the loader.')
        }
    }

}
</script>

<style>

</style>