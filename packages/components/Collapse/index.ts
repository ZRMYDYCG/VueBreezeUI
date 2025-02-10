import Collapse from "./Collapse.vue"
import CollapseItem from "./CollapseItem.vue"
import { withInstall } from "@breeze-ui/utils"

export const BreCollapse = withInstall(Collapse)
export const BreCollapseItem = withInstall(CollapseItem)

export * from "./interface.ts"