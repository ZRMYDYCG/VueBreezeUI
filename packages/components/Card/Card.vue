<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CardProps } from './interface.ts'

defineOptions({
  name: 'BreCard'
})

const isHovered = ref(false)

const handleMouseEnter = () => {
  if (props.shadow === 'hover') {
    isHovered.value = true
  }
}

const handleMouseLeave = () => {
  if (props.shadow === 'hover') {
    isHovered.value = false
  }
}

const props = withDefaults(defineProps<CardProps>(), {
  header: '',
  footer: '',
  bodyStyle: () => ({}),
  bodyClass: '',
  shadow: 'always'
})

const cardClass = computed(() => [
  'bre-card',
  `shadow-${props.shadow}`,
  { 'is-hovered': isHovered.value }
])
</script>

<template>
  <div :class="cardClass" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <!-- Header Section -->
    <div v-if="header || $slots.header" class="bre-card__header">
      <slot name="header">
        {{ header }}
      </slot>
    </div>

    <!-- Body Section -->
    <div class="bre-card__body" :class="bodyClass" :style="bodyStyle">
      <slot />
    </div>

    <!-- Footer Section -->
    <div v-if="footer || $slots.footer" class="bre-card__footer">
      <slot name="footer">
        {{ footer }}
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
@import './style.scss';
</style>
