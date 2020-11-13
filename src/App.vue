<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <!-- 通过ID以及属性Value做背景样式渲染练习 -->
    <!-- <p class="pclass">hello css!<a href="www.baidu.com">这里是百度</a></p>
    <p title="t">指定属性的颜色</p>
    <p title="te">这是新的P标签颜色</p> -->
    <!-- <h1>hello,jikexueyuan</h1>
    <h2>Hello,JiKeXueYuan</h2> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less' scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0b80f5;
  // 根路由节点的外边距
  margin-top: 0px;
  // 外部div的背景颜色设置
  // background-color: greenyellow;

  // 通过class以及包含的a标签渲染
  // .pclass a{
  //   color: red;
  // }

  //指定属性添加颜色
  // [title=t] {
  //   background-color: aquamarine;
  //   color: blue;
  // }
  //指定属性和value添加颜色
  // [title=te] {
  //   color: goldenrod;
  // }
  // h1{
  //   color: brown;
  //   text-align: center;
  //   text-transform: lowercase
  // }
  // h2{
  //   color: brown;
  //   text-align: center;
  //   text-transform: uppercase
  // }
}
</style>
