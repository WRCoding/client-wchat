<script setup lang="ts">
import {ref, watch} from "vue";
import {useRoute,useRouter} from "vue-router";
import avatar from "../../components/avatar/Index.vue";
import {message} from 'ant-design-vue';
import {useUserInfoStore} from "../../store/useUserInfoStore.ts";
import Ws from "../../ts/WebSocket.ts";

let mainWindowRoutes = ref([
  {path: `/Chat`, isSelected: true, icon: `icon-chat`, iconSelected: `icon-chat`},
  {path: `/Contacts`, isSelected: false, icon: `icon-tongxunlu1`, iconSelected: `icon-tongxunlu`},
  // {path: `/WindowMain/Collection`, isSelected: false, icon: `icon-shoucang1`, iconSelected: `icon-shoucang`},
]);
let route = useRoute();
let router = useRouter();
let userInfoStore = useUserInfoStore()
watch(
    () => route,
    () => mainWindowRoutes.value.forEach((v) => (v.isSelected = v.path === route.fullPath)),
    {
      immediate: true,
      deep: true,
    }
);

const logout = () => {
  message.success('退出登录')
  userInfoStore.setUserInfo(null)
  Ws.close()
  router.push('/')
}

function routerTo(path:string) {
  console.log(path)
  router.push(path)
}

let src = ref('../../../../src/assets/vue.svg')
</script>
<template>
  <div class="BarLeft">
    <avatar :src="userInfoStore.userInfo.avatarUrl" :size= 55 />
    <div class="menu">
      <!--      <router-link v-for="item in mainWindowRoutes" :to="item.path"-->
      <!--                   :class="[`menuItem`, { selected: item.isSelected }]">-->
      <!--        <i :class="[`icon`, item.isSelected ? item.iconSelected : item.icon]"-->
      <!--           style="transform: scale(2);transform-origin: center"></i>-->
      <!--      </router-link>-->
      <i v-for="item in mainWindowRoutes" @click="routerTo(item.path)"
         :class="[`menuItem`,`icon`, item.isSelected ? item.iconSelected : item.icon, { selected: item.isSelected }]"></i>
    </div>
    <i class="menuItem icon icon-setting setting" v-contextmenu:contextmenu></i>

    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item>设置</v-contextmenu-item>
      <v-contextmenu-item @click="logout">退出</v-contextmenu-item>
    </v-contextmenu>
  </div>
</template>
<style scoped>
.BarLeft {
  width: 70px;
  height: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  background: rgb(46, 46, 46);
  align-items: center;
}


.menu {
  display: flex;
  flex-direction: column;
}

.menuItem {
  margin-top: 20px;
  text-align: center;
  padding-left: 12px;
  padding-right: 12px;
  color: rgb(126, 126, 126);
  cursor: pointer;
  font-size: 30px;

  &:hover {
    color: rgb(141, 141, 141);
  }
}

.selected {
  color: rgb(7, 193, 96);

  &:hover {
    color: rgb(7, 193, 96);
  }
}

.setting {
  align-items: flex-end;
}
</style>
