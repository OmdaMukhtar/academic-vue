import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes";

import store from './../store/index';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: "active", // active class for non-exact links.
    // linkExactActiveClass: "active", // active class for *exact* links.
    base: process.env.BASE_URL,
    routes
});


router.beforeEach((to, from, next) => {
    
    console.log(to.meta.title);
    document.title = to.meta.title;

    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }

    return middleware[0]({
        ...context
    })
});

export default router