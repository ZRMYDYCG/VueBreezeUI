import type { StyleValue } from 'vue'

export interface BadgeProps {
  /** 显示值 */
  value?: string | number
  /** 最大值，超过最大值会显示 {max}+，只有当 value 是数字类型时起作用 */
  max?: number
  /** 是否显示小圆点 */
  isDot?: boolean
  /** 是否隐藏 Badge */
  hidden?: boolean
  /** badge 类型 */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  /** 值为零时是否显示 Badge */
  showZero?: boolean
  /** 背景色 */
  color?: string
  /** badge 的偏移量 */
  offset?: [number, number]
  /** 自定义 badge 样式 */
  badgeStyle?: StyleValue
  /** 自定义 badge 类名 */
  badgeClass?: string
}

export interface BadgeEmits {}

/**
 * slot:
 * - default: 自定义默认内容
 * - content: 自定义徽标的显示内容: 作用域插槽将传入的 value 作为参数传出
 * */
