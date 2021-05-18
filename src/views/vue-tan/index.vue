<template>
  <div class="tan-box">
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VueTan",
  data() {
    return {};
  },
  props: {
    liNum: {
      type: Number,
      default: 5,
    },
    liHeight: {
      type: Number,
      default: 50,
    },
  },
};
</script>

<style lang="less" scoped>
.tan-box {
  width: 100%;
  height: 100%;
  position: relative;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    vertical-align: middle;

    li {
      position: relative;
      margin: 10px 0;
    }
  }
}
</style>