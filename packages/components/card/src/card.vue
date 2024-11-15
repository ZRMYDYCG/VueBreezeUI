<script setup lang="ts">
import type { ICardProps } from './card'
import { computed } from 'vue'
import type { CSSProperties } from 'vue'

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

const cardStyle = computed<CSSProperties>(() => {
  return {
    width: `${props.width}px`
  }
})
</script>

<template>
  <div
    class="yq-card"
    :style="cardStyle"
    :class="{
      'card-medium': props.size === 'medium',
      'card--border': props.border
    }"
  >
    <div class="yq-card__header" v-if="$slots.header">
      <slot name="header"> </slot>
    </div>

    <div class="yq-card__body">
      <slot></slot>
    </div>

    <div class="yq-card__footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped></style>
