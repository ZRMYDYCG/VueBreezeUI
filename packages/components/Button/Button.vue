<script setup lang="ts">
import { ref } from "vue"
import type { ButtonProps } from "./interface.ts"

defineOptions({
  name: "bre-button"
})

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
})

const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()
</script>

<template>
  <component
    :is="tag"
    ref="_ref"
    class="bre-button"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled  || loading ? true : void 0"
    :class="{
      [`bre-button--${size}`]: size,
      [`bre-button--${type}`]: type,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-loading': loading,
      'is-disabled': disabled,
    }"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.scss";
</style>