export type IUploadStatus = 'ready' | 'uploading' | 'success' | 'error' | 'pause'

export interface IRequestOptions {
  uid: number
  uploadUrl: string
  selectedFile: File
  fileName: string
  onSuccess: (uid: number, res: string) => void
  onError: (uid: number, err: string) => void
  onProgress: (uid: number, progress: number) => void
}

export interface IUserFile {
  name: string
  url: string
}

export interface IUploadFile {
  uid: number
  name: string
  raw: File
  size?: number
  progress?: number
  url?: string
  status: IUploadStatus
  response?: any
}

export interface IUploadProps {
  /*接受文件类型*/
  accept?: string
  /*文件大小限制*/
  size: number
  /*是否支持多文件上传*/
  multiple?: boolean
  /*文件上传数量限制*/
  limit?: number
  /*图片列表中预览图片的形态*/
  shape?: 'default' | 'circle'
  /*文件上传的地址*/
  url?: string
  /*文件列表*/
  fileList: IUserFile[]
  /*文件上传提示*/
  desc?: string
  /*是否是进行头像上传*/
  avatar?: boolean
  /*是否采用拖拽上传交互*/
  draggable?: boolean
}
