<template>
  <div>
    <h2 v-if="count > 0">组件A{{ message }}</h2>
    <p>我被叫到了{{ count }}次</p>
  </div>
</template>

<script>
import eventBus from "../../../eventBus";
export default {
  data() {
    return {
      message: "我被叫到了",
      count: 0,
    };
  },
  methods: {
    onClickA() {
      this.count++;
    },
  },
};
</script>

<style scoped>
</style>