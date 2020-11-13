<template>
    <div class="box">
        <div class="header">header</div>
        <div class="left">left</div>
        <div class="right">right</div>
        <div class="footer">footer</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.box {
    width: 900px;
    height: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap
}
.header {
    width: 900px;
    height: 100px;
    background-color: red;
}
.left {
    height: 800px;
    background-color: pink;
    flex: 1;
}
.right{
    height: 800px;
    background-color: purple;
    flex: 4;
}
.footer {
    height: 100px;
    width: 900px;
    background-color: blue;
}
</style>