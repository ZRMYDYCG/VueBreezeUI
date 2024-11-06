<script setup lang="ts">
import type { IUploadProps, IUploadEmits } from './upload'

const props = withDefaults(defineProps<IUploadProps>(), {
  accept: '*',
  size: 3 * 1024 * 1024,
  multiple: true,
  shape: 'default',
  limit: 0,
  url: '',
  fileList: () => [],
  desc: '',
  avatars: false,
  draggable: false
})
const emits = defineEmits<IUploadEmits>()
</script>

<template>
  <div class="yq-upload">YqUpload</div>
</template>

<style scoped></style>
