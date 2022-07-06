(() => {
    class Animal {
        // 声明属性
        name: string;

        // 构造方法
        constructor(name: string) {
            this.name = name;
        }

        // 一般方法
        action(str: string) {
            console.log(`${this.name} can ${str}`);
        }
    }

    class Snake extends Animal {
        constructor(name: string) {
            // 调用父类型构造方法
            super(name)
        }

        // 重写父类型的方法
        action(str: string) {
            console.log('sliding...')
            super.action(str)
        }
    }

    const snake = new Snake("黑曼巴");
    snake.action("爬行迅速")
})()