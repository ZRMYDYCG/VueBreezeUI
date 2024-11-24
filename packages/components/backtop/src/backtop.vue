<script setup lang="ts">
import { ref, computed, shallowRef, onMounted } from 'vue'
import type { CSSProperties } from 'vue'
import YqIcon from '../../icon/src/icon.vue'
import { useEventListener } from '@vueuse/core'

defineOptions({
  name: 'YqBackTop'
})

const visible = ref(false)
const container = shallowRef<Document | HTMLElement>()

interface IBackTopProps {
  target?: string
  right: number
  bottom: number
  visibleHeight: number
}

const props = withDefaults(defineProps<IBackTopProps>(), {
  target: '',
  right: 50,
  bottom: 50
})
const emit = defineEmits(['click'])

const backTopStyle = computed<CSSProperties>(() => {
  return {
    right: `${props.right}px`,
    bottom: `${props.bottom}px`
  }
})

const handleScroll = () => {
  console.log('scroll')
  if (container.value) visible.value = container.value?.scrollTop >= props.visibleHeight
  console.log(visible.value)
}

const handleClick = (event: MouseEvent) => {
  container.value?.scrollTo({ top: 0, behavior: 'smooth' })
  emit('click', event)
}

useEventListener(container, 'scroll', handleScroll)

onMounted(() => {
  container.value = document.documentElement
})
</script>

<template>
  <transition name="fade">
    <div class="yq-back-top" v-if="!visible" :style="backTopStyle" @click.stop="handleClick">
      <slot>
        <yq-icon><CaretTop /></yq-icon>
      </slot>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.yq-back-top {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: aqua;
  color: #ffffff;
  bottom: 0;
  right: 0;
  z-index: 9999;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  font-size: 20px;

  :deep(.yq-icon) {
    font-size: 20px;
  }
}
</style>
