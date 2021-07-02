import httpClient, {removeHeader} from './api.service';

// URLs
const LOGIN = '/login';
const LOGOUT = '/logout';

const login = (email, password) => httpClient.post(LOGIN, { email, password });

const logout = ()=> {
    let response = httpClient.post(LOGOUT);
    
    removeHeader;

    return response;
}

export {
    login,
    logout
}