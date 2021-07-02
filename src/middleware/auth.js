

export default async function auth ({ next, store, from }){
    if(!store.getters.auth){
        await store.dispatch('isLogin');
        if(store.getters.auth){
            // await store.dispatch('getDashboardStat');
            // await store.dispatch('getUserDetails');
            // await store.dispatch('getDomains');
        }
    }

    if(store.getters.auth){
        next(vm => {
            vm.prevRoute = from
        });
    }

    if(!store.getters.auth){

        return next({
            path: '/login',
        });
    }
    
   
    return next()
}