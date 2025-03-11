export interface DrawerProps {
  /*是否显示 Drawer*/
  modelValue: boolean
  /*Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true*/
  appendToBody?: boolean
  /*是否在 Drawer 出现时将 body 滚动锁定*/
  lockScroll?: boolean
  /*关闭前的回调，会暂停 Drawer 的关闭*/
  beforeClose?: () => void
  /*是否可以通过点击 modal 关闭 Drawer*/
  closeOnClickModal?: boolean
  /*Drawer 打开的延时时间，单位毫秒*/
  openDelay?: number
  /*Drawer 关闭的延时时间，单位毫秒*/
  closeDelay?: number
  /*控制是否在关闭 Drawer 之后将子元素全部销毁*/
  destroyOnClose?: boolean
  /*是否需要遮罩层*/
  modal?: boolean
  /*Drawer打开的方向*/
  direction?: string
  /*是否显示关闭按钮*/
  showClose?: boolean
  /*Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释*/
  size?: string | number
  /*Drawer 的标题，也可通过具名 slot （见下表）传入*/
  title?: string
  /*控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效*/
  withHeader?: boolean
  /*遮罩层的自定义类名*/
  modalClass?: string
  /*设置 z-index*/
  zIndex?: number
}

export interface DrawerEmits {
  open: () => void
  opened: () => void
  close: () => void
  closed: () => void
}
