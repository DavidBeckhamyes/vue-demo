<template>
  <h2>App</h2>
  <button @click="isShow = !isShow">切换</button>
  <hr />
  <Child v-if="isShow" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Child from "./components/child.vue";
export default defineComponent({
  data() {
    return {
      isShow: true,
    };
  },

  components: {
    Child,
  },
});
</script>