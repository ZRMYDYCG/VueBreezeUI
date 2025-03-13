<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { LinkProps } from './interface.ts'
import { BreIcon } from '../Icon'

const props = withDefaults(defineProps<LinkProps>(), {
  type: 'default',
  underline: true,
  disabled: false,
  href: '#',
  target: '_self',
  icon: ''
})

const emit = defineEmits(['click'])
const slots = useSlots()

const handleClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault()
    event.stopPropagation()
  } else {
    emit('click', event)
  }
}

const hasIcon = computed(() => props.icon || slots.icon)
</script>

<template>
  <a
    :class="[
      'bre-link',
      `bre-link--${type}`,
      { 'is-underline': underline, 'is-disabled': disabled }
    ]"
    :href="disabled ? undefined : href"
    :target="disabled ? undefined : target"
    @click="handleClick"
  >
    <span v-if="hasIcon" class="bre-link__icon">
      <slot name="icon">
        <BreIcon :icon="icon" />
      </slot>
    </span>
    <span class="bre-link__content">
      <slot />
    </span>
  </a>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
