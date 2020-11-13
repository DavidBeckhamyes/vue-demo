<template>
<body>
  <ul>
    <li> 
      <a href="#">广州恒大</a>
    </li>
    <li>
      <a href="#">北京国安</a>
    </li>
    <li>
      <a href="#">上海上港</a>
    </li>
  </ul>
  <!-- 测试margin的对齐效果 -->
  <!-- <div class="div1">
  </div>-->
  <!-- 测试光标触发形状 -->
  <!-- <p>
    THIS IS Manchester United our own team ,please leave champion in here !
  </p> -->
  <!-- 测试外边距以及外边距合并 -->
  <!-- <div class="container">
    <div class="bd">
      <div class="pd">
        <div class="ct">我爱你中国</div>
      </div>
    </div>
  </div>

  <div class="container1">
    <div class="bd1">
      <div class="pd1">
        <div class="ct1">我爱你中国队</div>
      </div>
    </div>
  </div>-->
  <!-- 测试边框以及内边距 -->
  <!-- <table>
        <tr>
            <td>
                百灵鸟
            </td>
        </tr>
  </table>-->
</body>
</template>

<script>
import Vue from "vue";
export default {
  name: "Style2"
};
</script>

<style lang="less" scoped>
// td {
//     padding: 100px;
//     border-radius: 10px;
//     border-style: dotted;
//     background-color: aqua;
//     border: 2px solid green
// }
// .container {
//   margin: 0px;
//   .bd {
//     border-style: groove;
//     border-color: blueviolet;
//   }
//   .pd {
//     padding: 100px;
//   }
//   .ct {
//     height: 50px;
//     width: 50px;
//     background-color: yellow;
//   }
// }

// .container1 {
//   margin: 0px;
//   .bd1 {
//     border-style: groove;
//     border-color: blueviolet;
//   }
//   .pd1 {
//     padding: 100px;
//   }
//   .ct1 {
//     height: 50px;
//     width: 50px;
//     background-color: yellow;
//   }
// }
.div1 {
  width: 75%;
  height: 150px;
  background-color: blueviolet;
  // margin左右外边距设置为自动对齐
  // margin-left: auto;
  // margin-right: auto;
  // margin: 0px auto;
}
p {
  width: 250px;
  //设置光标触发形状
  cursor:cell;
  // 行高
  // line-height: normal;
}
ul {
  padding: 0px;
  margin: 0px;
  background-color: red;
  width: 50%;
  text-align: center;
li {
  list-style-type: none;
  // 列表一行显示，用于导航栏添加
  display: inline;
  // visibility:visible;
  a:link,a:visited {
    text-decoration: none;
  }
  a:active,a:hover {
    color: aqua
  }
}
}

</style>