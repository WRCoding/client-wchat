import {getRequest, postRequest} from '../index.ts';

export default {
    getCheckCode: (params?: any) => getRequest<object>('/oauth/getCheckCode', {params}),
    login: (data:any) => postRequest('/oauth/login', data),
    register: (data:any) => postRequest('/oauth/register', data),
    callback: (params:any) => getRequest<object>('/oauth/callback',{params})
}