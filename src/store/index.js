import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/users.store';
import Rooms from './modules/classes.store';
import Students from './modules/student.store';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    Rooms,
    Students,
  }
})
