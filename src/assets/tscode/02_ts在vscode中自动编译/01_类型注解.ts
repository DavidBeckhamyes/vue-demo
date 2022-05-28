// 类型注解：是一种轻量级的为函数或者变量添加的约束
(() => {
    function showMsg(str: string) {
        return "床前明月光，" + str;
    }
    let str = "疑是地上霜";
    console.log(showMsg(str));
})();
