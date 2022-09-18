// 设计模式之状态模式
(() => {
    class Context {  // 贩卖机
        private count: number;
        private state: State;

        constructor(count: number = 3, state: State) {
            this.count = count;
            this.state = state;
        }

        getCount(): number {
            return this.count
        }
        setCount(count: number): void {
            this.count = count;
        }

        getState(): State {
            return this.state;
        }
        setState(state: State): void {
            this.state = state;
        }

        request(): void {
            // 购买一个饮料
            this.state.handle(this);
        }
    }

    interface State {
        handle(context: Context): void;
    }

    // 有货状态
    class StateA implements State {
        handle(context: Context): void {
            let count = context.getCount();  // 获取状态机当前的饮料数量
            if (count >= 1) {
                console.log("购买了一瓶饮料");
                context.setCount(context.getCount() - 1);
                if (context.getCount() == 0) {
                    context.setState(new StateB());
                }
            }
        }
    }

    // 无货状态
    class StateB implements State {
        handle(context: Context): void {
            let count = context.getCount();  // 获取状态机当前的饮料数量
            if (count == 0) {
                console.log("当前贩卖机无货，需要紧急补货!!");
                context.setCount(5);  // 贩卖机补充五瓶饮料
                console.log("补货完毕!");
                context.setState(new StateA());
            }
        }
    }

    const stateA: StateA = new StateA();
    const context: Context = new Context(3, stateA);//给贩售机补充3瓶饮料
    context.request();
    context.request();
    context.request();
    context.request();
})()