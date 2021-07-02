import httpClient from './api.service';

// URLs
const STUDENT = '/students';
const studentList = () => httpClient.get(STUDENT);
const storeStudent = (params) => httpClient.post(STUDENT, params);
const updateStudent = (id, params) => httpClient.put(STUDENT+'/'+ id , params);
const studentClassList = (id) => httpClient.get('/classes/'+ id);

export {
    studentList,
    storeStudent,
    updateStudent,
    studentClassList
}