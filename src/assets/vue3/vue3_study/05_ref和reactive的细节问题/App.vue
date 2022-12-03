<template>
  <h2>App</h2>
  <p>m1: {{ m1 }}</p>
  <p>m2: {{ m2 }}</p>
  <p>m3: {{ m3 }}</p>
  <button @click="update">更新</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  // ref 和 reactive 是 Vue3 的 composition API 中 2 个最重要的响应式 API
  // ref 用来处理基本类型数据, reactive 用来处理对象(递归深度响应式)
  // 如果用 ref 对象/数组, 内部会自动将对象/数组转换为 reactive 的代理对象
  // ref 内部: 通过给 value 属性添加 getter/setter 来实现对数据的劫持
  // reactive 内部: 通过使用 Proxy 来实现对对象内部所有数据的劫持, 并通过 Reflect 操作对象内部数据
  // ref 的数据操作: 在 js 中要.value, 在模板中不需要(内部解析模板时会自动添加.value)
  setup() {
    const m1 = ref("abc");
    const m2 = reactive({ x: 1, y: { z: "abc" } });

    // 使用ref处理对象  ==> 对象会被自动reactive为proxy对象
    const m3 = ref({ a1: 2, a2: { a3: "abc" } });
    console.log(m1, m2, m3);
    console.log(m3.value.a2); // 也是一个proxy对象

    function update() {
      m1.value += "--";
      m2.x += 1;
      m2.y.z += "++";

      m3.value = { a1: 3, a2: { a3: "abc---" } };
      m3.value.a2.a3 += "=="; // reactive对对象进行了深度数据劫持
      console.log(m3.value.a2);
    }

    return {
      m1,
      m2,
      m3,
      update,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
