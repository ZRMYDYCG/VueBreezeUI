<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
</script>

<template>
  <button @click="visible = !visible">切换</button>
  <Transition name="fade">
    <div class="yq-back-top" v-if="!visible">
      <slot></slot>
    </div>
  </Transition>
</template>

<style scoped></style>
