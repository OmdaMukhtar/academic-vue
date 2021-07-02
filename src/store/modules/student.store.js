import {studentList, storeStudent, updateStudent, studentClassList} from '@/services/student.service.js';

export default {
    state: {
        students : [],
    },

    getters: {
        getStudentList: function(state) {
            return state.students;
        }
    },

    mutations: {
        FETCH_STUDENT(state, payload){
            state.students = payload;
        }
    },

    actions: {
        async getStudents({commit}){
            try {
                let response = await studentList().then( res => {
                    console.log("store = ", res.data.data);
                    commit('FETCH_STUDENT', res.data.data);
                    return res;
                }).catch(error => {
                    console.error(error);
                })
                return response;
            } catch (error) {
                console.error(error);
            }
        },

        async fetchStudentOfClass({commit}, class_id){
            
            try {
                return await studentClassList(class_id).then( res => {
                    commit('FETCH_STUDENT', res.data.data);
                    return res;
                }).catch(error => {
                    console.error(error);
                })
            } catch (error) {
                console.error(error);
            }
        },

        async createStudent({commit}, params){
            try {
                commit;
                return await storeStudent(params);
            } catch (error) {
                console.error(error);
            }
        },

        async updateStudent({commit}, params){
            try {
                commit;
                return await updateStudent(params.id, params);
            } catch (error) {
                console.error(error);
            }
        }
    }
}