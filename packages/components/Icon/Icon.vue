<script setup lang="ts">
import type { IconProps } from './interface.ts'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'
import { computed } from 'vue'

defineOptions({
  name: 'BreIcon',
  inheritAttrs: false
})

const props = withDefaults(defineProps<IconProps>(), {})

const filterProps = computed(() => omit(props, ['type', 'color']))
const customStyle = computed(() => {
  return {
    // void 0 始终返回 undefined，是获取 undefined 的安全写法
    color: props.color ?? void 0
  }
})
</script>

<template>
  <i
    class="bre-icon"
    :class="{
      [`bre-icon--${type}`]: type
    }"
    :style="customStyle"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<style scoped>
@import './style.scss';
</style>
