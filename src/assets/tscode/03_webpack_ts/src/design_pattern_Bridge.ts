// 设计模式之桥接模式
(() => {
    abstract class Product {
        private name: string;
        protected color: Color;

        setName(name: string): void {
            this.name = name;
        }

        getName(): string {
            return this.name;
        }

        setColor(color: Color): void {
            this.color = color;
        }

        getColor(): Color {
            return this.color;
        }

        abstract operation(): void;
    }

    class ProductA extends Product {
        operation(): void {
            this.color.operationImplement(this.getName());
        }
    }

    interface Color {
        operationImplement(name: string);
    }

    class Blue implements Color {
        operationImplement(name: string) {
            console.log(name + "-----蓝色");
        }
    }

    class Red implements Color {
        operationImplement(name: string) {
            console.log(name + "-----红色");
        }
    }

    // 定义一个产品
    const productA1 = new ProductA();
    // 给产品命名
    productA1.setName("产品A1");
    // 定义一种颜色
    const blue = new Blue();
    // 给产品分配颜色
    productA1.setColor(blue);
    productA1.operation();

    const productA2 = new ProductA();
    productA2.setName("产品A2");
    const red = new Red();
    productA2.setColor(red);
    productA2.operation();
})()