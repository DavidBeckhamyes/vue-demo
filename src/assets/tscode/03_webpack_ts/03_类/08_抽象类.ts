// 抽象类：包含抽象方法(抽象方法一般没有任何的具体内容的实现),也可以包含实例方法。
// 抽象类是不能被实例化,为了让子类进行实例化及实现内部的抽象方法
(() => {
    abstract class Animal {
        // 抽象方法
        abstract eat();
        // 实例方法
        run() {
            console.log("动物都可以跑")
        }
    }

    // 定义一个子类(派生类)Dog
    class Dog extends Animal {
        // 重新实现抽象类中的抽象方法,此时这个方法就是当前Dog类的实例方法了 
        eat() {
            console.log("狗吃骨头")
        }
    }

    // 不能实例化抽象类的对象
    // const animal: Animal = new Animal();
})()