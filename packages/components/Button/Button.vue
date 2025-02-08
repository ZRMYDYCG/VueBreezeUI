<script setup lang="ts">
import { ref } from "vue"
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./interface.ts"
import { throttle } from "lodash-es";

defineOptions({
  name: "bre-button"
})

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 300,
})

const emits = defineEmits<ButtonEmits>()

const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()

const handleBtnClick = (e: MouseEvent) => {
  emits("click", e)
}

const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration)

defineExpose<ButtonInstance>({
  ref: _ref
})
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
    @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.scss";
</style>