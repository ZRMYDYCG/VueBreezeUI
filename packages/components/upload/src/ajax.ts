import type { uploadProgressEvent } from './upload'
import type { RequestOptions } from './upload-content'

export function httpRequest(options: RequestOptions) {
  const xhr = new XMLHttpRequest()
  const action = options.action

  xhr.open(options.methods, action, true)
  xhr.upload.addEventListener('progress', function (event: ProgressEvent) {
    const progressEvents = event as uploadProgressEvent
    progressEvents.percentage = event.total > 0 ? (event.loaded / event.total) * 100 : 0
    options.onProgress(progressEvents) // 上传进度
  })

  const headers = options.headers || {}
  if (headers) {
    for (const [key, value] of Object.entries(options.headers)) {
      xhr.setRequestHeader(key, value)
    }
  }

  const formData = new FormData()
  if (options.data) {
    for (const [key, value] of Object.entries(options.data)) {
      formData.append(key, value)
    }
  }
  formData.append(options.name, options.file)

  xhr.onload = function () {
    options.onSuccess(xhr.response)
  }

  xhr.addEventListener('error', (e) => {
    options.onError(e)
  })

  xhr.send(formData)

  return xhr
}
