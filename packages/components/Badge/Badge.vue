<script setup lang="ts">
import { computed, type StyleValue } from 'vue'

const props = withDefaults(
  defineProps<{
    /** 显示值 */
    value?: string | number
    /** 最大值，超过最大值会显示 {max}+，只有当 value 是数字类型时起作用 */
    max?: number
    /** 是否显示小圆点 */
    isDot?: boolean
    /** 是否隐藏 Badge */
    hidden?: boolean
    /** badge 类型 */
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
    /** 值为零时是否显示 Badge */
    showZero?: boolean
    /** 背景色 */
    color?: string
    /** badge 的偏移量 */
    offset?: [number, number]
    /** 自定义 badge 样式 */
    badgeStyle?: StyleValue
    /** 自定义 badge 类名 */
    badgeClass?: string
  }>(),
  {
    value: '',
    max: 99,
    isDot: false,
    hidden: false,
    type: 'danger',
    showZero: false,
    offset: () => [0, 0],
    badgeStyle: () => ({}),
    badgeClass: ''
  }
)

const shouldShow = computed(() => {
  if (props.hidden) return false
  if (props.isDot) return true
  if (typeof props.value === 'number' && props.value === 0) return props.showZero
  return !!props.value
})

const content = computed(() => {
  if (props.isDot) return ''

  if (typeof props.value === 'number') {
    if (props.value > props.max) return `${props.max}+`
    return props.value.toString()
  }

  return props.value
})

const badgeStyle = computed(() => {
  const style: StyleValue = {
    backgroundColor: props.color || '',
    transform: `translate(${props.offset[0]}px, ${props.offset[1]}px)`
  }
  return Object.assign(style, props.badgeStyle)
})
</script>

<template>
  <div class="bre-badge">
    <slot />
    <transition name="bre-badge">
      <sup
        v-if="shouldShow"
        class="bre-badge__content"
        :class="[
          badgeClass,
          type,
          {
            'is-dot': isDot,
            'is-fixed': $slots.default,
            'is-number': typeof value === 'number' && !isDot
          }
        ]"
        :style="badgeStyle"
      >
        <slot v-if="$slots.content" name="content" :value="value" />
        <template v-else>{{ content }}</template>
      </sup>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.bre-badge {
  position: relative;
  display: inline-block;

  &__content {
    position: absolute;
    top: 0;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    height: 18px;
    min-width: 18px;
    padding: 0 4px;
    border-radius: 9px;
    white-space: nowrap;
    color: #fff;
    z-index: 1;

    &.is-dot {
      width: 8px;
      height: 8px;
      min-width: auto;
      padding: 0;
      right: 5px;
      border-radius: 50%;
    }

    &.is-number {
      border-radius: 8px;
    }

    &.is-fixed {
      position: absolute;
      top: 0;
      right: 0;
    }

    &.primary {
      background-color: #409eff;
    }
    &.success {
      background-color: #67c23a;
    }
    &.warning {
      background-color: #e6a23c;
    }
    &.danger {
      background-color: #f56c6c;
    }
    &.info {
      background-color: #909399;
    }
  }
}

.bre-badge-enter-active,
.bre-badge-leave-active {
  transition: opacity 0.3s;
}
.bre-badge-enter-from,
.bre-badge-leave-to {
  opacity: 0;
}
</style>
