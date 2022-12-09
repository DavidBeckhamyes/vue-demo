<template>
  <h3 :style="{ color: color }">孙子组件: {{ color }}</h3>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  setup() {
    const color = inject("color");

    return {
      color,
    };
  },
});
</script>