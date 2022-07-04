// 类类型: 实现接口
// 1. 一个类可以实现多个接口
// 2. 一个接口可以继承多个接口
(() => {
    interface IFly {
        fly(): void
    }

    interface ISwim {
        swim(): void
    }

    class Fly implements IFly {
        fly(): void {
            console.log("我会飞了！！！")
        }
    }

    const person1 = new Fly();
    person1.fly();

    // 和类一样，接口也可以相互继承。 
    // 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。

    interface IPerson extends IFly, ISwim {

    }

    class Person implements IPerson {
        swim(): void {
            console.log("我是一个正常人，我可以游泳！");
        }

        fly(): void {
            console.log("我是一个正常人，我可以飞！");
        }
    }

    const person2 = new Person();
    person2.swim();
    person2.fly();
})()
