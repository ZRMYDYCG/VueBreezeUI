<template>
  <div class="bre-button-group">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, computed } from 'vue'
import { BUTTON_GROUP_CTX_KEY } from './const.ts'
import type { ButtonGroupProps } from './interface'

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  size: 'default',
  type: 'default',
  disabled: false
})

const context = computed(() => ({
  size: props.size,
  type: props.type,
  disabled: props.disabled
}))

provide(BUTTON_GROUP_CTX_KEY, context.value)
</script>

<style lang="scss">
@import './style.scss';
</style>
