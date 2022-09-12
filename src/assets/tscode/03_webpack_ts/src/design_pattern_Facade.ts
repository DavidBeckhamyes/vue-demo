// 设计模式之外观模式
(() => {
    class Facade {
        subSystemOne: SubSystemOne;
        subSystemTwo: SubSystemTwo;
        subSystemThree: SubSystemThree;
        constructor() {
            this.subSystemOne = new SubSystemOne();
            this.subSystemTwo = new SubSystemTwo();
            this.subSystemThree = new SubSystemThree();
        }
        methodA(): void {
            this.subSystemOne.methodOne();
        }
        methodB(): void {
            this.subSystemTwo.methodTwo();
        }
        methodC(): void {
            this.subSystemThree.methodThree();
        }
    }

    class SubSystemOne {
        methodOne(): void {
            console.log("执行子系统一的功能");
        }
    }

    class SubSystemTwo {
        methodTwo(): void {
            console.log("执行子系统二的功能");
        }
    }

    class SubSystemThree {
        methodThree(): void {
            console.log("执行子系统三的功能");
        }
    }

    const facade: Facade = new Facade();
    facade.methodA();
    facade.methodB();
    facade.methodC();

})()