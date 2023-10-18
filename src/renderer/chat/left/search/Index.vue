<script lang="ts" setup>
import {reactive, ref} from "vue";
import Avatar from '../../../components/avatar/Index.vue'
import {UserOutlined} from "@ant-design/icons-vue";

let searchUser = ref(null)
let searchKey = ref('846179345@qq.com')
let open = ref(false)
import userApi from "../../../api/methods/user.ts";

const search = () => {
  console.log(searchKey.value)
  userApi.searchOneByEmail({email: searchKey.value})
      .then(response => {
        if (response.data.code === '200') {
          searchUser.value = response.data.data
          console.log(searchUser.value)
        }
      })
}
</script>
<template>
  <div class="chatSearch">
    <div class="searchIcon"><i class="icon icon-sousuo"></i></div>
    <div class="inputBox" contenteditable="true" placeholder="搜索"></div>
    <div class="searchBtn" v-contextmenu:contextmenu="{trigger: 'click'}">+</div>

    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item @click="open = true">添加好友</v-contextmenu-item>
      <v-contextmenu-item>创建群聊</v-contextmenu-item>
    </v-contextmenu>

    <a-modal v-model:open="open" title="添加好友" ok-text="确认" cancel-text="取消">
      <div style="display: flex; width: 100%;height: 300px; flex-direction: column">
        <div style="display: flex; height: 30px">
          <input placeholder="输入邮箱" style="flex: 1;border-radius: 5px" v-model="searchKey"/>
          <div style="padding: 4px;margin-left: 4px; cursor: pointer" @click="search">搜索</div>
        </div>
        <div class="friendList">
          <div v-if="searchUser != null" class="friendItem">
            <a-avatar shape="square" :size="40">
              <template #icon>
                <UserOutlined/>
              </template>
            </a-avatar>
            <span style="padding: 10px;display: block; flex: 1">{{ searchUser.userName }}</span>
            <span class="addBtn">+</span>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<style scoped>
.addBtn {
  padding: 10px;
  display: block
}

.addBtn:hover {
  color: rgb(87, 148, 247);
}

.friendItem {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 5px
}

.friendItem:hover {
  cursor: pointer;
  background-color: rgb(204, 204, 204);
}

.friendList {
  height: calc(100% - 30px);
  width: 100%;
  overflow-y: auto;
  margin-top: 4px
}

.chatSearch {
  display: flex;
  background: rgb(247, 247, 247);
  height: 54px;
  -webkit-app-region: drag;
  box-sizing: border-box;
  padding-top: 23px;
  padding-left: 12px;
  padding-right: 12px;
  position: relative;
  border-right: 1px solid rgb(214, 214, 214);
}

.searchIcon {
  position: absolute;
  left: 13px;
  top: 24px;
  width: 23px;
  text-align: center;
  color: #666;

  i {
    font-size: 10px;
  }
}

.inputBox {
  -webkit-app-region: no-drag;
  flex: 1;
  margin-right: 8px;
  height: 23px;
  line-height: 22px;
  background: rgb(226, 226, 226);
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 3px;
  outline: none;
  padding-left: 23px;
  font-size: 12px;
  padding-right: 6px;
  font-family: "Microsoft Yahei", -apple-system, Ubuntu, sans-serif;

  &:focus {
    background: #fff;
  }

  /* 输入框为空时显示 placeholder */

  &:empty:before {
    content: attr(placeholder);
    color: #888;
  }

  /* 输入框获取焦点时移除 placeholder */

  &:focus:before {
    content: none;
  }
}

.searchBtn {
  -webkit-app-region: no-drag;
  width: 24px;
  height: 23px;
  background: rgb(226, 226, 226);
  font-size: 18px;
  text-align: center;
  line-height: 22px;
  border-radius: 3px;
  color: #888;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background: rgb(209, 209, 209);
  }
}
</style>
