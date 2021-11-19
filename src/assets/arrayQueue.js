class ArrayQueue {
    // 数组队列
    constructor(capacity) {
        this.capacity = capacity;
        this.array = new Array(capacity);
        this.front = 0;  // 出队列位置
        this.rear = 0;  // 进队列位置
        this.size = 0;  // 队列的大小
    }

    enqueue(item) {
        if (this.isFull()) return;
        this.array[this.rear] = item;
        this.rear = (this.rear++) % this.capacity;
        this.size++;
        console.log(item + "is enqueued!");
    }

    dequeue() {
        if (this.isEmpty()) return;
        let item = this.array[this.front];
        this.front = (this.front++) % this.capacity;
        this.size--;
        return item;
    }

    peek() {
        if (this.isEmpty()) return;
        return this.array[this.front];
    }

    isFull() {
        return this.size == this.capacity;
    }

    isEmpty() {
        return this.size == 0;
    }
}