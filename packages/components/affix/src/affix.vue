<script setup lang="ts">
/**
 * @change 固钉状态改变时触发的事件
 * @scroll 滚动时触发的事件
 * */
defineEmits(['change', 'scroll'])

defineOptions({
  name: 'YqAffix'
})
</script>

<template>
  <div class="yq-affix">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss"></style>
