export type MessageType = 'success' | 'warning' | 'info' | 'error'

export interface MessageProps {
  /*消息文字*/
  message?: string
  /*消息类型*/
  type: MessageType
  /*是否纯色*/
  plain?: boolean
  /*自定义图标，该属性会覆盖 type 的图标*/
  icon: string
  /*dangerouslyUseHTMLString*/
  dangerouslyUseHTMLString?: boolean
  /*自定义类名*/
  customClass?: string
  /*显示时间，单位为毫秒。 设为 0 则不会自动关闭*/
  duration: number
  /*是否显示关闭按钮*/
  showClose?: boolean
  /*文字是否居中*/
  center: boolean
  /*关闭时的回调函数, 参数为被关闭的 message 实例*/
  onClose?: () => void
  /*Message 距离窗口顶部的偏移量*/
  offset: number
  /*设置 message 的根元素，默认为 document.body*/
  appendTo: string | HTMLElement
  /*合并内容相同的消息，不支持 VNode 类型的消息*/
  grouping: boolean
  /*重复次数，类似于 Badge 。当和 grouping 属性一起使用时作为初始数量使用*/
  repeatNum: number
}

export interface MessageEmits {}
