<template>
  <div class="container">
    <div class="wrapper">
      <div class="heading">
        <div class="heading_nav">
          <div class="heading_title">极客学院</div>
          <div class="heading_navbar">
            <ul>
              <li>
                <a href="#">首页</a>
              </li>
              <li>
                <a href="#">职业课程</a>
              </li>
              <li>
                <a href="#">技术问答</a>
              </li>
              <li>
                <a href="#">VIP会员</a>
              </li>
            </ul>
          </div>
          <div class="heading_img">
            <img src="../../assets/timg.jpg" />
          </div>
          <div class="heading_spotlight">
            <form>
              <input type="text" />
            </form>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="body_title">
          <h3>欢迎来到极客学院</h3>
        </div>
        <div class="body_content">在这里提升技术水平</div>
        <hr />
        <hr />
      </div>
    </div>

    <div class="footing">@极客学院</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
* {
  margin: 0px;
  padding: 0px;
}
.container {
  background-color: snow;
}
.wrapper {
  width: 80%;
  height: 1500px;
  background-color: antiquewhite;
  margin: 0 auto;
}
.heading {
  margin: 0px auto;
  width: 100%;
  height: 90px;
  background-color: snow;
}
.heading_nav {
  padding-bottom: 30px;
  padding-top: 30px;
  width: 100%;
  height: 30px;
  position: relative;
}
.heading_title {
  float: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  color: burlywood;
}
ul {
  padding-left: 40px;
  float: left;
  list-style-type: none;
  padding-top: 6px;
  padding-bottom: 6px;
}
li {
  display: inline;
  padding-left: 10px;
}
a:link,
a:visited {
  font-weight: bold;
  color: darkgray;
  text-align: center;
  padding: 6px;
  text-decoration: none;
}
a:hover,
a:active {
  color: dimgray;
}
.heading_img img{
  border-radius: 30px;
  width: 26px;
  height: 26px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  float: right;
}
.heading_spotlight form {
  float: right;
  width: 100px;
  height: 26px;
  position: relative;
  margin-right: 100px;
}
form input {
  height: 26px;
  border-radius: 30px;
}
.body {
  text-align: left;
  padding: 30px;
}
.body_content {
  margin-top: 20px;
  margin-bottom: 20px;
}
.footing {
  padding-top: 20px;
  text-align: center;
  font-size: 10px;
  color: darkgray;
}
</style>