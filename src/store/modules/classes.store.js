import {classList, storeClass, updateClass, deleteClass} from '@/services/classes.service.js';

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
                    commit('FETCH_CLASSES', res.data.data);
                    return res;
                }).catch(error => {
                    console.error(error);
                })
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
        },

        async deleteClass({commit}, id){
            try {
                commit;
                return await deleteClass(id).then(res => {
                    return res;
                });
            } catch (error) {
                console.error(error);
            }
        }
    }
}