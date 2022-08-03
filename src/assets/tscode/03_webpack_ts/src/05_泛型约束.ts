// 如果我们直接对一个泛型参数取length属性,因为这个泛型根本就不知道它有这个属性
(() => {
    // 定义一个接口，用来约束将来的某个类型中必须要有length这个属性
    interface ILength {
        // 接口中有一个length属性
        length: number
    }
    function getLength<T extends ILength>(value: T): number {
        return value.length
    }
    console.log(getLength("得好好 wohat are you"))
})()