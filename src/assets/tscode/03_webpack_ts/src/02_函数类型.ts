// 接口能够描述 JavaScript 中对象拥有的各种各样的外形。 
// 除了描述带有属性的普通对象外，接口也可以描述函数类型。
// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。
// 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
(() => {
    // 接口可以描述函数类型(参数的类型与返回的类型)
    interface searchFunction {
        // 定义一个调用签名
        (source: string, subString: string): boolean
    }

    // 这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。
    // 下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。
    const searchString: searchFunction = function (source: string, subString: string): boolean {
        return source.search(subString) > -1
    }

    console.log(searchString("我爱你鑫鑫", "鑫"))
})()