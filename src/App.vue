<template>
  <HelloWorld :msg="msg" :age="12" />
  <button @click="HandleChangeMsg">click</button>
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
  <DefineVue v-model="foo" />
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Generic from "./components/Generic.vue";
import Emmits from "./components/Emmits.vue";
import Sloter from "./components/Slot.vue";
import DefineVue from "./components/DefineVue.vue";
import { ref } from "vue";

const msg = ref("heihei");

const HandleChangeMsg = () => {
  msg.value = "changeHeiHei";
};

const foo = ref("1");
</script>

<style scoped></style>
