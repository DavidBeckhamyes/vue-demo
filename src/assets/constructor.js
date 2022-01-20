function Person(name, age) {
    // this代表每一个实例
    this.name = name;
    this.age = age;
}

// 实例方法
Person.prototype.greet = function () {
    console.log("Hello this is" + this.name + ".");
}

const person1 = new Person("David", 29);
console.log("person1的名字是", person1.name);
console.log("person1的年龄是", person1.age);
person1.greet();

function func() {

}
console.log(func.prototype)
console.log(Person.prototype)

console.log(person1.greet === Person.prototype.greet) // true
console.log(person1.hasOwnProperty("greet"))  // false

// greet方法是在Person的原型上
console.log(Object.getPrototypeOf(person1))
// js构造函数式的面向对象编程，其实是通过把每个实例的原型挂接在构造函数的原型上，同时在生成实例的过程中，运行构造函数，通过this关键字就把传入的参数挂载到了新生成的实例的属性上
console.log(Object.getPrototypeOf(person1) == Person.prototype)

console.log(Object.getPrototypeOf(person1)  === Person)

console.log(person1.__proto__)

// Person.prototype => person1.__proto__ === Object.getPrototypeOf(person1)

