<template>
  <div class="box">
    <div class="first"></div>
    <div class="second"></div>
    <div class="third"></div>
    <div class="fourth"></div>
    <div class="fifth"></div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.box {
  width: 900px;
  height: 600px;
  // box-sizing: border-box;
  border: 1px solid red;
  margin: 0 auto;
  // 设置父容器为伸缩盒子： 会使每一个子元素自动变成伸缩项
  // 当子元素的宽度和大于父容器宽度的时候, 子元素会自动平均收缩
  display: flex;
  // 设置子元素在主轴方向上的排列方式
  // flex-start:让子元素从父元素的起始位置开始排列
  // flex-end: 让子元素从父元素的结束位置开始排列
  // center: 让子元素从父元素的中间位置开始排列
  // space-between: 左右对齐父元素的开始和结束, 中间平均分布, 产生相同的间距
  // space-around: 将多余的空间平均分布在每一个子元素的两边 margin: 0 auto
  justify-content: space-around;

  // flex-flow: 是flex-wrap和flex-direction的组合
  // flex-wrap: 控制子元素是否换行显示,默认不换行
  //             nowrap:不换行--则收缩
  //             wrap-reverse:翻转, 原来是从上到下, 翻转过来是从下到上
  // flex-wrap: wrap;
  // flex-direction: 设置子元素的排列方向: 就是用来主轴方向, 默认主轴方向是row(水平方向)
  // row:水平排列方向, 从左到右
  // row-reverse:水平排列方向, 从右到左
  // column: 垂直排列方向, 从上到下
  // column-reverse: 垂直排列方向, 从下到上
  // flex-direction: column
  flex-flow: nowrap row;
}
.first {
  width: 200px;
  height: 200px;
  background-color: red;
  // flex-grow: 可以用来扩展子元素的宽度: 设置当前元素应该占据剩余空间的比例值
  // 比例值计算: 当前空间的flex-grow/所有兄弟元素的flex-grow的和  flex-grow的默认是0:说明子元素不会去占用剩余空间
  //   flex-grow: 1;
  //   flex-shrink: 定义收缩比例, 通过设置的值来计算收缩空间 当前空间的flex-grow/所有兄弟元素的flex-grow的和, 默认值为1
  flex-shrink: 1;
}
.second {
  width: 200px;
  height: 200px;
  background-color: green;
  flex-shrink: 0;
}
.third {
  width: 200px;
  height: 200px;
  background-color: blue;
  flex-shrink: 0;
}
.fourth {
  width: 200px;
  height: 200px;
  background-color: yellow;
  flex-shrink: 0;
}
.fifth {
  width: 200px;
  height: 200px;
  background-color: pink;
  flex-shrink: 0;
}
</style>