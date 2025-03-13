export interface LinkProps {
  /*类型*/
  type: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
  /*是否下划线*/
  underline: boolean
  /*是否禁用状态*/
  disabled: boolean
  /*原生 href 属性*/
  href: string
  /*同原生 target 属性*/
  target: string
  /*图标组件*/
  icon: string
}

/**
 * slots
 * - default: 自定义默认内容
 * - icon: 	自定义图标组件
 * */
