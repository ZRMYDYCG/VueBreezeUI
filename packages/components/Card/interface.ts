export interface CardProps {
  /*卡片的标题, 既可以通过设置 header 来修改标题, 也可以通过 slot#header 传入 DOM 节点*/
  header: string
  /*卡片页脚, 既可以通过设置 footer 来修改卡片底部内容, 也可以通过 slot#footer 传入 DOM 节点*/
  footer: string
  /*body 的 CSS 样式*/
  bodyStyle: object
  /*body 的自定义类名*/
  bodyClass: string
  /*卡片阴影显示时机*/
  shadow: 'always' | 'hover' | 'never'
}

export interface CardEmits {}
