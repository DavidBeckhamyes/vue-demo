<template>
    <div>
        <ul>
            <li>首页</li>
            <li>商品分类</li>
            <li>我的订单</li>
            <li>最新商品</li>
            <li>联系我们</li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
*{
    padding: 0px;
    margin: 0px;
}
div {
    width: 500px;
    height: 400px;
    border: 1px solid #ccc;
    margin: 100px auto
}
div > ul {
    text-align: left;
    list-style-type: none;
    width: 100%;
    /* 如果将父元素设置了伸缩盒子, 子元素默认成为伸缩项 float margin */
    display: flex;
}
div > ul >li {
    /* 宽度 */
    /* 1.我们并知道li的具体数量 */
    /* 2.也不能直接设置% */
    line-height: 36px;
    text-align: center;
    height: 36px;
    background-color: #9fff9d;
    border-right: 1px solid #ccc;
    flex:1;
}
</style>