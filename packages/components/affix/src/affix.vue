<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { computed, ref } from 'vue'
import type { IAffixProps } from './affix'

/**
 * @change 固钉状态改变时触发的事件
 * @scroll 滚动时触发的事件
 * */
const emits = defineEmits(['change', 'scroll'])
const props = defineProps<IAffixProps>()

const fixed = ref(false)

const rootStyle = computed<CSSProperties>(() => {
  return {
    height: '100px',
    width: '100px'
  }
})

defineOptions({
  name: 'YqAffix'
})
</script>

<template>
  <div ref="rootRef" class="yq-affix" :style="rootStyle">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
