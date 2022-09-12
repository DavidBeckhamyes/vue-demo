// 单例模式
(() => {
    class SingletonPattern {
        private number: number = 2022;
        public getNumber(): number {
            return this.number;
        }
        public setNumber(number: number): void {
            this.number = number;
        }
        // 构造函数为私有,不可通过创建对象生成
        private constructor() {

        }
        private static instance: SingletonPattern = new SingletonPattern();
        public static getInstance(): SingletonPattern {
            return this.instance;
        }
    }

    // cons4 singleton4 = new SingletonPattern()  // error

    const singleton1 = SingletonPattern.getInstance();
    const singleton2 = SingletonPattern.getInstance();
    const singleton3 = SingletonPattern.getInstance();
    console.log(singleton1.getNumber() + "---------" + singleton2.getNumber() + "------" + singleton3.getNumber());
    console.log(singleton1 === singleton3);
})()