<template>
    <div v-if="isLogin">
      <header v-show="isLogin">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-2">
                    <div class="logo" style="width:25%; height:50px;margin:2px auto; margin-bottom:2%">
                        <router-link to="/dashboard" >
                          <img src="./../../assets/img/logo.png" alt="logo.png"></router-link>
                          <a  href="#myDropdown" 
                              data-toggle="collapse" 
                              class="mobile-toggle" ><i class="fa fa-bars"></i></a>
                    </div>
                </div>
                <div class="col-lg-7">
                    <ul class="main-menu d-lg-block collapse" id="myDropdown">
                        <li>
                          <router-link 
                              to="/dashboard" 
                              exact data-toggle="collapse">
                              <i class="fa fa-dashboard"></i> Dashboard</router-link></li>
                        <li>
                          <router-link 
                              to="/classes" 
                              data-toggle="collapse">
                              <i class="fa fa-crosshairs"></i>Classes</router-link></li>
                        <li>
                          <router-link 
                              to="/students" 
                              data-toggle="collapse">
                              <i class="fa fa-shield"></i>Students</router-link></li>
                        <li>
                        <li class="d-lg-none d-md-none">
                          <a href="javascript:void(0)"  @click="logoutUser" data-toggle="collapse"><i class="fa fa-sign-out" ></i>Logout</a></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <div class="dropdown" >
                        <button class="dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Welcome Demo, {{ user.first_name }}
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">
                              <router-link 
                                  to="/settings">
                                  <i class="fa fa-gear"></i>My settings </router-link></button>
                              <a href="javascript:void(0)" 
                                  class="dropdown-item" 
                                  @click="logoutUser">
                                  <i class="fa fa-sign-out"></i>Logout
                              </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </header>
    </div>
</template>

<script>
import user from "@/mixins/user";
import { mapActions, mapState } from "vuex";
import Store from '@/store/index';

export default {
  mixins: [user],

  created(){
    Store.auth ? 
    this.getAlerts() :
    '';
  },
  computed: {
    ...mapState({
      alerts: state=>state.Alerts.alerts
    }),
  },

  methods: {
    ...mapActions([
      'logoutUser',
      'getAlerts'
    ]),

    openMobileMenu() {
       var dev = document.getElementById("myDropdown");

        if (dev.style.display === "block") {
        dev.style.display = "none";
      } else {
        dev.style.display = "block";
      }
    }
  }
}
</script>

<style lang="css" scoped>
  a.active{
    font-weight: 600;
    opacity: 1;
  }
</style>