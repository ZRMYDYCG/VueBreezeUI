<!--
 * @Author: ZRMYDYCG
 * @Date: 2024-11
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-11
 * @Description: 
-->
<script setup lang="ts">
import YqAvatar from '@yq-design/components/avatar/src/avatar.vue'
</script>

<template>
  <YqAvatar>
    <template #header>头部</template>
    <div><div>传入主体内容</div></div>
    <template #footer>
      <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="cat" />
      <div>Footer</div>
    </template>
  </YqAvatar>
</template>

<style scoped lang="scss"></style>
