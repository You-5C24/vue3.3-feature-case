<template>
  <HelloWorld msg="hello" :age="12" />
  <Generic age="10" :names="['1', '2']" />
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Generic from "./components/Generic.vue";
</script>

<style scoped></style>
