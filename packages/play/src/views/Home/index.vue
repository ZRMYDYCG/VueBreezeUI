<script setup lang="ts"></script>

<template>
  <div class="h-full w-full flex justify-center items-center">
    <div class="flex flex-col items-center">
      <img class="w-48 h-48" src="/logo.svg" alt="logo" />
      <span class="text-gradient text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl"
        >BreezeUi</span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-gradient {
  background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4, #fad0c4, #fad0c4, #ff9a9e);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
