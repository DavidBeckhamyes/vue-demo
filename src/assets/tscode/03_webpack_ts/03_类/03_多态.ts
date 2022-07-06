class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    run(distance: number = 0) {
        console.log(`${this.name} run ${distance}m`)
    }

}

class Snake extends Animal {
    constructor(name: string) {
        // 调用父类型构造方法
        super(name)
    }

    // 重写父类型的方法
    run(distance: number = 5) {
        console.log('sliding...')
        super.run(distance)
    }
}

class Horse extends Animal {
    constructor(name: string) {
        // 调用父类型构造方法
        super(name)
    }

    // 重写父类型的方法
    run(distance: number = 50) {
        console.log('dashing...')
        // 调用父类型的一般方法
        super.run(distance)
    }

    xxx() {
        console.log('xxx()')
    }
}

const snake = new Snake('sn')
snake.run()

const horse = new Horse('ho')
horse.run()

// 父类型引用指向子类型的实例 ==> 多态
const animal1: Animal = new Horse('ho22')
animal1.run()

function showMsg(animal: Animal) {
    animal.run();
}

showMsg(horse);
showMsg(snake);