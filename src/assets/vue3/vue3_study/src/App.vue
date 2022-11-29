<template>
  <h2>name: {{ user.name }}</h2>
  <h2>wife_name：{{ user.wife.name }}</h2>
  <h2>wife_cars：{{ user.wife.cars }}</h2>
  <hr />
  <button @click="update">更新</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    // reactive:
    //     作用: 定义多个数据的响应式
    //     const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
    //     响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    //     内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的

    const obj = {
      name: "小明",
      age: 20,
      wife: {
        name: "小芳",
        age: 18,
        cars: ["玛莎拉蒂", "凯迪拉克", "宝马"],
      },
    };
    console.log(obj);
    const user = reactive(obj);
    // 更新响应式数据的函数
    function update() {
      user.age++;
      user.wife.name = "小花";
      user.wife.cars[0] = "罗密欧";
    }

    return {
      user,
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
