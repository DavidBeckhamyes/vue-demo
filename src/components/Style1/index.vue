<template>
  <div>
    <!-- 列表 -->
    <!-- <p>我爱你中华人民共和国</p>
    <ul>
        <li>苹果</li>
    </ul>
    <ul>
        <li>香蕉</li>
    </ul>
    <ul>
        <li>橘子</li>
    </ul>
    <ul>
        <li>梨</li>
    </ul>-->
    <!-- 表格 -->
    <!-- <table id="tb">
      <tr>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
      </tr>
      <tr>
        <td>小明</td>
        <td>男</td>
        <td>20</td>
      </tr>
      <tr>
        <td>小明</td>
        <td>男</td>
        <td>20</td>
      </tr>
      <tr>
        <td>小明</td>
        <td>男</td>
        <td>20</td>
      </tr>
    </table>-->
    <div class="container">
        <div class="position1">
        </div>
        <div class="position2">
        </div>
        <div class="position3">
        </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Style1",
  //测试布局效果
//   mounted: function() {
//         for (var i =0; i<50; i++) {
//             document.write(i+"<br/>")
//         }
// }
};
</script>

<style lang="less" scoped>
/* p {
        font-size: 40px;
        font-family: Arial, Helvetica, sans-serif;
    }
    ul li {
        list-style-type: decimal;
        list-style-position: inside
    } */
/* table th {
  border: 10px solid goldenrod;
  border-collapse: collapse;
  width: 400px;
  height: 100px;
} */
.container {
    width: 140px;
    height: 500px;
    background-color: silver;
    /* position: static; */
    /* left: 50px; */
    .position1 {
        width: 50px;
        height: 100px;
        background-color: aqua;
        float: left;
    }
    .position2 {
        width: 50px;
        height: 80px;
        background-color: yellow;
        float: left;
        clear: both;
    }
    .position3 {
        width: 50px;
        height: 80px;
        background-color: blanchedalmond;
        float: left;
    }
}
</style>