// 设计模式之命令模式
(() => {
    class Invoker {
        // 请求者
        private command: Command;
        constructor(command: Command) {
            this.command = command;
        }
        call(): void {
            this.command.execute();
        }
    }

    // 命令接口
    interface Command {
        // 执行命令
        execute(): void;
    }

    class onCommand implements Command {
        // 开机命令
        private tv: TV;
        constructor(tv: TV) {
            this.tv = tv;
        }
        execute(): void {
            this.tv.onAction();
        }
    }

    class offCommand implements Command {
        // 关机命令
        private tv: TV;
        constructor(tv: TV) {
            this.tv = tv;
        }
        execute(): void {
            this.tv.offAction();
        }
    }

    class TV {
        onAction(): void {
            console.log("电视机开机了");
        }
        offAction(): void {
            console.log("电视机关机了");
        }
    }

    const tv = new TV();
    const onCommandInput: Command = new onCommand(tv);
    let invoker: Invoker = new Invoker(onCommandInput);
    invoker.call();

    const offCommandInput: Command = new offCommand(tv);
    invoker = new Invoker(offCommandInput);
    invoker.call();
})()
