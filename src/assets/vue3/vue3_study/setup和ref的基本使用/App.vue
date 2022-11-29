<template>
  <h2>{{ count }}</h2>
  <hr />
  <button @click="update">更新</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  components: {},
  /* 在Vue3中依然可以使用data和methods配置, 但建议使用其新语法实现 */
  // data () {
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //   update () {
  //     this.count++
  //   }
  // }

  /* 使用vue3的composition API */
  setup() {
    // 定义响应式数据 ref对象
    const count = ref(1);
    console.log(count);

    // 更新响应式数据的函数
    function update() {
      // alert('update')
      count.value = count.value + 1;
    }

    return {
      count,
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
