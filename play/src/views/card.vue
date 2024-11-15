<script setup lang="ts">
import YqCard from '@yq-design/components/card/src/card.vue'
</script>

<template>
  <div class="px-4 py-3 bg-amber-50 h-screen w-screen">
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
      :body-style="{
        padding: '0'
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

    <div class="py-10"></div>

    <YqCard
      width="500"
      size="large"
      shadow="never"
      border
      :footer-style="{
        background: 'pink',
        color: 'white',
        fontSize: '16px',
        textAlign: 'center'
      }"
      :body-style="{
        padding: '0'
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
    </YqCard>

    <div class="py-10"></div>

    <YqCard
      width="500"
      size="large"
      shadow="hover"
      border
      :footer-style="{
        background: 'pink',
        color: 'white',
        fontSize: '16px',
        textAlign: 'center'
      }"
      :body-style="{
        padding: '0'
      }"
    >
      <template #header> Header </template>
      <template #default>
        <div>Body</div>
      </template>
    </YqCard>
  </div>
</template>

<style scoped></style>
