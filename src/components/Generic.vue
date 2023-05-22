<template></template>

<script setup lang="ts" generic="T, U extends string">
defineProps<{ age: T; names: U[] }>();
</script>

<style lang="scss" scoped></style>
