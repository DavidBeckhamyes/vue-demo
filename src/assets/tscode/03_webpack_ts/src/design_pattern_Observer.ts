// 设计模式之观察者模式
(() => {
    // 观察目标
    interface Subject {
        attach(observer: ConcreteObserver): void;  // 添加观察者
        detach(observer: ConcreteObserver): void;  // 删除观察者
        notify(): void;  // 状态改变后，通知所有观察者
        setState(state: string): void;  // 设置新状态
        getState(): string;  // 获取当前状态
    }

    // 具体的观察目标(up主)
    class ConcreteSubject implements Subject {
        private state: string = "未更新";
        private name: string = "三宋在此";
        // 粉丝目录
        private observerList: Array<ConcreteObserver> = [];
        attach(observer: ConcreteObserver): void {
            this.observerList.push(observer);
        }
        detach(observer: ConcreteObserver): void {
            for (var i = 0; i < this.observerList.length; i++) {
                if (this.observerList[i].getName() == observer.getName()) {
                    this.observerList.splice(i, 1)
                }
            }
        }
        notify(): void {
            this.observerList.forEach(observer => {
                observer.update();
            })
        }
        setState(state: string): void {
            this.state = state;
            console.log("当前的up主" + this.name + "更新了状态");
            this.notify();
        }
        getState(): string {
            return this.state;
        }
    }

    // 观察者
    interface Observer {
        update(): void
    }

    // 具体的观察者(粉丝)
    class ConcreteObserver implements Observer {
        private name: string;

        private state: string;

        private subject: Subject;

        constructor(name: string, subject: Subject) {
            this.name = name;
            this.subject = subject;
            this.state = subject.getState();
            // 意味着关注了up主，并且up主粉丝数量增加1个
            this.subject.attach(this);
        }

        getName(): string {
            return this.name;
        }

        update(): void {
            console.log(this.name + "收到了更新通知")
            this.state = this.subject.getState();  // 更改当前粉丝状态为up修改后的状态
            console.log(this.name + "修改后的状态为:", this.state);
        }
    }
    // 设置up主
    const sansong = new ConcreteSubject();
    const observer1 = new ConcreteObserver("张三", sansong);
    const observer2 = new ConcreteObserver("李四", sansong);
    const observer3 = new ConcreteObserver("王五", sansong);
    sansong.setState("爷更新啦!!")
})()