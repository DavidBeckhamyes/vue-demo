// 接口是对象的状态(属性)和行为(方法)的抽象
(() => {
    // 需求: 创建人的对象, 需要对人的属性进行一定的约束

    // id是number类型, 必须有, 只读的
    // name是string类型, 必须有
    // age是number类型, 必须有
    // sex是string类型, 可以没有

    // 定义人的接口
    interface IPerson {
        id: number,
        readonly name: string,  // 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly 来指定只读属性
        age: number,
        sex?: string  // 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个 ? 符号。
    }

    // 类型检查器会查看对象内部的属性是否与IPerson接口描述一致, 如果不一致就会提示类型错误。
    const person1: IPerson = {
        id: 1,
        name: 'tom',
        age: 20,
        sex: '男'
    }

    // 可选属性的好处之一是可以对可能存在的属性进行预定义;
    // 好处之二是可以捕获引用了不存在的属性时的错误。
    const person2: IPerson = {
        id: 1,
        name: "jerry",
        age: 18
    }
    // person2.name = "webo"; // error 添加只读属性表示一旦赋值后再也不能被改变了。
})()