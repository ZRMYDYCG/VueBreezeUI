<script setup lang="ts">
import YqContainer from '@yq-design/components/container/src/container.vue'
import YqHeader from '@yq-design/components/container/src/header.vue'
import YqFooter from '@yq-design/components/container/src/footer.vue'
import YqMain from '@yq-design/components/container/src/main.vue'
import YqAside from '@yq-design/components/container/src/aside.vue'
import '@yq-design/theme-chalk/container.scss'
import '@yq-design/theme-chalk/aside.scss'
import '@yq-design/theme-chalk/header.scss'
import '@yq-design/theme-chalk/main.scss'
import '@yq-design/theme-chalk/footer.scss'
</script>

<template>
  <YqContainer>
    <YqAside></YqAside>
    <YqMain>
      <YqHeader></YqHeader>
      <YqMain></YqMain>
      <YqFooter></YqFooter>
    </YqMain>
  </YqContainer>
</template>

<style scoped lang="scss">
.yq-container {
  background-color: blueviolet;
  height: 100vh;
  .yq-aside {
    height: 100%;
    background-color: yellow;
  }
  .yq-main {
    height: 100%;
    background-color: aqua;
    .yq-header {
      background-color: black;
    }
    .yq-footer {
      background-color: palegreen;
    }
  }
}
</style>
