<template>
  <div class="container">
    <div class="box">
      <barrage :liNum="2" :liHeight="55" :data="list" v-slot="{ data }">
        <div>
          <h2>{{ data }}</h2>
        </div>
      </barrage>
    </div>
    <input type="text" v-model="todo" @keydown.enter="fn" />
  </div>
</template>

<script>
import Barrage from "../../components/barrage";
export default {
  name: "VueTan",
  components: {
    Barrage,
  },
  data() {
    return {
      list: [
        { id: 1, value: "1" },
        { id: 2, value: "2" },
        { id: 3, value: "3" },
        { id: 4, value: "4" },
        { id: 5, value: "5" },
      ],
      todo: "",
    };
  },
  methods: {
    fn() {
      this.list.push({
        id: Math.random(10).toFixed(2),
        value: this.todo,
      });
      this.todo = "";
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
}
.box {
  // width: 200px;
  overflow-x: hidden;
}
</style>