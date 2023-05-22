<template>
  <button @click="handleClickFoo">Foo</button>
  <button @click="handleClickBar">Bar</button>
</template>

<script setup lang="ts">
// const emit = defineEmits<{
//   (e: "foo", id: number): void;
//   (e: "bar", name: string, ...rest: any[]): void;
// }>();
const emit = defineEmits<{
  foo: [id: number];
  bar: [name: string, ...rest: any[]];
}>();

const handleClickFoo = () => {
  emit("foo", 1);
};

const handleClickBar = () => {
  emit("bar", "name", 1);
};
</script>

<style lang="scss" scoped></style>
