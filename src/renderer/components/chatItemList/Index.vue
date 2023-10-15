<template>
  <div class="chatItemList">
    <chat-item v-for="i in 20"/>
  </div>
</template>


<script lang="ts" setup>
import ChatItem from './chatItem/Index.vue'
</script>


<style scoped>
.chatItemList {
  overflow-y: auto;
  height: calc(100% - 54px);
}
</style>