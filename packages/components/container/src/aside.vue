<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import type { IPropsAside } from './layout'

defineOptions({
  name: 'YqAside'
})

const props = withDefaults(defineProps<IPropsAside>(), {
  width: '300px'
})

const style = computed(() => (props.width ? { width: props.width } : {}) as CSSProperties)
</script>

<template>
  <aside class="yq-aside" :style="style">
    <slot></slot>
  </aside>
</template>

<style scoped>
.yq-aside {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 300px;
}
</style>
