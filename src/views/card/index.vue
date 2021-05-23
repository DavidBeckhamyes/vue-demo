<template>
  <div id="list-demo">
    <!-- <button v-on:click="add">Add</button> -->
    <button v-on:click="remove">Remove</button>
    <transition-group
      appear
      name="list"
      tag="p"
      style="height: 50px; width: 400px; background-color: blue"
    >
      <div
        v-for="(item, index) in items"
        v-bind:key="item"
        class="list-item"
        :class="{ 'list-item-scale': index % 2 == 0 }"
      >
        {{ item }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      transformItem: null,
    };
  },
  methods: {
    add: function () {
      this.items.splice(0, 0, this.transformItem);
    },
    remove: function () {
      const lastIndex = this.items.length - 1;
      this.transformItem = this.items[lastIndex];
      this.items.splice(lastIndex, 1);
      setTimeout(() => {
        this.add();
      }, 1000);
    },
  },
};
</script>

<style lang='less' scoped>
#list-demo {
  margin: 20px auto;
}
.list-item {
  float: left;
  width: 20px;
  height: 20px;
  background: red;
  text-align: center;
  line-height: 20px;
  margin-right: 10px;
}
.list-item-scale {
  width: 30px;
  height: 30px;
  line-height: 30px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-move {
  transition: all 1s ease;
}
</style>