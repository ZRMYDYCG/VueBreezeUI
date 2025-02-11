<script setup lang="ts">
</script>

<template>
  <bre-button icon="plus" type="default" size="large">按钮</bre-button>
  <bre-button icon="plus" type="success" size="small" plain>按钮</bre-button>
  <bre-collapse>
    <bre-collapse-item title="标题1">内容1</bre-collapse-item>
    <bre-collapse-item title="标题2">内容2</bre-collapse-item>
  </bre-collapse>
  <div style="max-width: 600px">
    <bre-alert type="success">Success alert</bre-alert>
    <bre-alert type="info">Info alert</bre-alert>
    <bre-alert type="warning">Warning alert</bre-alert>
    <bre-alert type="danger">Error alert</bre-alert>
  </div>
</template>

<style lang="scss">

</style>
