<script setup lang="ts">
import type { IAvatarProps } from './avatar'

withDefaults(defineProps<IAvatarProps>(), {
  color: 'rgba(0, 0, 0, 0.2)',
  size: 'medium',
  shape: 'circle',
  target: 'self'
})
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    class="yq-avatar"
    :class="[`avatar--${shape}`, `avatar--${size}`]"
  >
    <img v-if="src" :src="src" :alt="alt" class="image-item" />
    <span class="avatar-text"></span>
  </component>
</template>

<style lang="scss" scoped></style>
