<script setup lang="ts">
import BreMessage from '../../../../components/Message/message.ts'
import { BreButton, BreButtonGroup } from '../../../../components'
</script>

<template>
  <BreButtonGroup>
    <BreButton @click="BreMessage.success('这是一条成功消息')">消息提示</BreButton>
    <BreButton @click="BreMessage.error('这是一条成功消息')">消息提示</BreButton>
    <BreButton @click="BreMessage.warning('这是一条成功消息')">消息提示</BreButton>
    <BreButton @click="BreMessage.info('这是一条成功消息')">消息提示</BreButton>
  </BreButtonGroup>
  <BreButton @click="BreMessage({ message: '自定义消息', type: 'success', showClose: true })"
    >点点我</BreButton
  >
</template>

<style scoped lang="scss"></style>
