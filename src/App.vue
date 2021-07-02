<template>
  <div id="app" :class="{'login_body':!isLogin && isLoginPage}">
     <the-header></the-header>

      <main >
        <FlashMessage style="z-index:9999 !important;"></FlashMessage>

        <div> 
             <transition
                name="fade"
                mode="out-in"
                @beforeLeave="beforeLeave"
                @enter="enter"
                @afterEnter="afterEnter">
                 <!-- <keep-alive> -->
                  <router-view/>
                 <!-- </keep-alive> -->
             </transition>
        </div>

      </main>

  </div>
</template>
<script>

  import TheHeader from "./views/layouts/TheHeader";
  import mixins from './mixins/user';

  export default {
    mixins: [mixins],
    components: {
      TheHeader,
    },
    computed:{
       isLoginPage(){
        return this.$route.name == "login";
      },
    },
    data() {
      return {
        prevHeight: 0,
      };
  },
  methods: {
    
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
    
  }

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

._vue-flash-msg-body{
  z-index: 99999 !important;
}
</style>

