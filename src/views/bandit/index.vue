<template>
  <div class="box">
    <p class="box-item" v-for="(item, index) in discountNum" :key="index">
      <span class="box-number">0123456789</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "bandit",
  data() {
    return {
      discountNum: ["0", "0"], // 折扣数
      numberArr: [], // 数位
      priceArr: [7, 5],
    };
  },
  mounted() {
    this.numberArr = document.getElementsByClassName("box-number");
    this.polling();
  },
  methods: {
    // 轮询数位
    polling() {
      var timesRun = 0;
      var interval = setInterval(() => {
        for (let index = 0; index < this.numberArr.length; index++) {
          let random = this.getRandomNumber(0, 9);
          let elem = this.numberArr[index];
          elem.style.transform = `translate(-50%, -${random * 10}%)`;
        }
        timesRun++;
        if (timesRun == 20) {
          for (let index = 0; index < this.numberArr.length; index++) {
            let elem = this.numberArr[index];
            elem.style.transform = `translate(-50%, -${
              this.priceArr[index] * 10
            }%)`;
          }
          clearInterval(interval);
        }
      }, 100);
    },
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
};
</script>

<style lang="less" scoped>
.box-item {
  position: relative;
  display: inline-block;
  width: 54px;
  height: 82px;
  background: blue;
  font-size: 62px;
  line-height: 82px;
  position: relative;
  text-align: center;
  writing-mode: vertical-lr;
  text-orientation: upright;
  overflow: hidden;
}
.box-item span {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  transition: transform .05s ease-in-out;
  letter-spacing: 10px;
}
</style>