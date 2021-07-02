<template>
   <div class="page-output">
        <div class="container">

            <div class="breadcrumb-in">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/dashboard" >Dashboard</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">
                            <router-link to="/classes">Classes</router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            <span>Create</span>
                        </li>
                    </ol>
                </nav>
            </div>
            <div class="row">
                <class-create></class-create>
            </div>
        </div>
    </div>
</template>

<script>

import ClassCreate from '@/components/classes/create-class';

export default {
    components: {
        ClassCreate
    },

    methods: {
    }
}
</script>

<style lang="css" scoped>
.input-text {
    width: 100%;
    padding: 8px 20px;
    background-color: #F4F7F9;
    border: 1px solid #F7FAFD !important;
    border: 2px;
}

button.btn-sent {
    color: #ABB4C1;
    text-align: center;
    padding: 10px;
    font-size: 15px;
    width: 100%;
    border: 1px solid #F4F7F9;
    cursor: pointer;
    background-color: #fff;
    font-weight: 500;
}

button.btn-sent:hover {
    background-color: #7FBE54;
    color: #fff;
}
</style>
