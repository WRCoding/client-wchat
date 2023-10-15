import { createApp } from 'vue'
import "./assets/style.css";
import "./assets/icon/iconfont.css";
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// @ts-ignore
import App from './App.vue'
import {router} from "./router.ts";
import contextmenu from "v-contextmenu";
import "v-contextmenu/dist/themes/default.css";


const pinia = createPinia()
createApp(App)
    .use(router)
    .use(Antd)
    .use(pinia)
    .use(contextmenu)
    .mount('#app')
