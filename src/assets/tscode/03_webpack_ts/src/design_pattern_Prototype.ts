// 设计模式之原型模式
(() => {
    interface Prototype {
        clone(): object;
    }

    class Product implements Prototype {
        private id: number;
        private price: number;

        constructor(id?: number, price?: number) {
            this.id = id;
            this.price = price;
        }

        public getId(): number {
            return this.id;
        }

        public getPrice(): number {
            return this.price;
        }
        clone(): object {
            const object: Product = new Product();
            object.id = this.id;
            object.price = this.price;
            return object
        }
    }

    const product1: Product = new Product(2022, 5.28);
    console.log(product1.getId() + "-----" + product1.getPrice());

    const product2: Product = <Product>product1.clone();
    console.log(product2.getId() + "-----" + product2.getPrice());
})()