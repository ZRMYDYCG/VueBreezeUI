<script setup lang="ts">
import type { ICardProps } from './card'
import type { IAvatarProps } from '../../avatar/src/avatar'

const props = withDefaults(defineProps<ICardProps>(), {
  /*卡片宽度*/
  width: 'auto',
  /*卡片是否有边框*/
  border: false,
  /*卡片的尺寸*/
  size: 'medium',
  /*鼠标经过, 卡片是否浮动*/
  hoverSkip: false,
  /*是否添加卡片内容正在加载中的一个状态*/
  loading: false,
  /*卡片标题*/
  title: undefined,
  /*卡片右上角的操作*/
  extra: undefined,
  /*标题区域自定义样式*/
  headStyle: undefined,
  /*卡片内容区域自定义样式*/
  bodyStyle: undefined
})
</script>

<template>Card</template>

<style scoped></style>
