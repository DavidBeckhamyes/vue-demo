(() => {
    class Person {
        // 静态属性
        static name1: string = "小明"
        constructor(name: string) {
            // 此时this是实例对象,name1是静态属性,不能通过实例对象直接调用静态属性来使用
            // this.name1 = name;
        }
        static sayHi() {
            console.log("萨瓦迪卡")
        }
    }

    const person: Person = new Person("小甜甜")
    // console.log(person.name1) error 原因同上
    Person.name1 = "大黄"
    console.log(Person.name1);
})()