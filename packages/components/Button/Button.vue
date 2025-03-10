<template>
  <component
    :is="tag"
    ref="buttonRef"
    class="bre-button"
    :class="[
      type ? 'bre-button--' + type : '',
      size ? 'bre-button--' + size : '',
      {
        'is-disabled': disabled || loading,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    :disabled="disabled || loading"
    :autofocus="autoFocus"
    @click="handleClick"
  >
    <template v-if="loading">
      <BreIcon :icon="loadingIcon ? loadingIcon : 'refresh'" spin></BreIcon>
    </template>
    <BreIcon v-if="icon && !loading" :icon="icon"></BreIcon>
    <template v-if="!icon && $slots.icon">
      <slot name="icon" />
    </template>
    <span class="bre-button__content">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import { inject, computed, ref } from 'vue'
import { throttle } from 'lodash-es'
import { BUTTON_GROUP_CTX_KEY } from './const.ts'
import type { ButtonProps, ButtonEmits } from './interface'
import BreIcon from '../Icon/Icon.vue'

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  type: 'default',
  size: 'default',
  throttleDuration: 1000
})

const emit = defineEmits<ButtonEmits>()

const groupContext = inject(BUTTON_GROUP_CTX_KEY, null)

// 计算属性优先使用group context的值
const size = computed(() => (props.size !== 'default' ? props.size : groupContext?.size))
const type = computed(() => (props.type !== 'default' ? props.type : groupContext?.type))
const disabled = computed(() => props.disabled || groupContext?.disabled || false)

const buttonRef = ref<HTMLButtonElement>()

// 节流处理
const handleClick = (e: MouseEvent) => {
  if (disabled.value || props.loading) return

  if (props.useThrottle) {
    throttle(() => emit('click', e), props.throttleDuration)()
  } else {
    emit('click', e)
  }
}

defineExpose({
  buttonRef,
  disabled,
  size,
  type
})
</script>

<style lang="scss">
@import './style.scss';
</style>
