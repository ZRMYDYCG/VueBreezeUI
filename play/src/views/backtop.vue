<script setup lang="ts">
import BackTop from '@yq-design/components/backtop/src/backtop.vue'
</script>

<template>
  <BackTop>
    <div
      class="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-gray-500 text-white text-sm cursor-pointer hover:bg-gray-600"
    >
      <component :is="'Top'"></component>
    </div>
  </BackTop>
</template>

<style scoped></style>
