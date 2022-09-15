// 设计模式之解释器模式
(() => {
    class Context {
        private regions: string[] = ["A区", "B区", "C区"];
        private persons: string[] = ["开发人员", "测试人员", "调试人员"];

        private noterminal: NoterminalExpression;


        constructor() {
            const region: TerminalExpression = new TerminalExpression(this.regions);
            const person: TerminalExpression = new TerminalExpression(this.persons);
            this.noterminal = new NoterminalExpression(region, person);
        }

        public check(info: string) {
            const bool: Boolean = this.noterminal.interpret(info);
            if (bool) {
                console.log("识别成功")
            } else {
                console.log("识别失败");
            }
        }
    }
    interface Expression {
        interpret(info: string): boolean;
    }
    class NoterminalExpression implements Expression {
        private region: TerminalExpression;
        private person: TerminalExpression;

        constructor(region: TerminalExpression, person: TerminalExpression) {
            this.person = person;
            this.region = region;
        }

        interpret(info: string): boolean {
            const result: string[] = info.split("的");
            return this.region.interpret(result[0]) && this.person.interpret(result[1]);
        }
    }
    class TerminalExpression implements Expression {
        private set: string[] = [];
        constructor(data: string[]) {
            for (const str in data) {
                this.set.push(str)
            }
        }
        interpret(info: string): boolean {
            return this.set.indexOf(info) > 0
        }
    }

    const context: Context = new Context();
    context.check("A区的开发人员");
    context.check("B区的测试人员");
    context.check("C区的调试人员");
})()