<script setup lang="ts">
import { BreDrawer } from '../../../../components'
import { ref } from 'vue'
import { BreButton } from '../../../../components'

const visibleA = ref(false)
const visibleB = ref(false)
const visibleC = ref(false)
const visibleD = ref(false)
</script>

<template>
  <BreDrawer v-model="visibleA" title="设置面板A" direction="rtl" :size="400">
    <template #title>
      <h2>自定义标题</h2>
    </template>

    <form class="settings-form">
      <!-- 表单内容 -->
      <input type="text" placeholder="请输入姓名" />
    </form>

    <template #footer>
      <BreButton @click="visibleA = false">关闭</BreButton>
    </template>
  </BreDrawer>
  <BreButton @click="visibleA = true">打开设置面板A</BreButton>

  <BreDrawer v-model="visibleB" title="设置面板B" direction="ltr" :size="400">
    <template #title>
      <h2>自定义标题</h2>
    </template>

    <form class="settings-form">
      <!-- 表单内容 -->
      <input type="text" placeholder="请输入姓名" />
    </form>

    <template #footer>
      <BreButton @click="visibleB = false">关闭</BreButton>
    </template>
  </BreDrawer>
  <BreButton @click="visibleB = true">打开设置面板B</BreButton>

  <BreDrawer v-model="visibleC" title="设置面板C" direction="ttb" :size="400">
    <template #title>
      <h2>自定义标题</h2>
    </template>

    <form class="settings-form">
      <!-- 表单内容 -->
      <input type="text" placeholder="请输入姓名" />
    </form>

    <template #footer>
      <BreButton @click="visibleC = false">关闭</BreButton>
    </template>
  </BreDrawer>
  <BreButton @click="visibleC = true">打开设置面板C</BreButton>

  <BreDrawer v-model="visibleD" title="设置面板D" direction="btt" :size="400">
    <template #title>
      <h2>自定义标题</h2>
    </template>

    <form class="settings-form">
      <!-- 表单内容 -->
      <input type="text" placeholder="请输入姓名" />
    </form>

    <template #footer>
      <BreButton @click="visibleD = false">关闭</BreButton>
    </template>
  </BreDrawer>
  <BreButton @click="visibleD = true">打开设置面板D</BreButton>
</template>

<style scoped lang="scss"></style>
