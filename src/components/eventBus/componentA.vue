<template>
  <div>
    <h2 v-if="count > 0">我是组件A，{{ message }}</h2>
    <p>我被叫到了{{ count }}次</p>
    <button @click.stop="onTapA">按钮A</button>
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
      eventBus.$once('increaseNum', target => {  
            this.count = target 
        });
  },
  methods: {
    onTapA() {
      this.count++;
      eventBus.$emit('increaseNum', this.count);   
    },
  },
};
</script>

<style scoped>
</style>