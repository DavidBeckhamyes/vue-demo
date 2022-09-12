// 生成器模式
(() => {
    class Director {
        constructor(builder: Builder) {
            builder.buildPart();
        }
    }
    abstract class Builder {
        public abstract buildPart(): void;
        public abstract getResult(): Product;
    }
    class Builder1 extends Builder {
        product: Product = new Product();
        public buildPart(): void {
            this.product.add("A");
            this.product.add("B");
            this.product.add("C");
            this.product.add("D");
            this.product.add("E");
            this.product.add("F");
        }
        public getResult(): Product {
            return this.product
        }
    }
    class Product {
        parts: string[] = [];
        add(part: string): void {
            this.parts.push(part);
        };
        show(): void {
            console.log("产品的组成:");
            for (let s in this.parts) {
                console.log(s)
            }
            console.log("\n");
        }
    }

    const builder: Builder1 = new Builder1();
    const director: Director = new Director(builder);
    const product: Product = builder.getResult();
    product.show();
})()