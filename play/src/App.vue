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
import YqIcon from '@yq-design/components/icon/src/icon.vue'
</script>

<template>
  <YqAvatar shape="square" size="large" icon="AddCircle"> </YqAvatar>

  <YqIcon :size="15" color="#1976D2">
    <component :is="'Plus'"></component>
  </YqIcon>
</template>

<style scoped lang="scss"></style>
