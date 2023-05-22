<template>
  <HelloWorld msg="hello" :age="12" />
  <Generic age="10" :names="['1', '2']" />
  <Emmits />
  <Sloter>
    <template v-slot="{ msg }">
      {{ msg }}
    </template>
    <template v-slot:foo="{ bar }">
      {{ bar }}
    </template>
  </Sloter>
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Generic from "./components/Generic.vue";
import Emmits from "./components/Emmits.vue";
import Sloter from "./components/Slot.vue";
</script>

<style scoped></style>
