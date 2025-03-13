import type { VNode } from 'vue'
import type { AlignItemsProperty } from 'csstype'

export interface SpaceProps {
  /*对齐的方式*/
  alignment: AlignItemsProperty
  /*className*/
  class: string | Array<string> | { [key: string]: boolean }
  /*排列的方向*/
  direction: 'vertical' | 'horizontal'
  /*给space-items的前缀*/
  prefixCls: string
  /*额外样式*/
  style: string | object
  /*间隔符*/
  spacer: string | number | VNode
  /*间隔大小*/
  size: 'default' | 'small' | 'large' | number | [number, number]
  /*设置是否自动折行*/
  wrap: boolean
  /*子元素是否填充父容器*/
  fill: boolean
  /*填充父容器的比例*/
  fillRatio: number
}

/**
 * slot:
 * - default: 需要添加间隔的元素
 * */
