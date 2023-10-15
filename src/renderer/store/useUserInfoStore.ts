import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserInfoStore = defineStore('userInfo', () => {
    let userInfo:UserInfoVo = ref(null)
    function setUserInfo(item: UserInfoVo) {
        // @ts-ignore
        userInfo.value = item
    }

    return{
        userInfo,
        setUserInfo
    }
})