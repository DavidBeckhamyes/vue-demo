<template>
    <div class="box">
        <div class="left"></div>
        <div class="right"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.box {
    width: 100%;
    height: 500px;
    background-color: #ccc;
    margin: 0 auto;
    /* 设置父容器为伸缩盒子 */
    display: flex;
    /* 设置子元素在主轴方向上的排列方式 */
    justify-content: flex-start;
}
.left {
    /* flex是用来设置当前伸缩子项占据剩余空间的比例值 */
    height: 500px;
    background-color: red;
    flex: 1;
}
.right{
    height: 500px;
    background-color: blue;
    flex: 4;
}
</style>