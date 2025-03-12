<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { BreEmpty } from '../../../components'

interface IComponentInfo {
  desc: string[]
  author: string
  avatar: string
  version: string
  path: string
  createdAt: string
}

const route = useRoute()
const props = defineProps<{ componentInfos: IComponentInfo[] }>()

const currentComponentInfo = computed(() => {
  return (
    props.componentInfos.find((component) => component.path === route.path) ||
    props.componentInfos[0]
  )
})
</script>

<template>
  <div
    class="w-full static bg-gray-100 shadow-lg p-6 md:p-8 transition-all hover:shadow-xl"
    :class="`top-${$parent?.$refs.header?.offsetHeight || 0}`"
  >
    <div class="flex flex-col md:flex-row gap-6 md:gap-8">
      <!-- 头像部分 -->
      <div class="flex-shrink-0">
        <img
          :src="currentComponentInfo.avatar"
          :alt="currentComponentInfo.author"
          class="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg object-cover"
        />
      </div>

      <!-- 内容部分 -->
      <div class="flex-1">
        <!-- 头部信息 -->
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
          <div>
            <h2 class="text-xl md:text-2xl font-bold text-gray-800">
              {{ currentComponentInfo.author }}'s Component
            </h2>
            <p class="text-sm md:text-base text-gray-500 mt-1">
              {{ currentComponentInfo.path }}
            </p>
          </div>
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              v{{ currentComponentInfo.version }}
            </span>
            <time :datetime="currentComponentInfo.createdAt" class="text-sm text-gray-500">
              {{ new Date(currentComponentInfo.createdAt).toLocaleDateString() }}
            </time>
          </div>
        </div>

        <!-- 描述列表 -->
        <div class="space-y-3" v-if="currentComponentInfo.desc.length > 0">
          <template v-for="(description, index) in currentComponentInfo.desc" :key="index">
            <p class="text-gray-600 text-base leading-relaxed">
              {{ description }}
            </p>
          </template>
        </div>
        <div v-else>
          <BreEmpty :image-size="100" image="/logo.svg" description="暂无组件描述" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-none {
  -webkit-line-clamp: unset;
}
</style>
