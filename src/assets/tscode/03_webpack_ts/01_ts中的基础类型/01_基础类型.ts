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

    // 总结：ts中变量一开始是什么类型，那么后期赋值的时候，只能用这个类型的数据，是不允许用其他类型的数据赋值给当前的这个变量中

    console.log("####################################")

    let und: undefined = undefined;
    let nul: null = null;
    // undefined和null都可以作为其他类型的子类型，把undefined和null赋值给其他类型的变量的;如number类型的变量
    let num2: number = null;
    // let num2: number = undefined
    console.log(num2);

    console.log("####################################");
    // 数组类型
    // 数组定义方式1
    // 语法：let 变量名：数据类型[] = [值1,值2,值3]
    let arr1: number[] = [10, 20, 30, 40, 50]
    console.log(arr1);
    // 数组定义方式2：泛型的写法
    // 语法：let 变量名：Array<数据类型> = [值1,值2,值3]
    let arr2: Array<number> = [100, 200, 300]
    console.log(arr2)

    // 注意问题：数组定义后，里面的数据的类型必须和定义数组的时候的类型是一致的，否则有错误提示信息，也不会编译通过的

    // 元祖类型：在定义数组的时候，类型和数据的个数一开始就已经限定了。
    let arr3: [string, number, boolean] = ['小甜甜', 100.35, true]
    // 注意问题：元组类型在使用的时候，数据的类型的位置和数据的个数 应该和在定义元祖的时候的数据类型及位置应该是一致的
    console.log(arr3[0].split(""));

    console.log("#########################")
    // 枚举类型，枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，编号是从0开始的，一次的递增加1
    enum Color {
        red = 1,
        green,
        blue
    }
    // 定义一个Color的枚举类型的变量来接收枚举的值
    let color: Color = Color.red;
    console.log(color)
    console.log(Color.red, Color.green, Color.blue)
    console.log(Color[3])

    console.log("############################")
    // any类型
    let str: any = 100
    // 当一个数组中要存储多个数据，个数不确定，类型不确定，此时也可以使用any类型来定义数组
    let arr: any[] = ["哈好得很", 100, true]
    console.log(arr[2]);

    // void类型,在函数声明的时候,小括号的后面使用:void,代表的是该函数没有任何的返回值
    function showMsg(): void {
        console.log("success")
        // return null
        // return
        return undefined
    }
    console.log(showMsg())
    // 定义void类型的变量，可以接收一个undefined的值，但是意义不大

    console.log("###################")
    // Object类型
    // 定义一个函数,参数是Object类型,返回值也是Object类型
    function getObj(obj: object): object {
        console.log("参数是:", obj)
        return {
            name: "卡卡西",
            age: 27
        }
    }

    console.log(getObj({ name: '佐助', age: "男" }))

    console.log("#################")
    // 联合类型（Union Types）表示取值可以为多种类型中的一种
    // 需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
    function toString2(x: number | string): string {
        return x.toString()
    }
    console.log(toString2(213321313));
    // 需求2: 定义一个一个函数得到一个数字或字符串值的长度
    // function getLength(x: number | string) {

    //     // return x.length // error

    //     if (x.length) { // error
    //         return x.length
    //     } else {
    //         return x.toString().length
    //     }
    // }

    console.log("###############################")

    // 类型断言(Type Assertion): 可以用来手动指定一个值的类型
    // 语法:
    //     方式一: <类型>值
    //     方式二: 值 as 类型  tsx中只能用这种方式

    // 需求: 定义一个函数得到一个字符串或者数值数据的长度 *
    function getLength(x: number | string) {
        if ((<string>x).length) {
            return (x as string).length
        } else {
            return x.toString().length
        }
    }
    console.log(getLength('abcd'), getLength(1234))

    // 定义变量时赋值了, 推断为对应的类型
    let b9 = 123 // number
    // b9 = 'abc' // error

    // 定义变量时没有赋值, 推断为any类型
    let b10  // any类型
    b10 = 123
    b10 = 'abc'
})()