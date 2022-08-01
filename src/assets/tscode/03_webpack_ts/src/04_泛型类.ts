(() => {
    // 定义一个类，类中的属性值的类型是不确定，方法中的参数及返回值的类型也是不确定
    // 定义一个泛型类
    class GenericNumber<T> {
        // 默认的属性值的类型是泛型
        defaultValue: T;
        add: (x: T, y: T) => T;
    }

    // 在实例化对象的时候，再确定泛型的类型
    const g1 = new GenericNumber<number>();
    // 设置属性值
    g1.defaultValue = 100;
    // 相加的方法
    g1.add = function (x: number, y: number): number {
        return x + y;
    }
    console.log(g1.add(100, 200))
})()