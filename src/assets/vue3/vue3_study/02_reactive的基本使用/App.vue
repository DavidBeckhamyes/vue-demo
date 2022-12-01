<template>
  <h2>name: {{ user.name }}</h2>
  <h2>wife_name：{{ user.wife.name }}</h2>
  <h2>wife_cars：{{ user.wife.cars }}</h2>
  <h3>性别: {{ user.gender }}</h3>
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

    const obj: any = {
      name: "小明",
      age: 20,
      wife: {
        name: "小芳",
        age: 18,
        cars: ["玛莎拉蒂", "凯迪拉克", "宝马"],
      },
    };
    console.log(obj);
    const user = reactive<any>(obj);
    // 更新响应式数据的函数
    function update() {
      user.age++;
      user.wife.name = "小花";
      user.wife.cars[0] = "罗密欧";

      user.gender = "男";
      // user对象或者obj对象添加一个新的属性,哪一种方式会影响界面的更新
      // obj.gender = '男'  这种方式界面没有任何更新渲染
      // user.gender = '男' 这种方式界面可以更新渲染,而且这个数据最终也添加到了obj对象上了
      // user对象或者obj对象中移除一个已经存在的属性,哪一种方式会影响界面的更新
      // delete obj.gender  界面没有更新渲染,obj对象中确实没有了gender这个属性
      // delete user.gender  界面更新渲染了,obj对象中确实没有了gender这个属性
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
