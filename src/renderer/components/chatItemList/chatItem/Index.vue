<template>
    <div class="item">
      <avatar :size="45" :src="src"/>
        <div class="content">
          <div class="nameAndTime">
            <div class="nickname">XXXXXXXXXX</div>
            <div class="time" >11:45</div>
          </div>
          <div class="message">I'm good, thanks!</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Avatar from '../../avatar/Index.vue'
import {ref} from "vue";

const src = ref('https://cdn.vuetifyjs.com/images/john.jpg')
</script>

<style>
.item {
  display: flex;
  align-items: center;
  padding: 4px;
  border-bottom: 1px solid #ccc;
  margin-top: 4px;
  background: rgb(230, 229, 229);
  background-image: linear-gradient(to bottom right, rgb(235, 234, 233), rgb(240, 240, 240));
}
.ListBox {
  background: rgb(230, 229, 229);
  background-image: linear-gradient(to bottom right, rgb(235, 234, 233), rgb(240, 240, 240));
  flex: 1;
  overflow-y: auto;
  box-sizing: border-box;

  border-right: 1px solid rgb(214, 214, 214);
}
.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 70%;
}
.nameAndTime{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.nickname {
    font-weight: bold;
    width: 135px;
    //margin-bottom: 5px;
}

.message {
    margin-bottom: 5px;
}

.time {
    color: #999;
    font-size: 10px;
    width: 26px;
}
</style>