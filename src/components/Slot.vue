<template>
  <div>
    <slot msg="haha"></slot>
    <slot name="foo" :bar="1"></slot>
  </div>
</template>

<script setup lang="ts">
defineSlots<{
  default: (props: { msg: string }) => any;
  foo: (props: { bar: number }) => any;
}>();
</script>

<style lang="scss" scoped></style>
