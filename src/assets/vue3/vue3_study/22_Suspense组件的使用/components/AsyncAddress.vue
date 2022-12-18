<template>
  <h2>{{ data }}</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  async setup() {
    const result = await axios.get("/data/address.json");
    return {
      data: result.data,
    };
  },
});
</script>