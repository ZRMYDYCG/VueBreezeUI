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

<style lang="scss">
@use 'sass:map';

$colors: (
  primary: #409eff,
  success: #67c23a,
  warning: #e6a23c,
  danger: #f56c6c,
  info: #909399,
  default: #333
);

.bre-link {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;

  @each $type, $color in $colors {
    &--#{$type} {
      color: $color;

      &:hover {
        color: mix($color, #000, 80%);
      }
    }
  }

  &.is-underline:hover {
    text-decoration: underline;
  }

  &.is-disabled {
    color: map.get($colors, 'info');
    cursor: not-allowed;
    opacity: 0.6;
    text-decoration: none;
  }

  &__icon {
    display: inline-flex;
    margin-right: 0.3em;
  }

  &__content {
    display: inline-flex;
    align-items: center;
  }
}
</style>
