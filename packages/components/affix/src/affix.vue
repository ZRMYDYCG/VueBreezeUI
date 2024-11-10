<script setup lang="ts">
import { ref, nextTick } from 'vue'
import type { IAffixProps } from './affix'
import { useElementBounding } from '@vueuse/core'

const props = defineProps<IAffixProps>()

const root = ref<HTMLDivElement>()
const fixed = ref(false)

const {
  height: rootHeight,
  width: rootWidth,
  top: roothTop,
  bottom: rootBottom
} = useElementBounding(root)

nextTick(() => {
  console.log(rootHeight.value, rootWidth.value, roothTop.value, rootBottom.value)
})
</script>

<template>
  <div ref="root" class="yq-affix">
    <div :class="['yq-affix-target', { 'yq-affix--fixed': fixed }]">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.yq-affix--fixed {
  position: fixed;
}
</style>
