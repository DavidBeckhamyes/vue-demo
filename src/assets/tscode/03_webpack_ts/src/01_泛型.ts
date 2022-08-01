// 在定义函数，接口，类的时候不能预先确定要使用的数据类型，而是在使用函数，接口，类的时候才能确定数据类型
(() => {
    function getArr<T>(value: T, count: number): T[] {
        // 根据数据和数量产生一个数组
        const arr: T[] = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }

    console.log(getArr<string>("add", 3));
    console.log(getArr<number>(2, 3));
})()