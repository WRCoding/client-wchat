<script setup lang="ts">
import Avatar from "../../components/avatar/Index.vue"
import {onMounted} from "vue";

onMounted(() => {
  console.log('MessageBoard')
})

</script>
<template>
  <div class="MessageBord">
    <div class="chat-item-name">最爱的是她</div>
    <div class="chat">
      <div class="chat-msg-list">
        <div class="chat-item">
          <avatar :size="50"/>
          <div class="chat-item-content">XXXXXXXXXXX</div>
        </div>
        <div class="chat-item">
          <avatar :size="50"/>
          <div class="chat-item-content">XXXXXXXXXXX</div>
        </div>
        <div class="chat-item right">
          <avatar :size="50"/>
          <div class="chat-item-content">XXXXXXXXXXX</div>
        </div>
      </div>
      <div class="chat-edit">
        <div class="msg-input">
          <div class="input-wrapper m-input">
            <div class="m-input input" contenteditable="true">ddddd</div>
          </div>
          <i class="icon2 icon-wenjianjia2 action" style="font-size: 20px"></i>
          <i class="icon2 icon-tupian action" style="font-size: 20px"></i>
          <i class="icon3 icon-huojian action" style="font-size: 20px"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

.MessageBord {
  box-sizing: border-box;
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
}

.chat-item-name {
  color: rgb(0, 0, 0);
  font-size: 20px;
  padding: 12px;
  border-bottom: solid 2px rgb(231, 231, 231);
  -webkit-app-region: drag;
}

.chat {
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
  padding-bottom: 1px;
  border-radius: 8px;
  overflow: hidden;
}

.action {
  display: flex;
  align-items: center;
  padding: 4px;
  line-height: 1;
  cursor: pointer;
  border-radius: 4px;
}

.chat-msg-list {
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  padding: 0;
  overflow-y: auto;
}

.chat-edit {
  position: relative;
  padding: 0 10px;
  word-break: break-all;
  height: 50px;

  .msg-input {
    display: flex;
    align-items: center;
    min-height: 40px;
    padding: 2px 6px;
    font-size: 14px;
    color: #fff;
    background-color: #424656;;
    border-radius: 12px;
  }

  .input-wrapper {
    box-sizing: border-box;
    display: inline-flex;
    width: 100%;
    max-height: 100px;
    padding: 0 12px;
    color: #fff;
    cursor: text;
    background-color: #383c4b;
    border: 1px solid transparent;
    border-radius: 6px;
    transition: all 0.1s cubic-bezier(0, 0, 1, 1);
  }

  .m-input {
    padding: 0 4px;
    margin: 0 4px;
    background-color: transparent;
  }

  .input {
    flex: 1;
    padding: 4px 0;
    overflow: hidden;
    overflow-y: auto;
    font-size: 14px;
    color: inherit;
    white-space: pre-wrap;
    cursor: inherit;
    resize: none;
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
  }

}


.chat-item {
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  padding: 7px;
}

.avatar {
  margin-right: 7px;
  margin-left: 7px;
}

.chat-item-content {
  min-height: 1em;
  padding: 8px 12px;
  font-size: 15px;
  line-height: 22px;
  color: rgb(35, 35, 35);
  word-break: break-word;
  background-color: rgb(255, 255, 255);
  border-radius: 18px 18px;
}

.right {
  flex-direction: row-reverse;

  .chat-item-content {
    min-height: 1em;
    padding: 8px 12px;
    font-size: 15px;
    line-height: 22px;
    color: rgb(35, 35, 35);
    word-break: break-word;
    background-color: rgb(149, 236, 105);
    border-radius: 18px 18px;
  }
}

</style>
