// 基础类型
(() => {
    // 基本语法
    // let 变量名: 数据类型 = 值

    // 布尔类型 ------->boolean
    let flag: boolean = true;
    console.log(flag)

    // 数字类型 ------->number
    let a1: number = 10 // 十进制
    let a2: number = 0b1010  // 二进制
    let a3: number = 0o12 // 八进制
    let a4: number = 0xa // 十六进制

    // 字符串类型 ------>string
    let name: string = 'tom'
    name = 'jack'
    // name = 12 // error
    let age: number = 12
    const info = `My name is ${name}, I am ${age} years old!`
    console.log(info)
})()