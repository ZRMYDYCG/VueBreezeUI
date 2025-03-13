<template>
  <!-- 基础用法 -->
  <div class="demo-container">
    <BreText>默认文本样式</BreText>
  </div>

  <!-- 类型展示 -->
  <div class="demo-container">
    <BreText v-for="type in types" :key="type" :type="type" class="mr-16">
      {{ type.toUpperCase() }} 类型文本
    </BreText>
  </div>

  <!-- 尺寸展示 -->
  <div class="demo-container">
    <BreText v-for="size in sizes" :key="size" :size="size" class="mr-16">
      {{ size.toUpperCase() }} 尺寸文本
    </BreText>
  </div>

  <!-- 单行截断 -->
  <div class="demo-container w-[200px]">
    <BreText truncated> 这是一个非常非常长的单行文本内容，超出容器宽度时显示省略号 </BreText>
  </div>

  <!-- 多行截断 -->
  <div class="demo-container" style="width: 300px">
    <BreText :line-clamp="2">
      这是一个多行文本示例，当内容超过指定行数时会自动截断并显示省略号。
      第二行文本内容，第三行文本内容，第四行文本内容。
    </BreText>
  </div>

  <!-- 自定义标签 -->
  <div class="demo-container">
    <BreText tag="strong">加粗文本（使用 strong 标签）</BreText>
    <BreText tag="em" class="ml-16">强调文本（使用 em 标签）</BreText>
  </div>

  <!-- 点击事件 -->
  <div class="demo-container">
    <BreText type="danger" @click="handleClick" style="cursor: pointer">
      可点击文本（点击控制台查看输出）
    </BreText>
  </div>
</template>

<script setup lang="ts">
import { BreText } from '../../../../components'

const types = ['primary', 'success', 'warning', 'danger', 'info']
const sizes = ['small', 'default', 'large']

const handleClick = (event: MouseEvent) => {
  console.log('文本被点击', event)
}
</script>

<style lang="scss">
.demo-container {
  margin: 20px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;

  .mr-16 {
    margin-right: 16px;
  }

  .ml-16 {
    margin-left: 16px;
  }
}
</style>
