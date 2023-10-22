<script setup lang="ts">
import {onMounted, ref} from "vue";
import {UserOutlined} from '@ant-design/icons-vue';
import {useRouter} from "vue-router";
import oauth from "../api/methods/oauth.ts";
import user from "../api/methods/user.ts";
import {useUserInfoStore} from "../store/useUserInfoStore.ts";
import {message} from 'ant-design-vue';
import Ws from "../ts/WebSocket.ts";
import {webContents, ipcRenderer, BrowserWindow} from "electron";


onMounted(() => {
  console.log('login/Index.vue')

})

ipcRenderer.on('loginSuccessByGitHub', (event, url, param) => {
  console.log(url + ',' + param)
  oauth.callback({code: param})
      .then(response => {
        console.log(response)
        if (response.data.code === '200') {
          message.success('登录成功')
          let userInfo = response.data.data as UserInfoVo
          console.log(userInfo)
          userInfoStore.setUserInfo(userInfo)
          new Ws(userInfo.ipAndPort)
          clearInput()
          router.push('/Chat')
        } else {
          message.warning('GitHub登录失败')
        }
      })
})

const userInfoStore = useUserInfoStore()

let isLogin = ref(true)
let router = useRouter()
let passWord = ref('111')
let email = ref('846179345@qq.com')
let checkCode = ref('')


const getCheckCode = () => {
  const result = oauth.getCheckCode({email: email.value})
  console.log(result)
}

function clearInput() {
  email.value = ''
  passWord.value = ''
  checkCode.value = ''
}


const loginByGitHub = () => {
  ipcRenderer.send('openWindow')
};

function registerOrLogin() {
  if (isLogin.value) {
    console.log('登录')
    oauth.login({key: email.value, passWord: passWord.value})
        .then(response => {
          console.log(response)
          if (response.data.code === '200') {
            message.success('登录成功')
            let userInfo = response.data.data as UserInfoVo
            console.log(userInfo)
            userInfoStore.setUserInfo(userInfo)
            new Ws(userInfo.ipAndPort)
            clearInput()
            router.push('/Chat')
          } else {
            message.warning(response.data.message)
            clearInput()
          }
        })
  } else {
    console.log('注册')
    oauth.register({email: email.value, passWord: passWord.value, checkCode: checkCode.value})
        .then(response => {
          console.log(response.data)
        })
  }
}
</script>

<template>
  <div class="main">
    <div style="width: 100%;height: 30px;-webkit-app-region: drag;"></div>
    <div class="loginBox">
      <div class="avatar">
        <a-avatar shape="square" :size="150">
          <template #icon>
            <UserOutlined/>
          </template>
        </a-avatar>
      </div>
      <div class="loginInput">
        <div>
        <span style="font-size: 35px; cursor: pointer" :class="{active: isLogin, normal: !isLogin}"
              @click="isLogin = true">登录</span>
          <span style="font-size: 35px; cursor: pointer" :class="{active: !isLogin, normal: isLogin}"
                @click="isLogin = false">注册</span>
        </div>
        <div style="width: 350px">
          <input style="width:350px;padding: 10px" type="text" placeholder="请输入账号" v-model="email"/>
        </div>
        <div v-if="!isLogin"
             style="display: flex; flex-direction: row;margin-top: 4px;width: 350px;align-items: center">
          <input style="flex: 1;padding: 10px" type="text" placeholder="请输入验证码" v-model="checkCode"/>
          <span style="padding: 5px;justify-content: center;display: block;margin: 0 auto;cursor: pointer;"
                @click="getCheckCode">获取验证码</span>
        </div>
        <div style="width: 350px;margin-top: 4px">
          <input style="width:350px;padding: 10px" type="password" placeholder="请输入密码" v-model="passWord"/>
        </div>
        <div style="margin-top: 7px">
        <span class="btn" style="color: rgb(64, 158, 255); cursor: pointer;" @click="registerOrLogin">{{
            isLogin ? '登录' : '注册'
          }}</span>
          <span class="gitHubLogin"
                style="color: rgb(64, 158, 255); cursor: pointer; margin-left: 5px"
                @click="loginByGitHub">GitHub登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.loginBox {
  width: 100%;
  height: calc(100% - 30px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loginInput {
  display: flex;
  flex-direction: column;
  margin-left: 7px;
}

.loginBox input {
  margin-top: 7px;
  border-radius: 7px;
}


.active {
  color: rgb(64, 158, 255);
  opacity: 1;
}

.normal {
  color: rgb(64, 158, 255);
  opacity: 0.5;
}


.btn:hover {
  border: 1px solid gainsboro;
  padding: 2px;
  border-radius: 4px;
}

.gitHubLogin:hover {
  border: 1px solid gainsboro;
  padding: 2px;
  border-radius: 4px;
}
</style>