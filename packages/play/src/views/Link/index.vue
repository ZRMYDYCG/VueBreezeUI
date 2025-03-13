<script setup lang="ts">
import { ref } from 'vue'
import { BreLink, BreIcon } from '../../../../components'

const clickCount = ref(0)
const handleClick = (event: MouseEvent) => {
  console.log('Link clicked', event)
  clickCount.value++
}
</script>

<template>
  <!-- 基本用法 -->
  <div class="demo-block">
    <h3>基础链接</h3>
    <BreLink>默认链接</BreLink>
    <BreLink type="primary">主要链接</BreLink>
    <BreLink type="success" :underline="false">无下划线成功链接</BreLink>
  </div>

  <!-- 禁用状态 -->
  <div class="demo-block">
    <h3>禁用状态</h3>
    <BreLink disabled :underline="false">禁用链接</BreLink>
    <BreLink type="danger" :underline="false" disabled href="/danger">危险禁用</BreLink>
  </div>

  <!-- 图标使用 -->
  <div class="demo-block">
    <h3>图标组合</h3>
    <!-- 使用 prop 传递图标组件 -->
    <BreLink type="warning" icon="camera-retro"> 用户资料 </BreLink>

    <!-- 使用图标插槽 -->
    <BreLink type="info">
      <template #icon>
        <BreIcon icon="camera-retro"></BreIcon>
      </template>
      外部链接
    </BreLink>
  </div>

  <!-- 链接行为 -->
  <div class="demo-block">
    <h3>链接行为</h3>
    <!-- 新窗口打开 -->
    <BreLink href="https://example.com" target="_blank" type="success"> 新窗口打开 </BreLink>

    <!-- 事件处理 -->
    <BreLink type="primary" @click="handleClick"> 点击计数 ({{ clickCount }}) </BreLink>
  </div>

  <!-- 复杂组合 -->
  <div class="demo-block">
    <h3>复杂组合</h3>
    <BreLink type="danger" :underline="false" class="custom-link" href="/dashboard" target="_self">
      <template #icon>
        <BreIcon icon="user"></BreIcon>
      </template>
      带图标的自定义链接
    </BreLink>
  </div>
</template>

<style lang="scss">
.demo-block {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #eee;

  h3 {
    color: #666;
    margin-bottom: 10px;
  }

  .bre-link {
    margin-right: 15px;
  }

  .custom-icon {
    color: #f06;
    margin-right: 5px;
  }

  .custom-link {
    font-weight: bold;
    font-size: 1.1em;
  }
}
</style>
