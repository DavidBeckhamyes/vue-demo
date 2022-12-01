<template>
  <h2>App父级组件</h2>
  <div>{{ msg }}</div>
  <hr />
  <child :msg="msg" msg2="哈哈哈,我爱你~" @xxx="xxx"/>
  <button @click="update">更新</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "../src/components/child.vue";
export default defineComponent({
  name: "App",
  components: { Child },
  setup() {
    let msg = ref("what are you弄啥嘞?");
    function update() {
      msg.value += "?";
    }
    function xxx(text: string) {
      msg.value += text;
    }
    return {
      msg,
      update,
      xxx,
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
