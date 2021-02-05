<template>
  <div>
    <componentA></componentA>
    <componentB></componentB>
  </div>
</template>

<script>
import eventBus from "../../eventBus";
import componentA from "./components/componentA";
import componentB from "./components/componentB";

export default {
  components: {
    componentA,
    componentB,
  },
};
</script>

<style scoped>
</style>