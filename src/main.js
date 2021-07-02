import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import plugin from './plugins/index';

import 'vue-loading-overlay/dist/vue-loading.css';
import Loading from 'vue-loading-overlay';

import VueTableDynamic from 'vue-table-dynamic'
Vue.use(VueTableDynamic)

Vue.component("loading", Loading);

Vue.use(plugin)

import vPikaday from 'vue-pikaday'
Vue.use(vPikaday)

import VModal from 'vue-js-modal'

Vue.use(VModal, { dialog: true })

Vue.config.productionTip = false

import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: './../../dist/placeholder.jpg',
    loading: './../../dist/loading.gif',
    attempt: 1
  })


import { extend } from 'vee-validate';
import { required, email, confirmed } from 'vee-validate/dist/rules';

// Add the required rule
extend('required', {
  ...required,
  message: 'The {_field_} field is required',
 
});

extend('email', {
  ...email,
    message: 'The {_field_} field must be a valid email',
});

extend('confirmed', {
  ...confirmed,
    message: 'The {_field_} field confirmation does not match',
});


import $ from 'jquery';
window.jQuery = $;
window.$ = $;

require( 'datatables.net-bs' );


import ReadMore from 'vue-read-more';
 
 Vue.use(ReadMore);
 
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')