<script setup lang="ts">
import { BreAlert } from '../../../../components'
</script>

<template>
  <BreAlert center closable show-icon type="success" description="Success Message" />
  <BreAlert closable type="info" description="info Message" />
  <BreAlert center closable type="danger" description="danger Message" />
</template>

<style lang="scss" scoped></style>
