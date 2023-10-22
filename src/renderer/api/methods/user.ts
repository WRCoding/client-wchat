import {getRequest} from '../index.ts';

export default {
    searchOneByEmail: (params?: any) => getRequest<object>('/user/search', {params}),
    searchFriend: (params: any) => getRequest<object>('/friend/search', {params}),
    addFriend: (params: any) => getRequest<object>('/friend/add', {params})
}