<script setup lang="ts">
import { ref } from 'vue'

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
  accept: string
  method: string
  headers: object
  beforeUpload?: (file: File & { uid: number }) => Promise<boolean> | boolean
}

type uploadRawFile = File & { uid: number }

type uploadProgressEvent = ProgressEvent & { percentage: number }

interface IUploadEmits {
  onPreview: (file: uploadFile) => void
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
  accept: '',
  name: 'file',
  method: 'post',
  headers: {} as any
})
const emits = defineEmits<IUploadEmits>()

const inputRef = ref<HTMLInputElement>()

const handleChange = (event: Event) => {
  const files = (event.target as HTMLInputElement).files
  for (let i = 0; i < files.length; i++) {
    if (files) {
      const rawFile = files[i] as uploadRawFile
      rawFile.uid = genId()
      upload(rawFile)
    }
  }
}

const handleClick = () => {
  // 清除上一次操作的文件
  inputRef.value!.value = ''
  // 触发用户选择文件
  inputRef.value!.click()
}

let id = 0
const genId = () => id++

// 处理文件上传
const upload = async (file: uploadRawFile) => {
  // 文件上传之前文件清空
  inputRef.value!.value = ''
  // 文件上传之前的钩子函数, 看用户反应
  if (props.beforeUpload) {
    const res = await props.beforeUpload(file)
    if (!res) return // 停止上传
  }
}
</script>

<template>
  <div @click="handleClick" class="yq-upload">
    <slot></slot>
    <input
      type="file"
      :name="name"
      :accept="accept"
      :multiple="multiple"
      @change="handleChange"
      ref="inputRef"
    />
  </div>
</template>

<style scoped></style>
