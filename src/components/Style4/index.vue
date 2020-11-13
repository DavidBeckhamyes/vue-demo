<template>
  <div id="love">
    <div class="ori">这是原有得样式</div>
    <br />
    <div class="cur">这是改变后的样式</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  height: 100px;
  width: 100px;
  background-color: blue;
}
.cur {
  /* 移动 */
  /* transform: translate(200px, 100px); */
  /* -webkit-transform: translate(200px, 100px); safari chrome */
  /* -ms-transform: translate(200px, 100px); IE */
  /* -o-transform: translate(200px, 100px); opera */
  /* -moz-transform: translate(200px, 100px); Firefox */

  /* 旋转 */
  /* transform: rotate(180deg);
  -webkit-transform: rotate(180deg); */

  /* 缩放 */
  /* margin-top: 200px;
  transform: scale(1.5,2);
  -webkit-transform: scale(1.5,2); */

  /* 倾斜 */
  transform: skew(20deg,30deg);
  -webkit-transform: skew(20deg,30deg);
}
</style>