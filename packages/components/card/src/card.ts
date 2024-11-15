import type { CSSProperties } from 'vue'

export interface ICardProps {
  /*卡片宽度*/
  width?: number | string
  /*卡片是否有边框*/
  border?: boolean
  /*卡片的尺寸*/
  size?: 'small' | 'medium' | 'large'
  /*卡片阴影显示时机*/
  shadow?: 'hover' | 'always' | 'never'
  /*是否添加卡片内容正在加载中的一个状态*/
  loading?: boolean
  /*卡片标题或者自定义DOM*/
  header?: string
  /*卡片底部内容或者自定义DOM*/
  footer?: string
  /*卡片右上角的操作*/
  extra?: string
  /*标题区域自定义样式*/
  headerStyle?: CSSProperties
  /*卡片内容区域自定义样式*/
  bodyStyle?: CSSProperties
  /*底部区域自定义样式*/
  footerStyle?: CSSProperties
  /*卡片的背景色*/
  backgroundColor?: string
}
