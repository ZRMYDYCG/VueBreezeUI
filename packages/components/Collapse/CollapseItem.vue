<script setup lang="ts">
import { inject, computed } from "vue"
import type { CollapseItemProps } from "./interface.ts"
import { COLLAPSE_CTX_KEY } from "./const.ts"
import BreIcon from "../Icon/Icon.vue"

defineOptions({ name: "BreCollapseItem" })
const props = defineProps<CollapseItemProps>()
const ctx = inject(COLLAPSE_CTX_KEY, void 0)
const isActive = computed(() => ctx?.activeNames.value?.includes(props.name))

function handleClick() {
  if(props.disabled) return
  ctx?.handleItemClick(props.name)
}
</script>

<template>
  <div
      class="bre-collapse-item"
      :class="{
        'is-disabled': disabled
      }"
  >
    <div
      class="bre-collapse-item__header"
      :id="`item-header-${name}`"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive
      }"
      @click="handleClick"
    >
      <span class="bre-collapse-item__title">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <bre-icon icon="angle-right" class="header-angle" />
    </div>
    <div class="bre-collapse-item__wrapper" v-show="isActive">
      <div class="bre-collapse-item__content" :id="`item-content-${name}`">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>