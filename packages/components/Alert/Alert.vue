<script setup lang="ts">
import type { AlertProps, AlertEmits, AlertInstance } from './interface'
import { ref, useSlots, computed } from 'vue'
import { typeIconMap } from '@breeze-ui/utils'
import BreIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'BreAlert'
})
const props = withDefaults(defineProps<AlertProps>(), {
  effect: 'light',
  type: 'info',
  closable: true
})
const emits = defineEmits<AlertEmits>()
const slots = useSlots()

const visible = ref(true)

const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info')
const withDescription = computed(() => props.description || slots.default)

function close() {
  visible.value = false
  emits('close')
}

function open() {
  visible.value = true
}

defineExpose<AlertInstance>({
  open,
  close
})
</script>

<template>
  <transition name="bre-alert-fade">
    <div
      v-show="visible"
      class="bre-alert"
      role="alert"
      :class="{
        [`bre-alert__${type}`]: type,
        [`bre-alert__${effect}`]: effect,
        'text-center': center
      }"
    >
      <bre-icon
        v-if="showIcon"
        class="bre-alert__icon"
        :class="{ 'big-icon': withDescription }"
        :icon="iconName"
      />
      <div class="bre-alert__content">
        <span
          class="bre-alert__title"
          :class="{ 'with-desc': withDescription }"
          :style="{ display: center && !showIcon ? 'flow' : 'inline' }"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="bre-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <div class="bre-alert__close" v-if="closable">
          <bre-icon @click.stop="close" icon="xmark" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import './style.scss';
</style>
