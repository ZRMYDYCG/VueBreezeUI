export type IPositionType = 'top' | 'bottom'

export interface IAffixProps {
  /*偏移的距离*/
  offset?: number
  /*固钉位置*/
  position?: IPositionType
  /*指定容器(CSS选择器)*/
  target?: string
  /*z-index属性值*/
  'z-index'?: number
}
