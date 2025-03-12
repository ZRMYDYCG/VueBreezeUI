<script setup lang="ts">
import { computed, type StyleValue } from 'vue'
import type { BadgeProps } from './interface.ts'

const props = withDefaults(defineProps<BadgeProps>(), {
  value: '',
  max: 99,
  isDot: false,
  hidden: false,
  type: 'danger',
  showZero: false,
  offset: () => [0, 0],
  badgeStyle: () => ({}),
  badgeClass: ''
})

const shouldShow = computed(() => {
  if (props.hidden) return false
  if (props.isDot) return true
  if (typeof props.value === 'number' && props.value === 0) return props.showZero
  return !!props.value
})

const content = computed(() => {
  if (props.isDot) return ''

  if (typeof props.value === 'number') {
    if (props.value > props.max) return `${props.max}+`
    return props.value.toString()
  }

  return props.value
})

const badgeStyle = computed(() => {
  const style: StyleValue = {
    backgroundColor: props.color || '',
    transform: `translate(${props.offset[0]}px, ${props.offset[1]}px)`
  }
  return Object.assign(style, props.badgeStyle)
})
</script>

<template>
  <div class="bre-badge">
    <slot />
    <transition name="bre-badge">
      <sup
        v-if="shouldShow"
        class="bre-badge__content"
        :class="[
          badgeClass,
          type,
          {
            'is-dot': isDot,
            'is-fixed': $slots.default,
            'is-number': typeof value === 'number' && !isDot
          }
        ]"
        :style="badgeStyle"
      >
        <slot v-if="$slots.content" name="content" :value="value" />
        <template v-else>{{ content }}</template>
      </sup>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
