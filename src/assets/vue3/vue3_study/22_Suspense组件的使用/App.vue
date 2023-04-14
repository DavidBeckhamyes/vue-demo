<template>
  <!-- 它们允许我们的应用程序在等待异步组件时渲染一些后备内容，可以让我们创建一个平滑的用户体验 -->

  <Suspense>
    <template v-slot:default>
      <!-- <AsyncComp /> -->
      <AsyncAddress />
    </template>

    <template v-slot:fallback>
      <h1>LOADING...</h1>
    </template>
  </Suspense>
</template>

<script lang="ts">
/*
异步组件 + Suspense组件
*/
import AsyncAddress from "./components/AsyncAddress.vue";
import { defineComponent, defineAsyncComponent } from "vue";
// Vue3组件按需加载方式
// const AsyncComp = defineAsyncComponent(
//   () => import("./components/AsyncComp.vue")
// );
export default defineComponent({
  setup() {
    return {};
  },

  components: {
    AsyncAddress,
  },
});
</script>