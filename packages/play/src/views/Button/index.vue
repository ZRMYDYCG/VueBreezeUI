<script setup lang="ts">
import { BreButton, BreButtonGroup } from '../../../../components'
</script>

<template>
  <BreButtonGroup>
    <BreButton type="primary">确定</BreButton>
    <BreButton type="info">取消</BreButton>
    <BreButton type="warning">删除</BreButton>
    <BreButton type="success" plain>保存</BreButton>
  </BreButtonGroup>
  <div>
    <BreButton type="primary" loading>确定</BreButton>
    <BreButton type="info" loading>取消</BreButton>
  </div>
  <div>
    <BreButton type="primary" size="small" loading>确定</BreButton>
    <BreButton type="info" size="medium" loading>取消</BreButton>
    <BreButton type="info" size="large" loading>提交</BreButton>
  </div>
</template>

<style lang="scss" scoped></style>
