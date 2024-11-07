<script setup lang="ts">
defineOptions({
  name: 'YqMain'
})
</script>

<template>
  <main class="yq-main">
    <slot></slot>
  </main>
</template>

<style scoped>
.yq-main {
  display: block;
  /*占满*/
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: 20px;
}
</style>
