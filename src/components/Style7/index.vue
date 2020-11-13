<template>
    <div class="container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container div{
    width: 100px;
    height: 100px;
    background-color: red;
    margin-left: 200px;
    margin-top: 10px;
    transition: transform 2s
}
/* 3d移动 */
/* .container div:first-of-type:active {
    transform: translate3d(400px,400px,0)
} */
/* 3d缩放 */
/* .container div:nth-child(2):active {
    transform: scale3d(2,1.2,8)
} */
/* 3d旋转 */
.container div:nth-child(3):active {
    transform: rotate3d(0,0,1,45deg)
}

</style>