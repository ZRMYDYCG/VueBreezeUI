<!--
 * @Author: ZRMYDYCG
 * @Date: 2024-11
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-11
 * @Description: 
-->
<script setup lang="ts">
import '@yq-design/theme-chalk/index.scss'
import YqAvatar from '@yq-design/components/avatar/src/avatar.vue'
import { AddCircle } from '@vicons/ionicons5'
</script>

<template>
  <YqAvatar shape="square" size="large">
    <template #icon>
      <AddCircle></AddCircle>
    </template>
  </YqAvatar>
</template>

<style scoped lang="scss"></style>
