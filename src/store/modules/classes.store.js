import {classList, storeClass, updateClass} from '@/services/classes.service.js';

export default {
    state: {
        classes : [],
    },

    getters: {
        getClassList: function(state) {
            return state.classes;
        }
    },

    mutations: {
        FETCH_CLASSES(state, payload){
            state.classes = payload;
        }
    },

    actions: {
        async getRoomsStudent({commit}){
            try {
                return await classList().then( res => {
                    console.log("store = ", res.data.data);
                    commit('FETCH_CLASSES', res.data.data);
                    return res;
                }).catch(error => {
                    console.error(error);
                })
                // console.log("from store=", response);
                // return response;
            } catch (error) {
                console.error(error);
            }
        },

        async createClass({commit}, params){
            try {
                commit;
                return await storeClass(params);
            } catch (error) {
                console.error(error);
            }
        },

        async updateClass({commit}, params){
            try {
                commit;
                return await updateClass(params.id, params);
            } catch (error) {
                console.error(error);
            }
        }
    }
}