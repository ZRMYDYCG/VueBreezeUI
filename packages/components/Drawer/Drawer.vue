<script setup lang="ts">
import { computed, ref, watch, nextTick, onUnmounted, h, useSlots } from 'vue'
// import { useLockScroll } from './useLockScroll'
import type { DrawerProps, DrawerEmits } from './interface.ts'

defineOptions({
  name: 'BreDrawer'
})

const props = withDefaults(defineProps<DrawerProps>(), {
  modelValue: false,
  appendToBody: false,
  lockScroll: true,
  closeOnClickModal: true,
  openDelay: 0,
  closeDelay: 0,
  destroyOnClose: false,
  modal: true,
  direction: 'rtl',
  showClose: true,
  withHeader: true,
  zIndex: 2000
})

const emit = defineEmits<
  DrawerEmits & {
    'update:modelValue': [value: boolean]
  }
>()

const slots = useSlots()

const visible = ref(false)
const rendered = ref(false) // 控制子元素销毁
const drawerClass = computed(() => [
  'bre-drawer',
  `direction-${props.direction}`,
  { 'is-open': visible.value }
])

// const { lockScroll, unlockScroll } = useLockScroll()

// 抽屉样式处理
const drawerStyle = computed(() => {
  if (!props.size) return {}
  const isHorizontal = ['ltr', 'rtl'].includes(props.direction)
  const property = isHorizontal ? 'width' : 'height'

  return {
    [property]: typeof props.size === 'number' ? `${props.size}px` : props.size,
    zIndex: props.zIndex
  }
})

// 处理动画延时
let openTimer: number | null = null
let closeTimer: number | null = null

const cleanupTimers = () => {
  if (openTimer) clearTimeout(openTimer)
  if (closeTimer) clearTimeout(closeTimer)
}

const open = () => {
  cleanupTimers()
  openTimer = window.setTimeout(() => {
    visible.value = true
    emit('open')
  }, props.openDelay)
}

const close = () => {
  cleanupTimers()
  closeTimer = window.setTimeout(async () => {
    visible.value = false
    emit('close')
    await nextTick()
    // if (props.lockScroll) unlockScroll()
  }, props.closeDelay)
}

// 暴露给父组件的方法
const handleBeforeClose = async () => {
  if (typeof props.beforeClose === 'function') {
    await props.beforeClose()
  }
  return true
}

defineExpose({
  handleBeforeClose
})

// 点击遮罩层处理
const handleModalClick = () => {
  if (props.closeOnClickModal && props.modal) {
    handleBeforeClose().then(() => {
      emit('update:modelValue', false)
    })
  }
}

// 主内容区
const renderDrawerContent = computed(() =>
  h(
    'div',
    {
      class: drawerClass.value,
      style: drawerStyle.value,
      role: 'dialog',
      'aria-modal': 'true',
      onClick: (e) => e.stopPropagation()
    },
    [
      props.withHeader &&
        h('div', { class: 'bre-drawer__header' }, [
          slots.title?.() || h('span', props.title),
          props.showClose &&
            h(
              'button',
              {
                class: 'bre-drawer__close',
                onClick: () => emit('update:modelValue', false)
              },
              '×'
            )
        ]),
      h('div', { class: 'bre-drawer__body' }, [
        (!props.destroyOnClose || visible.value || rendered.value) && slots.default?.()
      ]),
      slots.footer?.() && h('div', { class: 'bre-drawer__footer' }, slots.footer?.())
    ]
  )
)

// 监听modelValue变化
watch(
  () => props.modelValue,
  async (val) => {
    if (val) {
      rendered.value = true
      // if (props.lockScroll) lockScroll()
      await nextTick()
      open()
    } else {
      close()
    }
  }
)

// 处理动画结束事件
const afterEnter = () => {
  emit('opened')
}

const afterLeave = () => {
  if (props.destroyOnClose) {
    rendered.value = false
  }
  emit('closed')
}

onUnmounted(() => {
  cleanupTimers()
  // unlockScroll()
})
</script>

<template>
  <Teleport v-if="appendToBody" to="body">
    <Transition name="bre-drawer-fade" @after-enter="afterEnter" @after-leave="afterLeave">
      <div
        v-if="modal && rendered"
        class="bre-drawer__modal"
        :class="modalClass"
        :style="{ zIndex: zIndex - 1 }"
        v-show="visible"
        @click="handleModalClick"
      />
    </Transition>
    <Transition :name="`bre-drawer-slide-${direction}`">
      <component v-if="visible" :is="renderDrawerContent" />
    </Transition>
  </Teleport>

  <div v-else class="bre-drawer__wrapper">
    <Transition name="bre-drawer-fade" @after-enter="afterEnter" @after-leave="afterLeave">
      <div
        v-if="modal && rendered"
        class="bre-drawer__modal"
        :class="modalClass"
        :style="{ zIndex: zIndex - 1 }"
        v-show="visible"
        @click="handleModalClick"
      />
    </Transition>
    <Transition :name="`bre-drawer-slide-${direction}`">
      <component v-if="visible" :is="renderDrawerContent" />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
