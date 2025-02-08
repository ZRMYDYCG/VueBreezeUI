<script setup lang="ts">
import {provide, reactive, toRef} from "vue"
import type { ButtonGroupProps } from "./interface.ts"
import { BUTTON_GROUP_CTX_KEY } from "./const.ts"

defineOptions({
  name: "BreButtonGroup",
})

const props = defineProps<ButtonGroupProps>()

provide(BUTTON_GROUP_CTX_KEY, reactive({
  size: toRef(props, "size"),
  type: toRef(props, "type"),
  disabled: toRef(props, "disabled"),
}))
</script>

<template>
  <div class="bre-button-group">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>