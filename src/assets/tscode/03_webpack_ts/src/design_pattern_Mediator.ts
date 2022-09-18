// 设计模式之中介者模式
(() => {
    abstract class Colleague {
        protected mediator: Mediator;
        constructor(mediator: Mediator) {
            this.mediator = mediator
        }
    }

    class Colleague1 extends Colleague {
        constructor(mediator: Mediator) {
            super(mediator);
        }
        // 同事一发送消息
        sendMessage(info: string): void {
            console.log("同事一发送的消息是:", info);
            this.mediator.sendMessage(info, this);
        }
        // 同事一收到消息
        notifyMessage(info: string): void {
            console.log("同事一收到的消息是:", info);
        }
    }

    class Colleague2 extends Colleague {
        constructor(mediator: Mediator) {
            super(mediator);
        }
        // 同事二发送消息
        sendMessage(info: string) {
            console.log("同事二发送的消息是:", info);
            this.mediator.sendMessage(info, this);
        }
        // 同事二收到消息
        notifyMessage(info: string): void {
            console.log("同事二收到的消息是:", info);
        }
    }

    abstract class Mediator {
        public abstract sendMessage(info: string, colleague: Colleague): void
    }

    class ConcreteMediator extends Mediator {
        private colleague1: Colleague1;
        private colleague2: Colleague2;

        setColleague1(colleague1: Colleague1): void {
            this.colleague1 = colleague1;
        }

        setColleague2(colleague2: Colleague2): void {
            this.colleague2 = colleague2;
        }

        sendMessage(info: string, colleague: Colleague): void {
            if (colleague === this.colleague1) {
                this.colleague2.notifyMessage(info);
            } else if (colleague === this.colleague2) {
                this.colleague1.notifyMessage(info);
            }
        }
    }


    const concreteMediator: ConcreteMediator = new ConcreteMediator();
    const worker1: Colleague1 = new Colleague1(concreteMediator);
    concreteMediator.setColleague1(worker1);
    const worker2: Colleague2 = new Colleague2(concreteMediator);
    concreteMediator.setColleague2(worker2);
    worker1.sendMessage("我爱你!");
    worker2.sendMessage("滚~")
})()