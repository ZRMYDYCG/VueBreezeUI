<script setup lang="ts">
import { BreCard } from '../../../../components'
</script>

<template>
  <BreCard header="默认标题" footer="底部内容" shadow="hover">
    <p>卡片主体内容</p>
  </BreCard>

  <BreCard>
    <template #header>
      <h2>自定义标题</h2>
    </template>

    <template #footer>
      <el-button>操作按钮</el-button>
    </template>

    <p>自定义内容区域</p>
  </BreCard>
</template>

<style lang="scss" scoped></style>
