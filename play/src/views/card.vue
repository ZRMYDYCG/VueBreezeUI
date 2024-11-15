<script setup lang="ts">
import YqCard from '@yq-design/components/card/src/card.vue'
</script>

<template>
  <div class="px-4 py-3 bg-black h-screen w-screen">
    <YqCard
      width="500"
      size="large"
      border
      :footer-style="{
        background: 'pink',
        color: 'white',
        fontSize: '16px',
        textAlign: 'center'
      }"
    >
      <template #header> Header </template>
      <template #default>
        <div>Body</div>
        <div>Body</div>
        <div>Body</div>
        <div>Body</div>
        <div>Body</div>
        <div>Body</div>
        <div>Body</div>
        <div>Body</div>
        <div>Body</div>
        <div>Body</div>
        <div>Body</div>
      </template>
      <template #footer>
        <div>@yq-design 2024</div>
      </template>
    </YqCard>
  </div>
</template>

<style scoped></style>
