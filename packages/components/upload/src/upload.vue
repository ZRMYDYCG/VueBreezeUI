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

type uploadRawFile = File & { uid: number }

type uploadProgressEvent = ProgressEvent & { percentage: number }

interface IUploadEmits {
  onPreview: (file: uploadFile) => void
  beforeUpload: (file: uploadRawFile) => Promise<boolean> | boolean
  onChange: (file: uploadFile) => void
  beforeRemove: (file: uploadFile, uploadFiles: uploadFiles) => void
  onRemove: (file: uploadFile, uploadFiles: uploadFiles) => void
  onProgress: (file: uploadProgressEvent, uploadFile: uploadFile, uploadFiles: uploadFiles) => void
  onSuccess: (
    response: uploadProgressEvent,
    uploadFile: uploadFile,
    uploadFiles: uploadFiles
  ) => void
  onError: (error: any, uploadFile: uploadFile, uploadFiles: uploadFiles) => void
}

const props = withDefaults(defineProps<IUploadProps>(), {
  fileList: [] as any,
  action: '',
  multiple: false,
  name: 'file',
  method: 'post',
  headers: {} as any
})
const emits = defineEmits<IUploadEmits>()
</script>

<template>
  <div>Upload</div>
</template>

<style scoped></style>
