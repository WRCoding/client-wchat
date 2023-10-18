import {getRequest} from '../index.ts';

export default {
    searchOneByEmail: (params?: any) => getRequest<object>('/user/search', {params}),
}