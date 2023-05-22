<template>
  <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
import type { HelloProps } from "./helloWord";

defineProps<HelloProps>();
</script>

<style scoped></style>
