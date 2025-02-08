import type { InjectionKey } from 'vue'
import type { ButtonGroupContext } from "./interface.ts"

export const BUTTON_GROUP_CTX_KEY: InjectionKey<ButtonGroupContext> = Symbol(
    "BUTTON_GROUP_CTX_KEY"
)

