import type {Component, Ref} from "vue";

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
    loadingIcon?: string
    autoFocus?: boolean
    useThrottle?: boolean
    throttleDuration?: number
}

export interface ButtonGroupProps {
    size?: ButtonSize
    type?: ButtonType
    disabled?: boolean
}

export interface ButtonGroupContext {
    size?: ButtonSize
    type?: ButtonType
    disabled?: boolean
}

export interface ButtonEmits {
    (e: "click", val: MouseEvent): void
}

export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void>
}

