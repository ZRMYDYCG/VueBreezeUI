<script setup lang="ts">
import type { IAvatarProps } from './avatar'
import { onMounted } from 'vue'

const props = withDefaults(defineProps<IAvatarProps>(), {
  color: 'rgba(0, 0, 0, 0.2)',
  size: 'medium',
  shape: 'circle',
  target: 'self'
})

onMounted(() => {
  console.log('Avatar mounted', props)
})
</script>

<template>
  <div class="yq-avatar">YqAvatar</div>
</template>

<style lang="scss" scoped></style>
