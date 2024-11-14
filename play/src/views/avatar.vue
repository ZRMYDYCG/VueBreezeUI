<script setup lang="ts">
import YqAvatar from '@yq-design/components/avatar/src/avatar.vue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="avatar-demo">
      <YqAvatar shape="circle" size="large"></YqAvatar>
      <YqAvatar shape="circle" size="medium"></YqAvatar>
      <YqAvatar shape="circle" size="small"></YqAvatar>
    </div>

    <div class="avatar-demo">
      <YqAvatar shape="square" size="large"></YqAvatar>
      <YqAvatar shape="square" size="medium"></YqAvatar>
      <YqAvatar shape="square" size="small"></YqAvatar>
    </div>

    <div class="avatar-demo">
      <YqAvatar
        shape="circle"
        size="large"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        fit="contain"
      ></YqAvatar>
      <YqAvatar
        shape="circle"
        size="medium"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        fit="cover"
      ></YqAvatar>
      <YqAvatar
        shape="circle"
        size="small"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        fit="fill"
      ></YqAvatar>
      <YqAvatar
        shape="circle"
        size="small"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        fit="none"
      ></YqAvatar>
    </div>

    <div class="avatar-demo">
      <YqAvatar shape="circle" size="large" icon="User"></YqAvatar>
      <YqAvatar shape="circle" size="medium" icon="User"></YqAvatar>
      <YqAvatar shape="circle" size="small" icon="User"></YqAvatar>
    </div>

    <div class="avatar-demo">
      <YqAvatar shape="circle" size="large">A</YqAvatar>
      <YqAvatar shape="circle" size="medium">B</YqAvatar>
      <YqAvatar shape="circle" size="small">C</YqAvatar>
    </div>

    <div class="avatar-demo">
      <YqAvatar shape="circle" size="large" color="#f56a00">A</YqAvatar>
      <YqAvatar shape="circle" size="medium" color="pink">B</YqAvatar>
      <YqAvatar shape="circle" size="small" color="#07c160">C</YqAvatar>
    </div>

    <div class="avatar-demo">
      <YqAvatar shape="circle" size="medium" color="#f56a00" href="https://www.youzan.com"
        >跳转</YqAvatar
      >
      <YqAvatar
        shape="circle"
        size="medium"
        color="#f56a00"
        href="https://www.youzan.com"
        target="_blank"
        >跳转</YqAvatar
      >
      <YqAvatar
        shape="circle"
        size="medium"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        fit="cover"
        href="https://www.youzan.com"
      ></YqAvatar>
    </div>
  </div>
</template>

<style scoped></style>
