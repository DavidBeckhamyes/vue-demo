(() => {
    class Person {
        // 声明属性
        name: string;
        gender: string;
        age: number;

        // 构造方法
        constructor(name: string, gender: string, age: number) {
            this.age = age;
            this.gender = gender;
            this.name = name;
        }

        // 一般方法
        greet(str: string): string {
            return 'Hello My name is' + this.name + str
        }
    }

    const person1 = new Person("詹凌瀚", "男", 22);
    console.log(person1.greet("亲爱的朋友们你们好啊"));
})()