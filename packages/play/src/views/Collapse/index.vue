<script setup lang="ts">
import { BreCollapse, BreCollapseItem } from '../../../../components/Collapse'
</script>

<template>
  <BreCollapse>
    <BreCollapseItem title="Item 1" name="item1">
      <p>Content 1</p>
    </BreCollapseItem>
    <BreCollapseItem title="Item 2" name="item2">
      <p>Content 1</p>
    </BreCollapseItem>
    <BreCollapseItem title="Item 3" name="item3">
      <template #icon="{ isActive }"> {{ isActive ? 'collapse' : 'expand' }} </template>
      <p>Content 1</p>
    </BreCollapseItem>
  </BreCollapse>
</template>

<style scoped lang="scss"></style>
