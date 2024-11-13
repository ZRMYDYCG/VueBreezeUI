<script setup lang="ts">
import type { IAvatarProps } from './avatar'
import YqIcon from '../../icon/src/icon.vue'

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
    <slot name="icon">
      <YqIcon> </YqIcon>
    </slot>
    <span class="avatar-text"></span>
  </component>
</template>

<style lang="scss" scoped></style>
