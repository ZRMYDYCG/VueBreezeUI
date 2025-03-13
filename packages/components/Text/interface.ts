export interface TextProps {
  /*类型*/
  type: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  /*大小*/
  size: 'large' | 'default' | 'small'
  /*显示省略号*/
  truncated: boolean
  /*最大行数*/
  lineClamp: number
  /*自定义元素标签*/
  tag: string
}

/**
 * slots:
 * default: 默认内容
 * */
