<template>
  <div class="container">
    <div id="slide">动画展示</div>
    <input type="button" value="播放" id="running" />
    <input type="button" value="暂停" id="pause" />
  </div>
</template>

<script>
window.onload = function() {
  document.getElementById("running").onclick = function() {
      document.getElementById("slide").style.animationPlayState = "running";
    // div.style.animationPlayState = "running";
  };
  document.getElementById("pause").onclick = function() {
    // div.style.animationPlayState = "paused";
    document.getElementById("slide").style.animationPlayState = "paused";
  };
};

export default {};
</script>

<style lang="less" scoped>
.container div {
  width: 100px;
  height: 100px;
  background-color: red;

  // 添加动画效果
  // 1.animation-name:指定动画名称
  animation-name: moveTest;
  // 3.设置动画的总耗时
  animation-duration: 2s;
  // 4.设置动画的播放次数,默认为1次,也可指定固定次数和infinite
  animation-iteration-count: 1;
  // 5.设置交替动画
  animation-direction: alternate;
  // 6.设置动画延迟
  animation-delay: 1s;
  // 7.设置动画结束时的状态，默认情况下，动画执行完毕之后，会回到原始状态
  // forwards: 会保留动画结束时的状态, 在有延迟的情况下, 并不会立刻进入到动画的初始状态
  // backwards: 不会保留动画结束时的状态, 在添加了动画延迟的前提下, 如果动画有初始状态, 那么会立刻进入到初始状态
  // both: 会保留动画结束时的状态, 在有延迟的情况下, 也会立刻进入到动画的初始状态
  animation-fill-mode: both;
  // 8. 动画的时间函数
  animation-timing-function: ease;
  // 9.设置动画的播放状态
  animation-play-state: paused;
}

// 2.添加关键帧属性
@keyframes moveTest {
  // 百分比是指整个动画耗时的百分比: 10s  from:0% to:100%
  0% {
    transform: translate(0, 0) rotate(45deg);
  }
  50% {
    transform: translate(0, 100px);
  }
  100% {
    transform: translate(100px, 200px);
  }
}
</style>