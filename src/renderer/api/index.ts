import axios from "axios";

const instance = axios.create({
    baseURL: '/api',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

// const getRequest = <T>(url: string, config?: any) =>
//   alovaIns.Get<T>(url, { ...config, localCache: 0 })
export const getRequest = <T> (url: string, config?:any):Promise<T> => {
    return instance.get(url, config)
}

export const postRequest = <T> (url: string, data:any):Promise<T> => {
    return instance.post(url, data)
}