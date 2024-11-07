<script setup lang="ts">
import '@yq-design/theme-chalk/upload.scss'
import YqUpload from '@yq-design/components/upload/src/upload.vue'
</script>

<template>
  <YqUpload multiple url="http://localhost:3000/upload/single"></YqUpload>
</template>

<style scoped></style>
