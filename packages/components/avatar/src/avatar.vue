<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import type { IAvatarProps } from './avatar'
import { useSlotsExist } from '@yq-design/hooks'

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

const slotsExist = useSlotsExist(['default'])

const avatarStyle = computed<CSSProperties>(() => {
  // 处理用户 size 传入数字
  if (typeof props.size === 'number') {
    if (props.icon) {
      return {
        width: `${props.size}px`,
        height: `${props.size}px`,
        lineHeight: `${props.size}px`,
        fontSize: '18px'
      }
      // 处理 Avatar 响应式
    } else if (props.src) {
      return {
        width: `${props.size}px`,
        height: `${props.size}px`,
        lineHeight: `${props.size}px`,
        backgroundColor: props.color
      }
    } else {
      return {
        width: `${props.size}px`,
        height: `${props.size}px`,
        lineHeight: `${props.size}px`,
        fontSize: `${props.size / 2}px`,
        backgroundColor: props.color
      }
    }
  } else if (typeof props.size === 'object') {
    return {}
    // 默认模式下
  } else {
    return {
      backgroundColor: props.color
    }
  }
})

const showStr = computed(() => {
  if (!props.src && !props.icon) {
    return slotsExist.default
  }
  return false
})

const showIcon = computed(() => {
  if (!props.src) {
    return props.icon
  }
  return false
})

// const strStyle =
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
    <component v-if="showIcon" :is="icon" />
    <span v-else-if="showStr">
      <slot></slot>
    </span>
  </component>
</template>

<style lang="scss" scoped></style>
