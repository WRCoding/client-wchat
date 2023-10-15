<script setup lang="ts">
import Search from "./search/Index.vue";
import Board from "./board/Index.vue";

</script>

<template>
  <div class="main">
    <Search/>
    <Board/>
  </div>
</template>

<style scoped>
.main {
  width: 250px;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
}
</style>