<script setup lang="ts">
import { ref } from 'vue'
import { BreBadge, BreButton, BreIcon } from '../../../../components'

const count = ref(2)
</script>

<template>
  <div class="badge-container w-full flex justify-center items-center h-full">
    <BreBadge value="new" type="success" :offset="[30, -10]">
      <template #content>
        <BreIcon icon="fa-search" />
        <span>新消息</span>
      </template>
      <BreButton>消息</BreButton>
    </BreBadge>
    <BreBadge :is-dot="true" type="warning">
      <BreButton type="primary" round>点赞</BreButton>
    </BreBadge>

    <BreBadge :value="count" :show-zero="true" :offset="[20, -10]">
      <template #content="{ value }">
        <span class="custom-content">{{ value }}条</span>
      </template>
      <BreButton @click="count--">按钮</BreButton>
    </BreBadge>
  </div>
</template>

<style scoped lang="scss"></style>
