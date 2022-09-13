// 设计模式之代理模式
(() => {
    // 定义一个主体客体接口
    interface Subject {
        buy(): void
    }

    class Proxy implements Subject {
        protected realSubject: RealSubject;

        constructor(realSubject: RealSubject) {
            this.realSubject = realSubject;
        }

        // 中介主要处理的除了支付之外的其他业务
        buy(): void {
            console.log("办理购买前的手续");
            this.realSubject.buy();
            console.log("办理购买后的手续");
        }
    }

    // 定义一个真实的客体
    class RealSubject implements Subject {
        buy(): void {
            console.log("付钱");
        }
    }

    const realSubject: RealSubject = new RealSubject();
    const proxy: Proxy = new Proxy(realSubject);
    proxy.buy();
})()