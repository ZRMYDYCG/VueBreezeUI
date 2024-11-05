<script lang="ts" setup>
import uploadContent from './upload-content.vue'

defineOptions({
  name: 'YqUpload'
})
</script>

<template>
  <uploadContent>
    <slot></slot>
  </uploadContent>
  // 文件列表 // 文件预览
</template>

<style scoped></style>
