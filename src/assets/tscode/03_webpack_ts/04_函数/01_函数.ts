// 函数：封装了一些重复使用的代码，在需要的时候直接调用即可
(() => {
    // js中的书写方式---->在ts中同样可以这么写
    // 函数声明,命名函数
    // fuction add(x, y) { // 求和的函数
    //     return x + y
    // }
    // 函数表达式, 匿名函数
    // const add2 = function (x, y) {
    //    return x + y
    // }

    // ts中的书写方式
    // 函数声明,命名函数
    function add(x: string, y: string): string { // 求和的函数
        return x + y
    }
    // 函数表达式, 匿名函数
    const add2 = function (x: number, y: number): number {
        return x + y
    }
    // 函数的完整写法 
    // (x: number, y:number) => number 当前这个函数的类型
    const add3:(x:number, y:number) => number = function(x:number, y:number):number {
        return  x + y
    }
})()