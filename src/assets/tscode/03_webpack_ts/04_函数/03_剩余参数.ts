// 剩余参数(rest参数)
// 剩余参数是放在所有参数声明的最后
(()=> {
    // ...args:string[] ---> 剩余的参数，放在了一个字符串的数组中，args里面
    function showMsg(str1: string, ...args: string[]) {
        console.log(str1);
        console.log(...args);
    }

    showMsg("a", "b", "c", "d", "e")
})()