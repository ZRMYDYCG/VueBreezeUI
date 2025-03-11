<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import type { CSSProperties } from 'vue'
import type { MessageType, MessageProps } from './interface.ts'

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000,
  offset: 20,
  appendTo: document.body,
  grouping: false,
  repeatNum: 1
})

const visible = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const messageClass = computed(() => [
  'bre-message',
  `bre-message--${props.type}`,
  props.plain && 'is-plain',
  props.center && 'is-center',
  props.customClass
])

const messageStyle = computed<CSSProperties>(() => ({
  top: `${props.offset}px`
}))

const iconMap: Record<MessageType, string> = {
  success: '✓',
  warning: '⚠',
  info: 'i',
  error: '✖'
}

const startTimer = () => {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      close()
    }, props.duration)
  }
}

const pauseTimer = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

const close = () => {
  visible.value = false
  props.onClose?.()
}

const handleMouseenter = () => pauseTimer()
const handleMouseleave = () => startTimer()

onMounted(() => {
  visible.value = true
  startTimer()
})

onBeforeUnmount(() => {
  pauseTimer()
})

defineExpose({
  close
})
</script>

<template>
  <teleport :to="appendTo">
    <transition name="bre-message-fade" @after-leave="$emit('destroy')">
      <div
        v-show="visible"
        :class="messageClass"
        :style="messageStyle"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
      >
        <span v-if="icon" class="bre-message__icon">{{ icon }}</span>
        <span v-else class="bre-message__icon">{{ iconMap[type] }}</span>

        <div class="bre-message__content">
          <span v-if="dangerouslyUseHTMLString" v-html="message" />
          <template v-else>{{ message }}</template>

          <span v-if="grouping && repeatNum > 1" class="bre-message__repeat">
            {{ repeatNum }}
          </span>
        </div>

        <button v-if="showClose" class="bre-message__close" @click="close">×</button>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss">
@import './style.scss';
</style>
