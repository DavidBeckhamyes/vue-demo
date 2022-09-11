// 设计模式之工厂方法模式
(() => {
    interface Factory {
        createProduct(): Product
    }

    class FactoryA implements Factory {
        createProduct(): Product {
            return new ProductA()
        }
    }

    class FactoryB implements Factory {
        createProduct(): Product {
            return new ProductB()
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

    const factoryA: Factory = new FactoryA();
    const productA: Product = factoryA.createProduct();
    productA.info();

    const factoryB: Factory = new FactoryB();
    const productB: Product = factoryB.createProduct();
    productB.info();

})()
