<script setup lang="ts">
import Menu from "./menu/Index.vue";
import Left from "./left/Index.vue";
import Main from "./main/Index.vue";
import {useUserInfoStore} from "../store/useUserInfoStore.ts";

const userInfoStore = useUserInfoStore()



</script>

<template>
  <Menu/>
  <div class="box">
    <Left/>
    <Main/>
  </div>
</template>

<style scoped>
.box {
  flex: 1;
  height: 100%;
  border-top: 1px solid #e6e6e6;
  box-sizing: border-box;
  display: flex;
  margin-top: -1px;
}
</style>