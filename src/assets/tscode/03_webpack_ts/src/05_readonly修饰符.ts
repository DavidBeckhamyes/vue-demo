(() => {
    class Person {
        readonly name: string = '大猩猩'
        constructor(name: string = "元宝妹") {
            // 构造函数中可以初始化
            this.name = name
        }
        sayHi() {
            // this.name = "tom";  // error 类中的普通方法也不可以修改具有只读属性的成员变量
        }
    }

    let john = new Person('John')
    console.log(john)
    // john.name = 'peter' // error 外部无法对类中具有readonly修饰符的属性进行修改

    class Animal {
        constructor(readonly name: string = "元宝妹") {
            // 可以在构造函数里使用 readonly name: string 参数来创建和初始化 name 成员 为只读属性 外部不可修改。
            this.name = name
        }
    }
    const ani1 = new Animal("大猩猩")
})()