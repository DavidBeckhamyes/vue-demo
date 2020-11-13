<template>
  <div class="container">
    <title>选择器-兄弟伪类</title>
    <ul>
        <li class="first">前端与移动开发</li>
        <li>java</li>
        <li>javascripty</li>
        <li>c++</li>
        <li>平面设计</li>
    </ul>
    <!-- 边框阴影: box-shadow: h v blur spread扩展 color -->
    <!-- 文本阴影: text-shadow: offsetX offsetY blur color inset-->
    <!-- h: 水平方向偏移值
    v: 垂直方向的偏移值
    blur: 模糊--可选, 默认0
    spread: 阴影的尺寸, 扩展和收缩阴影的大小--可选 默认0
    color: 颜色--可选, 默认黑色
    inset: 内阴影--可选 -->
    <div class="shadow"></div>
    <!-- 伪类练习 -->
    <div class="before">
      <div></div>
      <div></div>
    </div>
    <p>眉毛上的泪会和汗水.<br>你不努力就会被别人超越</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.first {
    color: red
}
// 兄弟伪类:获取当前
// +: 获取当前元素的相邻的满足条件的元素
// ~: 获取当前元素的满足条件的兄弟元素
// 下面这句样式说明查找: 添加了.first样式的标签的相邻的li元素
// 1. 相邻
// 2. 必须是指定类型的元素
.first + li {
    color: blue
}
// 下面的样式查找添加了.first样式的元素的所有兄弟li元素
// 1. 必须是指定类型的元素
.first ~ li {
    color: pink
}
.shadow {
  width: 200px;
  height: 200px;
  background-color: orange;
  margin: 0 auto;
  // 添加边框阴影
  box-shadow: 3px 3px 5px #ccc inset;
}
.before {
  padding: 100px;
}
.before div:nth-of-type(1) {
  width: 300px;
  height: 200px;
  background-color: red;
  float: left;
}
.before div:nth-of-type(2) {
  width: 100px;
  height: 200px;
  background-color: blue;
  float: left;
  position: relative;
}
.before div:nth-of-type(2)::before {
  content: ""; //必须要加
  // 默认是行内元素, 如果想设置宽高, 就必须转换成块级元素
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 10px;
  left: -10px;
  top: -10px;
}
.before div:nth-of-type(2)::after {
  content: ""; //必须要加
  // 默认是行内元素, 如果想设置宽高, 就必须转换成块级元素
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 10px;
  left: -10px;
  bottom: -10px;
}
//获取第一个字符:实现首字下沉
p::first-letter {
  color: red;
  font-size: 30px;
  float: left;  //文本环绕
}
//获取第一行内容: 如果设置了::first-letter,那么无法同时设置它的样式
p::first-line {
  text-decoration: underline;
}
p::selection {
  background-color: pink;
  // 它只能设置显示的样式, 而不能设置内容大小, 如font-size
}
</style>