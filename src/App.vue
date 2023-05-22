<template>
  <HelloWorld msg="hello" :age="12" />
  <Generic age="10" :names="['1', '2']" />
  <Emmits />
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Generic from "./components/Generic.vue";
import Emmits from "./components/Emmits.vue";
</script>

<style scoped></style>
