<script setup lang="ts">
import type { IUploadProps } from './upload'

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
const emits = defineEmits(['handleSuccess', 'handleDelete', 'handleError', 'handleBeforeUpload'])

/*文件上传之前*/
const handleBeforeUpload = (file: File) => {
  emits('handleBeforeUpload', file)
  if (props.size && file.size > props.size) {
    alert('文件大小超出限制')
    return false
  }
  return true
}
</script>

<template>
  <div class="yq-upload">
    <!--  MDN: Input 输入框 <https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input>  -->
    <input ref="inputRef" type="file" :accept="accept" :multiple="multiple" />
  </div>
</template>

<style scoped></style>
