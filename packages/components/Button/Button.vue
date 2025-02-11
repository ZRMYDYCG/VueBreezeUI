<script setup lang="ts">
import { throttle } from "lodash-es"
import BreIcon from "../Icon/Icon.vue"
import {computed, ref, inject} from "vue"
import { BUTTON_GROUP_CTX_KEY } from "./const.ts"
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./interface.ts"

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
const ctx = inject("BUTTON_GROUP_CTX_KEY", void 0)

const size = computed(() => ctx?.size ?? props?.size ?? "")
const type = computed(() => ctx?.type ?? props?.type ?? "default")
const disabled = computed(() => ctx?.disabled || props?.disabled || false)

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
  ref: _ref,
  disabled,
  size,
  type
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

<style lang="scss" scoped>
@import "./style.scss";
</style>