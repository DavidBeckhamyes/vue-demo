// 设计模式之备忘录模式
(() => {
    class Originator {
        // 原发器
        private state: string;

        setState(state: string): void {
            this.state = state;
        }

        getState(): string {
            return this.state;
        }

        // 创造一个备忘录
        createMemento(): Memento {
            return new Memento(this.state);
        }

        // 从备忘录中恢复备份
        setMemento(memento: Memento): void {
            this.state = memento.getState();
        }
    }
    class Memento {
        // 备忘录
        private state: string;

        constructor(state: string) {
            this.state = state;
        }

        getState(): string {
            return this.state;
        }
    }
    class Caretaker {
        // 管理者
        private mementoList: Array<Memento> = [];

        addMemento(memento: Memento): void {
            this.mementoList.push(memento);
        }

        getMemento(index: number): Memento {
            return this.mementoList[index - 1];
        }

        showMemento(): void {
            let cnt = 1;
            for (const memento of this.mementoList) {
                console.log("第" + cnt + "次备份,状态为:", memento.getState());
                cnt++;
            }
        }
    }

    const caretaker = new Caretaker();

    const originator = new Originator();
    originator.setState("1024");
    const backup1 = originator.createMemento();
    caretaker.addMemento(backup1);

    originator.setState("1025");
    const backup2 = originator.createMemento();
    caretaker.addMemento(backup2);

    originator.setState("1026");
    const backup3 = originator.createMemento();
    caretaker.addMemento(backup3);

    // 查看当前原发器的状态
    console.log("查看当前原发器的状态:" + originator.getState());
    // 查看备份状态
    caretaker.showMemento();

    // 取出第二次备份的状态
    const memento2 = caretaker.getMemento(2);
    originator.setMemento(memento2);

    console.log("恢复备份后的状态为:", originator.getState());
})()