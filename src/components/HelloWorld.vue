<template>
  <h1>{{ msg }} {{ age }}</h1>
</template>

<script setup lang="ts">
import { watchEffect } from "vue";
import type { HelloProps } from "./helloWord";

const { msg } = defineProps<HelloProps & { age: number }>();
// props.msg
watchEffect(() => {
  console.log(msg, "watch");
});
</script>

<style scoped></style>
