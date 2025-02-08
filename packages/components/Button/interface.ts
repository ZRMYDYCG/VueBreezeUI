import type { Component } from "vue";

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type NativeButtonType = 'button' |'submit' |'reset'
export type ButtonSize = 'large' | 'default' | 'small'

export interface ButtonProps {
    tag?: string | Component
    type?: ButtonType
    size?: ButtonSize
    nativeType?: NativeButtonType
    disabled?: boolean
    loading?: boolean
    icon?: boolean
    circle?: boolean
    plain?: boolean
    round?: boolean
}