export interface uploadFile {
  uid?: number
  name?: string
  url?: string
  percentage?: number
  raw?: File
  size?: number
  status?: string
}

export type uploadFiles = uploadFile[]

export interface IUploadProps {
  fileList: uploadFiles
  action: string
  multiple: boolean
  name: string
  accept: string
  method: string
  headers: object
  onStart: (rawFile: uploadRawFile) => void
  beforeUpload?: (file: File & { uid: number }) => Promise<boolean> | boolean
  onPreview: (file: uploadFile) => void
  onChange: (file: uploadFile) => void
  beforeRemove: (file: uploadFile, uploadFiles: uploadFiles) => void
  onRemove: (file: uploadFile, uploadFiles?: uploadFiles) => void
  onProgress: (file: uploadProgressEvent, uploadFile: uploadFile, uploadFiles: uploadFiles) => void
  onSuccess: (
    response: uploadProgressEvent,
    uploadFile: uploadFile,
    uploadFiles: uploadFiles
  ) => void
  onError: (error: any, uploadFile: uploadFile, uploadFiles: uploadFiles) => void
}

export type uploadRawFile = File & { uid: number }

export type uploadProgressEvent = ProgressEvent & { percentage: number }

export interface IUploadEmits {}
