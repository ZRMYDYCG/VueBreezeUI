export interface EmptyProps {
  /*empty 组件的图像地址*/
  image: string
  /*empty 组件的图像尺寸（宽度）*/
  imageSize: number
  /*empty 组件的描述信息*/
  description: string
}

export interface EmptyEmits {}

/**
 * slots:
 * default: 作为底部内容的内容
 * image: 作为图像的内容
 * description: 作为描述的内容
 * */
