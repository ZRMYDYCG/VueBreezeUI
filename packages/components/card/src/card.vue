<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import type { ICardProps } from './card'

const props = withDefaults(defineProps<ICardProps>(), {
  /*卡片宽度*/
  width: 'auto',
  /*卡片是否有边框*/
  border: false,
  /*卡片的尺寸*/
  size: 'medium',
  /*卡片阴影显示时机*/
  shadow: 'never',
  /*是否添加卡片内容正在加载中的一个状态*/
  loading: false,
  /*卡片右上角的操作*/
  extra: undefined,
  /*标题区域自定义样式*/
  headerStyle: undefined,
  /*卡片内容区域自定义样式*/
  bodyStyle: undefined,
  /*卡片底部内容自定义样式*/
  footerStyle: undefined,
  /*卡片标题或者自定义DOM*/
  header: undefined,
  /*卡片底部内容或者自定义DOM*/
  footer: undefined,
  /*卡片的背景色*/
  backgroundColor: '#ffffff'
})

const cardStyle = computed<CSSProperties>(() => {
  return {
    width: `${props.width}px`,
    backgroundColor: props.backgroundColor
  }
})
</script>

<template>
  <div
    class="yq-card"
    :style="cardStyle"
    :class="{
      'card-medium': props.size === 'medium',
      'card-small': props.size === 'small',
      'card-large': props.size === 'large',
      'card--border': props.border,
      'yq-card--hover': props.shadow === 'hover',
      'yq-card--always': props.shadow === 'always',
      'yq-card--never': props.shadow === 'never'
    }"
  >
    <div class="yq-card__header" v-if="$slots.header || header" :style="headerStyle">
      <slot name="header">{{ header }}</slot>
    </div>

    <div class="yq-card__body" :style="bodyStyle">
      <slot></slot>
    </div>

    <div class="yq-card__footer" v-if="$slots.footer || footer" :style="footerStyle">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<style scoped></style>
