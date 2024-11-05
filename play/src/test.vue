<script setup lang="ts">
const emits = defineEmits<{
  onTest: (a: string) => void
}>()

const handleTest = (a: any) => {
  emits('onTest', a)
}
</script>

<template>
  <div @click="handleTest('aaa')">11111111111</div>
</template>

<style scoped></style>
