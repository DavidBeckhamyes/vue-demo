<template>
  <div>
    <componentA></componentA>
    <componentB></componentB>
  </div>
</template>

<script>
import componentA from "./componentA";
import componentB from "./componentB";

export default {
  components: {
    componentA,
    componentB,
  },
};
</script>

<style scoped>
</style>