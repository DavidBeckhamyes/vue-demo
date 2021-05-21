<template>
  <div class="container">
    <div class="box">
      <barrage
        @updateEnterIndex="updateEnterIndex"
        :liNum="2"
        :liHeight="55"
        :data="list"
        v-slot="{ data }"
      >
        <div>
          <h2>{{ data.value }}</h2>
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
        { id: 6, value: "6" },
        { id: 7, value: "7" },
        { id: 8, value: "8" },
        { id: 9, value: "9" },
        { id: 10, value: "10" },
      ],
      todo: "",
      enterIndex: 0, // 新进场序列
      oldIndex: 0, // 旧进场序列
    };
  },
  methods: {
    fn() {
      this.list.splice(this.enterIndex + 1, 0, {
        id: Math.random(10).toFixed(2),
        value: this.todo,
        isUser: true,
      });
      this.todo = "";
    },
    updateEnterIndex(index) {
      this.enterIndex = index;
      if (this.enterIndex < this.oldIndex) {
        this.list = this.list.filter((item) => {
          return !item.isUser;
        });
      }
      this.oldIndex = index;
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
  width: 200px;
  overflow-x: hidden;
}
</style>