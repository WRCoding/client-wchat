import * as VueRouter from "vue-router";
// @ts-ignore
import Index from "./chat/Index.vue";
// @ts-ignore
import Login from "./login/Index.vue";


//路由规则描述数组
const routes =  [
    { path: "/", component: Login },
    { path: "/Chat", component: Index}
];
//导出路由对象
export let router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes,
});