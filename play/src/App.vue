<!--
 * @Author: ZRMYDYCG
 * @Date: 2024-11
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-11
 * @Description: 
-->
<script setup lang="ts">
import YqAffix from '@yq-design/components/affix/src/affix.vue'
</script>

<template>
  <div class="h-[300px]"></div>
  <div class="h-[2000px]"></div>
  <div>
    <YqAffix position="bottom" :offset="100">
      <button class="w-20 h-10 bg-orange-500 rounded-lg">Affix</button>
    </YqAffix>
  </div>
  <div class="h-[3000px]"></div>
</template>

<style scoped lang="scss"></style>
