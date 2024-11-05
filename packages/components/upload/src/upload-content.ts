export interface RequestOptions {
  methods: string
  file: File
  name: string
  action: string
  headers: Headers
  data: Record<string, any>
  onError: (error: any) => void
  onSuccess: (response: any) => void
  onProgress: (progressEvent: ProgressEvent) => void
}
