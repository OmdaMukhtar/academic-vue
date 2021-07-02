import axios from "axios";
import NProgress from '../../node_modules/nprogress/nprogress';
import { TokenService } from "@/services/storage.service";

const httpClient = axios.create({
    withCredentials: false,
    baseURL: 'http://127.0.0.1:8000/api/academic',//process.env.VUE_APP_BASE_URL,
    // timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    }
});

function setHeader(getAuthToken){
    const authInterceptor = (config) => {
        config.headers['X-CSRF-TOKEN'] = getAuthToken;
        return config;
    }
    
    httpClient.interceptors.request.use(authInterceptor);
}

// before a request is made start the nprogress
httpClient.interceptors.request.use(config => {

    if(TokenService.getToken()){
      config.headers['X-CSRF-TOKEN'] = TokenService.getToken();
    }
    
    NProgress.start();

    return config;
});

  
// before a response is returned stop nprogress
httpClient.interceptors.response.use(response => {
    NProgress.done();
  console.log("here = ", response);

    return response;
},
error => {

  NProgress.done();
//   console.log("here = ", error.response);
  return error.response;
});


const removeHeader = ()=>{
    setHeader(null); 
}

export { removeHeader, setHeader };

export default httpClient;