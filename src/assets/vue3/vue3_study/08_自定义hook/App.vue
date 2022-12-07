<template>
  <div>
    <h2>x: {{ x }}, y: {{ y }}</h2>
    <h2 v-if="loading">LOADING...</h2>
    <h2 v-else-if="errorMsg">错误信息：{{ errorMsg }}</h2>
    <!-- <ul v-else>
    <li>id: {{result.id}}</li>
    <li>name: {{result.name}}</li>
    <li>distance: {{result.distance}}</li>
  </ul> -->

    <ul v-for="p in result" :key="p.id">
      <li>id: {{ p.id }}</li>
      <li>title: {{ p.title }}</li>
      <li>price: {{ p.price }}</li>
    </ul>
    <!-- <img v-if="result" :src="result[0].url" alt=""> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
/*
在组件中引入并使用自定义hook
自定义hook的作用类似于vue2中的mixin技术
自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂
*/
import useMousePosition from "./hooks/useMousePosition";
import useRequest from "./hooks/useRequest";

// // 地址数据接口
// interface AddressResult {
//   id: number;
//   name: string;
//   distance: string;
// }

// 产品数据接口
interface ProductResult {
  id: string;
  title: string;
  price: number;
}

export default defineComponent({
  setup() {
    const { x, y } = useMousePosition();

    const { loading, result, errorMsg } = useRequest<ProductResult[]>(
      "/data/products.json"
    );

    // 监视
    watch(result, () => {
      if (result.value) {
        console.log(result.value.length);
      }
    });

    return {
      x,
      y,
      loading,
      result,
      errorMsg,
    };
  },
});
</script>