<script setup lang="ts">
import { ref } from 'vue'
import { getRandomUid } from '@yq-design/utils'
import type { IUploadProps, IUserFile, IUploadFile, IRequestOptions } from './upload'

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

const inputRef = ref<HTMLInputElement>()
const currentFileList = ref<IUploadFile[]>(initFileList(props.fileList))

/*处理文件上传成功*/
const handleSuccess = (uid: number, res: string) => {
  alert('文件上传成功')
  const index = findIndexByUid(uid)
  currentFileList.value[index].status = 'success'
  emits('handleSuccess', res, currentFileList.value)
}

/*处理文件上传失败*/

/*文件处于上传过程中*/

/*获取某文件对应的索引*/
function findIndexByUid(uid: number) {
  return currentFileList.value.findIndex((file) => uid === file.uid)
}

/*上传文件列表*/
function uploadAction(file: File) {
  const fileName = file.name
  if (!fileName) {
    alert('文件上传失败, 请重新选择文件')
    return
  }

  const uid = getRandomUid()
  currentFileList.value.push({
    name: fileName,
    uid,
    status: 'uploading',
    file
  } as IUploadFile)

  const fileReaderOption: IRequestOptions = {
    uploadUrl: props.url,
    selectedFile: file,
    fileName,
    uid,
    onSuccess: handleSuccess
    // onError: () => {},
    // onProgress: () => {}
  }
}

/*初始化文件列表*/
function initFileList(list: IUserFile[]) {
  return list.map((item: IUserFile) => {
    return {
      ...item,
      uid: getRandomUid(),
      status: 'success'
    } as IUploadFile
  })
}

/*触发文件上传事件*/
function handleUpload() {
  inputRef.value?.click()
}

/*文件上传之前*/
function handleBeforeUpload(file: File) {
  emits('handleBeforeUpload', file)
  if (props.size && file.size > props.size) {
    alert('文件大小超出限制')
    return false
  }
  return true
}

/* 用户重新（开始）选择文件 */
function handleInputChange(event: InputEvent) {
  const target = event.target as HTMLInputElement // 断言获取文件列表
  const files = [...target.files]
  if (!files.length) return
  files.forEach((item: File) => {
    /*校验每一个文件的合理性*/
    const valid = handleBeforeUpload(item)
    if (item && valid) {
      // 上传文件
      uploadAction(item)
    }
  })
}
</script>

<template>
  <div class="yq-upload">
    <!--  MDN: Input 输入框 <https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input>  -->
    <input
      ref="inputRef"
      type="file"
      :accept="accept"
      :multiple="multiple"
      @change="handleInputChange"
    />
    <div @click="handleUpload">上传文件</div>
  </div>
</template>

<style scoped></style>
