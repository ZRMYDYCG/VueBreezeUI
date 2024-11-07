<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { Component, VNode } from 'vue'
import type { IPropsContainer } from './layout'

defineOptions({
  name: 'YqContainer'
})

const props = defineProps<IPropsContainer>()
const slots = useSlots()

const isVertical = computed(() => {
  if (props.direction === 'vertical') return true
  if (props.direction === 'horizontal') return false

  // 如果存在默认插槽，检查其中是否有header或footer
  const vNodes: VNode[] = slots?.default ? slots.default() : []

  // 有header或者footer的话，就垂直布局
  return vNodes.some((vNode) => {
    const tag = (vNode.type as Component).name
    return tag === 'YqHeader' || tag === 'YqFooter'
  })
})
</script>

<template>
  <section :class="['yq-container', { vertical: isVertical }]">
    <slot></slot>
  </section>
</template>

<style scoped></style>
