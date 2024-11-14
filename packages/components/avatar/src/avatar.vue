<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import type { IAvatarProps } from './avatar'
// import { useSlotsExist, useEventListener } from '@yq-design/hooks'

const props = withDefaults(defineProps<IAvatarProps>(), {
  color: 'rgba(0, 0, 0, 0.2)',
  shape: 'circle',
  size: 'medium',
  src: undefined,
  fit: 'contain',
  alt: undefined,
  icon: undefined,
  href: undefined,
  target: '_self'
})

const avatarStyle = computed<CSSProperties>(() => {
  if (props.src) {
    return {}
  } else {
    return {
      backgroundColor: props.color
    }
  }
})

console.log(props)
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="src"
    :style="avatarStyle"
    class="yq-avatar"
    :class="[`yq-avatar--${shape}`, `yq-avatar--${size}`]"
  >
    <img
      v-if="src"
      class="yq-avatar__img"
      :src="src"
      :style="{
        objectFit: fit
      }"
      :alt="alt"
    />
    <component v-if="!src && icon" :is="icon" />
    <span v-else-if="!src && !icon">
      <slot></slot>
    </span>
  </component>
</template>

<style lang="scss" scoped></style>
