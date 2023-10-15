<script setup lang="ts">
import {onMounted} from "vue";
import ChatSearch from "../search/Index.vue";
import ChatItemList from '../../../components/chatItemList/Index.vue'
onMounted(() => {
  console.log('chatBoard')
});
</script>
<template>
    <ChatItemList/>
</template>

<style scoped>

</style>
