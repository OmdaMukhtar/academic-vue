import httpClient from './api.service';

// URLs
const CLASSES = '/classes';
const classList = () => httpClient.get(CLASSES);
const storeClass = (params) => httpClient.post(CLASSES, params);
const updateClass = (id, params) => httpClient.put(CLASSES+'/'+ id , params);

export {
    classList,
    storeClass,
    updateClass
}