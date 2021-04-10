<template>
  <div class="container">
    <!-- 圆角效果 -->
    <div class="nav">
      <!-- <div class="left"></div>
            <div class="center"></div>
            <div class="right"></div> -->
    </div>
    <div class="demo demo1">中华人民共和国</div>
    <div class="demo demo2">中华人民共和国</div>
    <div class="demo demo3">中华人民共和国</div>
    <div class="demo demo4">中华人民共和国</div>
    <div class="demo demo5">中华人民共和国</div>
    <div class="demo demo6">中华人民共和国</div>
    <div class="demo demo7">中华人民共和国</div>
  </div>
  <!-- 添加阴影 text-shadow:offsetX offsetY blur color-->
</template>

<script>
export default {
  name: "style18",
  data() {
    return {
      marqueeStringArr: [
        "詹凌瀚订阅了南极宾馆节省了15元",
        "郑成功预定了香格里拉节省了23元",
        "玄烨入住了紫禁城皇家大酒店节省了300元",
      ],
    };
  },
  methods: {
    handleText() {
      let result = [];

      this.marqueeStringArr.forEach((marquee) => {
        var tmpArr = [];
        var index1 = marquee.indexOf("节省");
        tmpArr.push(marquee.slice(0, index1));
        // 匹配字符串中的数字正则
        var num = marquee.match(/\d+(\.\d+)?/g);
        // 防止酒店名字中带有数字，故取最后一位
        var index2 = marquee.indexOf(num[num.length - 1]);
        tmpArr.push(marquee.slice(index1, index2));
        tmpArr.push(marquee.slice(index2, marquee.length));
        result.push(tmpArr);
      });
      console.log(result);
    },
  },
  mounted() {
    this.handleText();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.nav {
  height: 100px;
  width: 200px;
  background-color: red;
  margin: 100px auto;
  /* 添加边框圆角 */
  /* 1. 设置一个值: 四个角的圆角值都一样 */
  /* border-radius: 50px; */
  /* 2.设置两个值 第一个值控制左上/右下, 第二个值控制右上/左下*/
  /* border-radius: 10px 30px; */
  /* 3.设置三个值, 第一个值控制左上, 第二个值控制右上/左下, 第三个值控制右下 */
  /* border-radius: 10px 20px 30px; */
  /* 4. 设置四个值: 左上 右上 右下 左下 */
  /* border-radius: 4px 5px 6px 7px */
  /* 添加/用来设置当前各个不同方向的半径值 水平x方向/垂直y方向*/
  border-radius: 40px;
}
.demo {
  width: 600px;
  padding: 30px;
  background-color: #666;
  margin: 30px auto;
  text-align: center;
  font: bold 80px/100% "微软雅黑";
  color: #fff;
}
.demo1 {
  text-shadow: -2px -2px 2px red;
}
.demo2 {
  text-shadow: 0px 0px 30px #fff;
}
/* 多层阴影效果 */
.demo3 {
  text-shadow: 0px 0px 30px #fff, 0px 0px 50px red;
}
.demo4 {
  color: black;
  text-shadow: 0px 1px 0px #fff;
}
/* 浮雕立体效果 */
.demo5 {
  color: #fff;
  text-shadow: -1px -1px 0px #eee, -2px -2px 0px #ddd, -3px -3px 0px #ccc;
}
.demo6 {
  color: transparent;
  text-shadow: 0px 0px 8px hsla(30, 100%, 50%, 1);
}
</style>