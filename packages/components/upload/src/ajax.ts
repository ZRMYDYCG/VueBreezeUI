import type { IRequestOptions } from './upload'

/*MDN:XMLHttpRequest <https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest> */
export const uploadRequest = (options: IRequestOptions) => {
  const xhr = new XMLHttpRequest()
  const formData = new FormData()
  formData.append('file', options.selectedFile)
  xhr.open('POST', options.uploadUrl, true)
  xhr.upload.onprogress = (event: ProgressEvent) => {
    if (event.lengthComputable) {
      const uploadProgress = (event.loaded / event.total) * 100
      options.onProgress(options.uid, uploadProgress)
    }
  }
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText)
      if (response.error || response.err) {
        options.onError(options.uid, response)
      } else {
        options.onSuccess(options.uid, response)
      }
    }
  }
  xhr.onerror = () => {
    options.onError(options.uid, '上传失败')
  }

  xhr.send(formData)

  // 提供abort方法, 用于取消上传（https://github.com/user-attachments/assets/b955b833-5263-4dbb-a7b6-c852601f2b9d）
  return {
    abort: () => xhr.abort()
  }
}
