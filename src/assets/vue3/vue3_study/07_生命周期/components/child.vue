<template>
  <div class="about">
    <h2>msg: {{ msg }}</h2>
    <hr />
    <button @click="update">更新</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
} from "vue";

export default defineComponent({
  beforeCreate() {
    console.log("Vue2.x中的beforeCreate");
  },

  created() {
    console.log("Vue2.x中的created");
  },

  beforeMount() {
    console.log("Vue2.x中的beforeMount");
  },

  mounted() {
    console.log("Vue2.x中的mounted");
  },

  beforeUpdate() {
    console.log("Vue2.x中的beforeUpdate");
  },

  updated() {
    console.log("Vue2.x中的updated");
  },

  beforeUnmount() {
    console.log("Vue2.x中的beforeUnmount");
  },

  unmounted() {
    console.log("Vue2.x中的unmounted");
  },

  setup() {
    console.log("Vue3.0中的setup");
    const msg = ref("abc");

    const update = () => {
      msg.value += "--";
    };

    onBeforeMount(() => {
      console.log("Vue3.0中的onBeforeMount");
    });

    onMounted(() => {
      console.log("Vue3.0中的onMounted");
    });

    onBeforeUpdate(() => {
      console.log("Vue3.0中的onBeforeUpdate");
    });

    onUpdated(() => {
      console.log("Vue3.0中的onUpdated");
    });

    onBeforeUnmount(() => {
      console.log("Vue3.0中的onBeforeUnmount");
    });

    onUnmounted(() => {
      console.log("Vue3.0中的onUnmounted");
    });

    return {
      msg,
      update,
    };
  },
});
</script>