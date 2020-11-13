<template>
    <div>动画效果</div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    // div {
    //    width: 100px;
    //    height: 100px;
    //    background-color: blueviolet;
    //    transition: width 2s,height 2s, transform 2s; 
    // }
    // div:hover {
    //     width: 200px;
    //     height: 200px;
    //     transform: rotate(360deg);
    // }
    div {
        width: 100px;
        height: 100px;
        background-color: blueviolet;
        position: relative;
        animation: anmi 5s infinite alternate
    }
    @keyframes anmi{
        25% {
            left: 100px;
            top: 0px;
            background-color: aqua
        }
        50%{
            left: 100px;
            top:100px;
            background-color: red;
        }
        75%{
            left: 0px;
            top: 100px;
            background-color: yellow;
        }
        100%{
            left: 0px;
            top:0px;
            background-color: forestgreen
        }
    }
</style>