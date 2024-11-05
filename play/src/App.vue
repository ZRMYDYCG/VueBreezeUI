<script setup lang="ts">
import YqUpload from '@yq-design/components/upload/src/upload.vue'
import '@yq-design/theme-chalk/upload.scss'

const handleBeforeUpload = (file: any) => {
  console.log(file)
  return true
}
</script>

<template>
  <YqUpload multiple :before-upload="handleBeforeUpload">
    <button>选择</button>
  </YqUpload>
</template>

<style scoped></style>
