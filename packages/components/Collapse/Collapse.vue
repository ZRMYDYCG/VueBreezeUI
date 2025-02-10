<script setup lang="ts">
import type { CollapseProps, CollapseEmits, CollapseItemName } from "./interface.ts"
import { provide, ref, watch } from "vue"
import { COLLAPSE_CTX_KEY } from "./const.ts"
import {each} from "lodash-es";
import { debugWarn } from "@breeze-ui/utils"

const COMP_NAME = 'BreCollapse' as const;

defineOptions({
  name: COMP_NAME
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<CollapseItemName[]>(props.modelValue)

if(props.accordion && activeNames.value.length > 1) {
  debugWarn(COMP_NAME,"accordion only support single activeName")
}

function handleItemClick(item: CollapseItemName) {
  let _activeNames = Array.isArray(activeNames.value) ? [...activeNames.value] : []
  // 手风琴模式
  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? "" : item];
    updateActiveNames(_activeNames);
    return;
  }

  const index = _activeNames.indexOf(item);
  if (index > -1) {
    // 存在，删除数组中的一项
    _activeNames.splice(index, 1);
  } else {
    // 不存在，插入对应 name
    _activeNames.push(item);
  }
  updateActiveNames(_activeNames);
}

function updateActiveNames(val: CollapseItemName[]) {
  activeNames.value = val;
  each(["update:modelValue", "change"], (e) =>
      emits(e as "update:modelValue" & "change", val)
  );
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

<style lang="scss" scoped>
@import "./style.scss";
</style>