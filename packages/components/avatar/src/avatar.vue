<script setup lang="ts">
import type { IAvatarProps } from './avatar'
import { onMounted } from 'vue'
import { useSlotsExist } from '@yq-design/hooks/index.ts'

const props = withDefaults(defineProps<IAvatarProps>(), {
  color: 'rgba(0, 0, 0, 0.2)',
  size: 'medium',
  shape: 'circle',
  target: 'self'
})

const res = useSlotsExist(['header', 'default', 'footer'])

console.log('Exist Slots', res)

onMounted(() => {
  console.log('Avatar mounted', props)
})
</script>

<template>
  <div class="yq-avatar">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <main class="text-amber-400">
      <slot></slot>
    </main>
    <slot name="footer"></slot>
  </div>
</template>

<style lang="scss" scoped></style>
