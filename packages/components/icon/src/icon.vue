<!--
 * @Author: 一勺
 * @Date: 2024-11
 * @LastEditors: 一勺
 * @LastEditTime: 2024-11
 * @Description: 
-->
<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import type { IconProps } from './icon'

const props = defineProps<IconProps>()

const yqIconStyle = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}
  return {
    width: `${size}px`,
    height: `${size}px`,
    color: color
  }
})

defineOptions({
  name: 'YqIcon',
  inheritAttrs: false
})
</script>

<template>
  <div class="yq-icon" :style="yqIconStyle">
    <slot></slot>
  </div>
</template>

<style scoped></style>
