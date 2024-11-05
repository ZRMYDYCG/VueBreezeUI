<script setup lang="ts">
import { ref } from 'vue'
import { IUploadEmits, uploadRawFile, IUploadProps } from './upload'

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
      props.onStart(rawFile)
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
    if (!res) return props.onRemove(file) // 停止上传
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
