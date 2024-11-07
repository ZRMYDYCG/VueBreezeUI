<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import type { IPropsHeader } from './layout'

defineOptions({
  name: 'YqHeader'
})

const props = withDefaults(defineProps<IPropsHeader>(), {
  height: '60px'
})

const style = computed(() => (props.height ? { height: props.height } : {}) as CSSProperties)
</script>

<template>
  <header class="yq-header" :style="style">
    <slot></slot>
  </header>
</template>

<style scoped>
.yq-header {
  padding: 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 60px;
}
</style>
