// 设计模式之装饰器模式
(() => {
    abstract class Person {
        protected name: string;

        constructor(name: string) {
            this.name = name;
        }

        public abstract operation(): void; // 职责
    }

    class Student extends Person {
        constructor(name: string) {
            super(name);
        }

        public operation(): void {
            console.log(this.name + "的职责:学习");
        }
    }

    abstract class Decoration extends Person {
        protected person: Person
        constructor(name: string) {
            super(name);
        }
    }

    class DecorationA extends Decoration {
        constructor(person: Person, name?: string) {
            super(name);
            this.person = person
        }
        public operation(): void {
            this.person.operation();
            console.log("加上孝敬父母");
        }
    }

    class DecorationB extends Decoration {
        constructor(person: Person, name?: string) {
            super(name);
            this.person = person
        }
        public operation(): void {
            this.person.operation();
            console.log("加上抚养孩子");
        }
    }

    let zhangsan: Person = new Student("张三");
    zhangsan = new DecorationA(zhangsan);
    zhangsan = new DecorationB(zhangsan);
    // const zhangsan = new DecorationA(new Student("张三")) // 对象链
    zhangsan.operation();
})()