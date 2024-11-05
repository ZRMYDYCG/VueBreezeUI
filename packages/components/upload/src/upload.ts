export interface IRequestOptions {
  uid: number
  uploadUrl: string
  selectedFile: string
  fileName: string
  onSuccess: (uid: number, res: string) => void
  onError: (uid: number, err: string) => void
  onProgress: (uid: number, progress: number) => void
}
