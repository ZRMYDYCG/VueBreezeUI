<script setup lang="ts">
import { ref, nextTick, watchEffect, watch } from 'vue'
import type { IAffixProps } from './affix'
import { useElementBounding, useWindowSize, useEventListener } from '@vueuse/core'

const props = defineProps<IAffixProps>()
const emits = defineEmits(['change', 'scroll'])

const root = ref<HTMLDivElement>()
const scrollContainer = ref<HTMLElement | Window>() // 滚动目标容器

const fixed = ref(false)
const scrollTop = ref(0)

const {
  height: rootHeight,
  width: rootWidth,
  top: roothTop,
  bottom: rootBottom,
  // update: 用于更新元素的边界信息
  update: updateRoot
} = useElementBounding(root, { windowScroll: false })
const { height: windowHeight } = useWindowSize()
useEventListener(scrollContainer, 'scroll', () => {
  updateRoot()
  emits('scroll', {
    scrollTop: scrollTop.value,
    fixed: fixed.value
  })
})

const update = () => {
  console.log('update')
}

nextTick(() => {
  console.log(
    rootHeight.value,
    rootWidth.value,
    roothTop.value,
    rootBottom.value,
    windowHeight.value
  )
})

watch(fixed, (value) => {
  emits('change', value)
})
watchEffect(update)
</script>

<template>
  <div ref="root" class="yq-affix">
    <div :class="['yq-affix-target', { 'yq-affix--fixed': fixed }]">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.yq-affix--fixed {
  position: fixed;
}
</style>
