// 设计模式之策略模式
(() => {
    class OperationContext {
        private strategy: Strategy;

        constructor(strategy: Strategy) {
            this.strategy = strategy;
        }

        operation(a: number, b: number): void {
            // strategy.方法(a,b)
            this.strategy.twoNumberOperation(a, b);
        }
    }
    interface Strategy {
        twoNumberOperation(a: number, b: number)
    }
    class aAddStrategy implements Strategy {
        twoNumberOperation(a: number, b: number) {
            console.log("加法策略结果为:", a + b)
        }
    }
    class AubstractStrategy implements Strategy {
        twoNumberOperation(a: number, b: number) {
            console.log("减法策略结果为:", a - b)
        }
    }
    class MultiplyStrategy implements Strategy {
        twoNumberOperation(a: number, b: number) {
            console.log("乘法策略结果为:", a * b)
        }
    }

    const multiplyStrategy: MultiplyStrategy = new MultiplyStrategy();
    const operation = new OperationContext(multiplyStrategy);
    operation.operation(3, 6);
})()