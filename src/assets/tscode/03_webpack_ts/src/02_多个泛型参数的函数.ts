// 多个泛型参数的函数：函数中有多个泛型的参数
(() => {
    function getMsg<T, V>(a: T, b: V): [T, V] {
        return [a, b]
    }
    console.log(getMsg<string, number>("21", 2));
})()