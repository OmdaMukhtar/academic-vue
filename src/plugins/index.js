import Vue from 'vue'
import FlashMessage from './flash-message';

const plugin = {
    install () {
        Vue.FlashMessage = FlashMessage
        Vue.prototype.$FlashMessage = FlashMessage
    }
}

export default plugin;

