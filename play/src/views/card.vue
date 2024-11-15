<script setup lang="ts">
import YqCard from '@yq-design/components/card/src/card.vue'
</script>

<template>
  <YqCard width="500" size="large" border>
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
    <template #footer> Footer </template>
  </YqCard>
</template>

<style scoped></style>
