<template>
    <div class="box">
        <div class="front">front</div>
        <div class="back">back</div>
        <div class="left">left</div>
        <div class="right">right</div>
        <div class="top">top</div>
        <div class="bottom">bottom</div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="less" scoped>
.box {
    width: 200px;
    height: 200px;
    margin: 100px auto;
    position: relative;
    // 让子元素保留3d变换后的效果，保留在父元素
    transform-style: preserve-3d;
    transform: rotate3d(1,1,0,-45deg);
    perspective: 120px;
    perspective-origin: -150px 0;
}
.box > div {
    width: 200px;
    height: 200px;
    position: absolute;
}
.front {
    transform: translateZ(100px);
    background-color: red
}
.back {
    background-color: green;
    transform: translateZ(-100px) rotateY(180deg);
}
.left {
    background-color: blue;
    transform: translateX(-100px) rotateY(-90deg)
}
.right {
    background-color: pink;
    transform: translateX(100px) rotateY(90deg)
}
.top {
    background-color: purple;
    transform: translateY(-100px) rotateX(90deg)
}
.bottom {
    background-color: orange;
    transform: translateY(100px) rotateX(-90deg)
}
</style>