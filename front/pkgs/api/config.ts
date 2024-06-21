import axios from 'axios';

export enum EnumMethodsAPI {
    'POST' = 'POST',
    'DELETE' = "DELETE",
    "GET" = "GET",
    "PUT" = "PUT",
    "PATCH" = "PATCH"
}

const config = {
    baseURL: 'http://localhost:3000',
}
export const axiosAdapter = axios.create(config)

axiosAdapter.interceptors.request.use(function (config) {

    console.log(config, 'INTERSEPTOR_AXIOS')
    return config;
}, function (error) {

    return Promise.reject(error);
});





