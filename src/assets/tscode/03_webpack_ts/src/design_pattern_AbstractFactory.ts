// 设计模式之抽象工厂模式
(() => {
    interface Factory {
        createProductA(): ProductA;
        createProductB(): ProductB;
    }

    class Factory1 implements Factory {
        createProductA(): ProductA {
            return new ProductA();
        }
        createProductB(): ProductB {
            return new ProductB();
        }
    }

    class Factory2 implements Factory {
        createProductA(): ProductA {
            return new ProductA();
        }
        createProductB(): ProductB {
            return new ProductB();
        }
    }

    interface Product {
        info(): void
    }

    class ProductA implements Product {
        info(): void {
            console.log("产品的信息:A")
        }
    }

    class ProductB implements Product {
        info(): void {
            console.log("产品的信息:B")
        }
    }

    const factory1: Factory1 = new Factory1();
    const prdouctA: Product = factory1.createProductA();
    prdouctA.info();

    const factory2: Factory2 = new Factory2();
    const prdouctB: Product = factory2.createProductA();
    prdouctB.info();
})()
