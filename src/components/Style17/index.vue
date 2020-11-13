<template>
    <div class="container">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
 *{
     margin: 0px;
     padding: 0px;
 }
 ul {
     width: 500px;
     height: 600px;
     margin: 100px auto;
     list-style-type: none;
     border-right: 1px solid #ccc;
     border-bottom: 1px solid #ccc;
 }
 ul > li {
     width: 100px;
     height: 100px;
     line-height: 100px;
     float: left;
     box-sizing: border-box;
     border-left: 1px solid #ccc;
     border-top: 1px solid #ccc;
     background-color: #fff;
     text-align: center;
 }
//  相对于父元素的结构伪类
// E: first-child: 查找E元素的父级元素中的第一个E元素。 在查找的时候并不会限制查找的元素的类型
// 下面这句样式查找: li的父元素中的第一个li元素
// 1. 相对于当前指定元素的父元素
// 2. 查找的类型必须是指定的类型
li:first-child {
    color: red;
}
// E: last-child: 查找E元素的父元素中最后一个指定类型的子元素
li:last-child{
    color: green;
}
// 查找的时候限制类型 first-of-type
// 1.也是相对于父元素
// 2.在查找的时候只会查找满足类型条件的元素, 过滤掉其他类型的元素
li:first-of-type {
    color: red;
}
li:last-of-type {
    color: purple;
}
// 指定索引位置 nth-child(从1开始的索引||关键字||表达式)
li:nth-child(5) {
    background-color: lightblue;
}
// 偶数个元素添加背景  even: 偶数 odd:奇数
// li:nth-child(even) {
//     background-color: orange;
// }
// li:nth-child(odd) {
//     background-color: pink;
// }
li:nth-of-type(even) {
    background-color: orange;
}
li:nth-of-type(odd) {
    background-color: pink;
}

//想为最前面的5个元素添加样式
//n: 默认取值范围为0~子元素的长度, 但是当n<=0时, 选取无效
//0>>5
//1>>4
//...
//5>>0
li:nth-of-type(-n+5) {
    background-color: black
}
//空值: 没用任何的内容, 连空格都没有
li:empty {
    background-color: red
}
</style>