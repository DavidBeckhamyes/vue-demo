<template>
  <div>
    <h2 v-if="count > 0">我是组件B，{{ message }}</h2>
    <p>我被叫到了{{ count }}次</p>
    <button @click.stop="onTapB">按钮B</button>
  </div>
</template>

<script>
import eventBus from "../../eventBus.js";
export default {
  data() {
    return {
      message: "我被叫到了",
      count: 0,
    };
  },
  created() {
    eventBus.$on("increaseNum", (target) => {
      this.count = target;
    });
  },
  methods: {
    onTapB() {
      this.count++;
      eventBus.$emit("increaseNum", this.count);
    },
  },
};
</script>

<style scoped>
</style>