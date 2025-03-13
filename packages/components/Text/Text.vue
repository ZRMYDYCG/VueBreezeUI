<script setup lang="ts">
import { computed } from 'vue'
import type { TextProps } from './interface.ts'

const props = defineProps<TextProps>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const classList = computed(() => [
  'bre-text',
  `bre-text--${props.type || 'primary'}`,
  `bre-text--${props.size || 'default'}`,
  {
    'bre-text--truncated': props.truncated && !props.lineClamp,
    'bre-text--line-clamp': !!props.lineClamp
  }
])

const lineClampStyle = computed(() => ({
  '-webkit-line-clamp': props.lineClamp || ''
}))
</script>

<template>
  <component
    :is="tag || 'span'"
    :class="classList"
    :style="lineClampStyle"
    @click="emit('click', $event)"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
