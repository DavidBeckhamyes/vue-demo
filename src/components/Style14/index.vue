<template>
    <div class="box">
        <div class="first">bb</div>
        <div class="second">gg</div>
        <div class="third">fontsg</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.box {
    height: 600px;
    border: 1px solid red;
    margin: 0 auto;
    display: flex;
    // flex-direction: column;
    justify-content: space-around;
    // align-items:设置子元素(伸缩项)在侧轴方向上的对齐方
    // center:设置在侧轴方向上居中对齐
    // flex-start:设置在侧轴方向上顶对齐
    // flex-end: 设置在侧轴方向上底对齐
    // stretch: 让子元素在侧轴方向上进行拉伸, 填充满整个侧轴方向 >>默认值
    // baseline: 文本基线
    align-items: center;
}
.first{
    width: 200px;
    height: 200px;
    background-color: red;
    // 设置单个元素在侧轴方向上的对齐方式
    align-self: flex-end;
}
.second {
    width: 200px;
    height: 200px;
    // font-size: 100px;
    background-color: green;
}
.third {
    width: 200px;
    height: 200px;
    background-color: blue;
}

</style>