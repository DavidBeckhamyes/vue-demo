<template>
  <h2>AsyncComp22</h2>
  <p>{{ msg }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AsyncComp",
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          msg: "abc",
        });
      }, 2000);
    });
    // return {
    //   msg: "abc",
    // };
  },
});
</script>