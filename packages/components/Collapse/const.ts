import type { InjectionKey } from "vue"
import type { CollapseContext } from "./interface.ts"

export const COLLAPSE_CTX_KEY: InjectionKey<CollapseContext> = Symbol("collapseContext")