<script setup lang="ts">
import type { CollapseProps, CollapseEmits, CollapseItemName } from "./interface.ts"
import { provide, ref, watch } from "vue"
import { COLLAPSE_CTX_KEY } from "./const.ts"

defineOptions({
  name: "BreCollapse"
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref(props.modelValue)

if(props.accordion && activeNames.value.length > 1) {
  console.warn("accordion only support single activeName")
}

function handleItemClick(item: CollapseItemName) {

}

function updateActiveNames(newActiveNames: CollapseItemName[]) {
  activeNames.value = newActiveNames
  emits("update:modelValue", newActiveNames)
  emits("change", newActiveNames)
}

watch(() => props.modelValue, (newNames) => updateActiveNames(newNames))

provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick
})
</script>

<template>
  <div class="bre-collapse">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>