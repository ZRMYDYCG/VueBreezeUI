<script setup lang="ts">
import { BreDrawer } from '../../../../components'
import { ref } from 'vue'
import { BreButton } from '../../../../components'

const visible = ref(false)
</script>

<template>
  <BreDrawer v-model="visible" title="设置面板" direction="rtl" :size="400">
    <template #title>
      <h2>自定义标题</h2>
    </template>

    <form class="settings-form">
      <!-- 表单内容 -->
    </form>
  </BreDrawer>

  <BreButton @click="visible = true">打开设置面板</BreButton>
</template>

<style scoped lang="scss"></style>
