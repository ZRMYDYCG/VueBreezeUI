<script lang="ts" setup>
import { computed } from 'vue'
import { IUploadProps } from './upload'
import uploadContent from './upload-content.vue'

const props = defineProps<IUploadProps>()

const uploadContentProps = computed(() => {
  return {
    ...props,
    onStart: (file) => {},
    onRemove: (file) => {},
    onError: (err) => {},
    onSuccess: (res) => {}
  }
})
defineOptions({
  name: 'YqUpload'
})
</script>

<template>
  <uploadContent v-bind="uploadContentProps">
    <slot></slot>
  </uploadContent>
</template>

<style scoped></style>
