<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header />
      <List />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// 引入直接的子级组件
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default defineComponent({
  // 注册组件
  components: {
    Header,
    List,
    Footer,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
/* app */
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>