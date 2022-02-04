<template>
  <div v-if="isShow" class="toast">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  transform: translate(-50%, -50%);

  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>