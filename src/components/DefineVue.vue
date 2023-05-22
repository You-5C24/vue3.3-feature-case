<template>
  <div>
    <input v-model="modelValue" />
    <input v-model="bar" />
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel();
const bar = defineModel("bar", { required: false, default: "123" });
</script>

<style lang="scss" scoped></style>
