
export default async function guest ({ next, store, to, from }){
    if(!store.getters.auth && !to.name == "login"){
        await store.dispatch('isLogin').then(()=>{
            // if (store.getters.auth){
            //     store.dispatch('getDashboardStat');
            // }
        });
    }

    if(store.getters.auth){
        return next({
            path: '/dashboard',
        })
    }

    if(store.getters.auth){
        next(vm => {
            vm.prevRoute = from
          });
    }
    return next()
}