export interface IAvatarProps {
  /*头像的背景颜色*/
  color?: string
  /*头像的形状*/
  shape?: 'circle' | 'square'
  /*设置头像的大小*/
  size?: 'large' | 'medium' | 'small' | number
  /*图片类头像的地址*/
  src?: string
  /*图片显示失败的替代文本*/
  alt?: string
  /*图标类头像的图标类型*/
  icon?: string
  /*跳转的外部链接*/
  href?: string
  /*跳转模式*/
  target?: '_blank' | 'self'
}
