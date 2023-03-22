// 模块作用域
// -优点:防止全局变量被污染
const userName = "xiaoming";

function sayHello() {
    console.log("大家好,我叫" + userName);
}