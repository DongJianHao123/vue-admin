<template>
  <div>
    <Head />
    <Content />
  </div>
</template>

<script lang="ts">
export default {
  name: "LayoutView"
};
</script>
<script setup lang="ts">
import Content from "./Content.vue";
import Head from "./Head.vue";
</script>

<style scoped lang="less">
</style>>