<template>
  <h1>{{ msg }} {{ age }}</h1>
</template>

<script setup lang="ts">
import type { HelloProps } from "./helloWord";

defineProps<HelloProps & { age: number }>();
</script>

<style scoped></style>
