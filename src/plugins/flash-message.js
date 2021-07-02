import Vue from 'vue';
import FlashMessage from '@smartweb/vue-flash-message';


Vue.use(FlashMessage, {
    name: 'flashMessage',
    tag: 'FlashMessage',
    time: 3000,
    strategy: 'single',
    icon: true,
    clickable: false,
});

export default FlashMessage;