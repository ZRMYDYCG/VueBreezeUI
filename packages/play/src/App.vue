<script setup lang="ts">
import { routes } from './router'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>

<template>
  <div class="layout flex">
    <div class="aside w-[200px] flex justify-center p-5 bg-amber-50 h-screen">
      <div>
        <template v-for="item in routes" :key="item.path">
          <div
            class="px-2 py-1 cursor-pointer mb-2 last:mb-0 rounded-sm flex justify-center items-center bg-amber-200"
            @click="router.push(item.path)"
          >
            {{ item.name }}
          </div>
        </template>
      </div>
    </div>
    <div class="main w-full">
      <div class="header bg-amber-200 w-full py-4 px-3">{{ route.name }}</div>
      <div class="content p-2 overflow-hidden">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
