// 可选参数:函数在声明的时候，内部的参数使用了“?”进行修饰，那么表示该参数可以传入也可以不传入。
// 默认参数:函数在声明的时候，内部的参数有自己的默认值，此时这个参数叫做默认参数。
(() => {
// 定义一个函数，如果传入姓氏和名字，返回姓名
// 需求：如果不传入任何内容，则返回默认的姓氏
// 需求：如果只传入姓氏，则返回姓氏
// 需求：如果传入姓氏和名字，则返回姓名

const getFullName = function(firsName: String="詹", lastName?: String) : String {
    if (lastName) {
        return firsName + "" + lastName
    } else {
        return firsName
    }
}
console.log(getFullName("诸葛","孔明"));
})()