<script setup lang="ts">
interface uploadFile {
  uid?: number
  name?: string
  url?: string
  percentage?: number
  raw?: File
  size?: number
  status?: string
}

type uploadFiles = uploadFile[]

interface IUploadProps {
  fileList: uploadFiles
  action: string
  multiple: boolean
  name: string
  method: string
  headers: object
}

const props = withDefaults(defineProps<IUploadProps>(), {
  fileList: [] as any,
  action: '',
  multiple: false,
  name: 'file',
  method: 'post',
  headers: {} as any
})
</script>

<template>
  <div>Upload</div>
</template>

<style scoped></style>
