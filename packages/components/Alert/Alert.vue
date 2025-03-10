<script setup lang="ts">
import { computed, ref } from 'vue'
import type { AlertEmits, AlertInstance, AlertProps, AlertType } from './interface'

const props = withDefaults(defineProps<AlertProps>(), {
  type: 'info',
  effect: 'light',
  closable: false,
  center: false,
  showIcon: false
})

const emit = defineEmits<AlertEmits>()

const visible = ref(true)

const typeIcon = computed(() => {
  const icons: Record<AlertType, string> = {
    success: '✓',
    info: 'ℹ',
    warning: '⚠',
    danger: '✖'
  }
  return icons[props.type]
})

const handleClose = () => {
  visible.value = false
  emit('close')
}

defineExpose<AlertInstance>({
  open() {
    visible.value = true
  },
  close() {
    visible.value = false
  }
})
</script>

<template>
  <transition name="bre-alert-fade">
    <div
      v-show="visible"
      class="bre-alert"
      :class="[`bre-alert--${type}`, effect && `bre-alert--${effect}`, { 'is-center': center }]"
      role="alert"
    >
      <div v-if="showIcon" class="bre-alert__icon">
        <span class="bre-icon">{{ typeIcon }}</span>
      </div>

      <div class="bre-alert__content">
        <span v-if="title" class="bre-alert__title" :class="{ 'is-center': center }">
          {{ title }}
        </span>
        <p v-if="description" class="bre-alert__description" :class="{ 'is-center': center }">
          {{ description }}
        </p>
      </div>

      <div v-if="closable" class="bre-alert__close" @click="handleClose">
        <span class="bre-icon-close">×</span>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import './style.scss';
</style>
