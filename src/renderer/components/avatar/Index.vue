<template>
    <div class="avatar" :style="{width: size + 'px', height: size + 'px'}">
        <img :src="src" alt="avatar" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Props {
    /** 头像地址 */
    src?: string
    /** 图标尺寸 */
    size?: number
}

withDefaults(defineProps<Props>(), {
    src: 'https://cdn.vuetifyjs.com/images/john.jpg',
    size: 40,
})

const hasError = ref(false)
</script>

<style>
.avatar{
    position: relative;
    box-sizing: border-box;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    -webkit-user-drag: none;


    img {
        width: 100%;
        height: 100%;
        -webkit-user-drag: none;
    }
}
img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
}
</style>