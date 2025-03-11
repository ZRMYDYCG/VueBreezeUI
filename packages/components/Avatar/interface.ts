export interface AvatarProps {
  /*设置 Avatar 的图标类型*/
  icon?: string
  /*Avatar 大小*/
  size?: string
  /*Avatar 形状*/
  shape?: 'circle' | 'square'
  /*Avatar 图片的源地址*/
  src?: string
  /*图片 Avatar 的原生 srcset 属性*/
  srcSet?: string
  /*图片 Avatar 的原生 alt 属性*/
  alt?: string
  /*当展示类型为图片的时候，设置图片如何适应容器*/
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
}

export interface AvatarEmits {
  /*图片加载失败时触发*/
  (e: 'error'): void
}
