<template>
  <div class="card-wrapper">
    <div
      class="card"
      v-for="(item, index) in num"
      :key="index"
      @click="turn(index)"
    >
      <div class="cover">cover</div>
      <div class="back">back</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "overturnCard",
  data() {
    return {
      num: 3,
      coverList: [],
      backList: [],
    };
  },
  mounted() {
    let coverDomList = document.getElementsByClassName("cover");
    let coverList = Array.prototype.slice.call(coverDomList, 0);
    this.coverList = coverList;
    let backDomList = document.getElementsByClassName("back");
    let backList = Array.prototype.slice.call(backDomList, 0);
    this.backList = backList;
  },
  methods: {
    turn(index) {
      this.coverList[index].style.transform = "rotateY(180deg)";
      this.backList[index].style.transform = "rotateY(0deg)";
    },
  },
};
</script>

<style lang="less" scoped>
.card-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1db7c2;
  .card {
    position: relative;
    width: 100px;
    height: 100px;
    perspective: 1000px; // 透视深度
    margin: 0 5px;

    .cover,
    .back {
      background-color: rgba(255, 255, 255, 0.5);
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      backface-visibility: hidden; // 翻转到背面就看不到了
      transition: all 2s ease-in;
      border-radius: 8px;
      box-shadow: 2px 4px 40px #999;
    }
    .cover {
      transform: rotateY(0deg);
    }
    .back {
      transform: rotateY(-180deg);
    }
  }
  // .card:hover .cover {
  //   transform: rotateY(180deg);
  // }
  // .card:hover .back {
  //   transform: rotateY(0deg);
  // }
}
</style>