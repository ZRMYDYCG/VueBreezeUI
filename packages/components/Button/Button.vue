<script setup lang="ts">
import {computed, ref} from "vue"
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./interface.ts"
import { throttle } from "lodash-es";
import BreIcon from "../Icon/Icon.vue"

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

const iconStyle = computed(() => {
  return {
    marginRight: slots.default ? "6px" : "0px"
  }
})

const handleBtnClick = (e: MouseEvent) => {
  emits("click", e)
}

const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration, {
  trailing: false
})

defineExpose<ButtonInstance>({
  ref: _ref
})
</script>

<template>
  <component
    :is="tag"
    ref="_ref"
    :autofocus="autoFocus"
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
    <template v-if="loading">
      <slot name="loading">
        <BreIcon size="1x" class="loading-icon" icon="loadingIcon ?? 'spinner'" :style="iconStyle" spin />
      </slot>
    </template>
    <BreIcon v-if="icon && !loading" :icon="icon" size="1x" :style="iconStyle"></BreIcon>
    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.scss";
</style>