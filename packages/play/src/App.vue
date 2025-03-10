<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { routes } from './router'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const asideWidth = ref(200)
let isDragging = false
let startX = 0
let startWidth = 0

const header = ref<HTMLElement>()
const headerHeight = ref(64)

const handleMouseDown = (e: MouseEvent) => {
  isDragging = true
  startX = e.clientX
  startWidth = asideWidth.value
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
}

const handleMouseMove = (e: MouseEvent) => {
  if (!isDragging) return
  const deltaX = e.clientX - startX
  const newWidth = startWidth + deltaX
  asideWidth.value = Math.max(150, Math.min(newWidth, 400))
}

const handleMouseUp = () => {
  isDragging = false
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
}

onMounted(() => {
  if (header.value) {
    headerHeight.value = header.value.offsetHeight
  }
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
})
</script>

<template>
  <div class="layout flex">
    <div
      class="aside flex justify-center p-5 bg-gray-100 h-screen relative select-none"
      :style="{ width: `${asideWidth}px` }"
    >
      <!-- 可拖动区域 -->
      <div
        class="absolute right-0 top-0 w-1 h-full cursor-ew-resize bg-gray-100"
        @mousedown="handleMouseDown"
      ></div>
      <div>
        <div class="h-10 mb-2 flex items-center">
          <div class="w-8 h-8 rounded-full bg-gray-300">
            <img src="/logo.svg" alt="" />
          </div>
          <span class="ml-2 text-sm font-medium">BreezeUi</span>
        </div>
        <template v-for="item in routes" :key="item.path">
          <div
            class="cursor-pointer px-4 py-2 mb-2 last:mb-0 rounded-sm flex justify-center items-center hover:bg-gray-200"
            :class="{
              'bg-gray-200': route.path === item.path
            }"
            @click="router.push(item.path)"
          >
            {{ item.name }}
          </div>
        </template>
      </div>
    </div>
    <div class="main flex-1">
      <div
        ref="header"
        class="header flex justify-between items-center bg-gray-100 w-full py-4 px-3"
      >
        <div class="flex items-center gap-2">
          <span class="text-lg font-medium cursor-pointer" @click="router.push('/')">BreezeUi</span>
          <span>/</span>
          <span class="text-sm text-gray-400">{{ route.name }}</span>
        </div>
        <a
          target="_blank"
          href="https://github.com/ZRMYDYCG/VueBreezeUI"
          class="w-8 h-8 cursor-pointer hover:scale-110 transition-all duration-300"
        >
          <img src="/github.svg" alt="" />
        </a>
      </div>
      <div
        class="content p-2 overflow-y-auto"
        :style="{ height: `calc(100vh - ${headerHeight}px)` }"
      >
        <transition name="vibrate-fade" mode="out-in" appear>
          <router-view v-slot="{ Component }">
            <component :is="Component" :key="route.path" />
          </router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vibrate-fade-enter-active {
  animation: vibrate 0.3s ease;
  transition: opacity 0.3s ease;
}
.vibrate-fade-leave-active {
  transition: opacity 0.2s ease;
}

.vibrate-fade-enter-from {
  opacity: 0;
}
.vibrate-fade-leave-to {
  opacity: 0;
}

@keyframes vibrate {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-3px);
  }
  50% {
    transform: translateX(3px);
  }
  75% {
    transform: translateX(-2px);
  }
  100% {
    transform: translateX(0);
  }
}

.select-none {
  user-select: none;
  -webkit-user-select: none;
}
</style>
