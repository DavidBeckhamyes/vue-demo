// 函数重载: 函数名相同,函数的参数和个数不同
(() => {
    function add(a: string | number, b: string | number): string | number {
        if (typeof a === 'string' && typeof b == 'string') {
            return a + b // 字符串拼接
        } else if (typeof a === 'number' && typeof b == 'number') {
            return a + b  // 数字相加
        }
    }
})()