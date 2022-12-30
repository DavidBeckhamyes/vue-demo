// 链式队列的实现
class QueueNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class ListQueue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(val) {
        let newNode = new QueueNode(val);
        if (this.rear == null || this.front == null) {
            // queue is empty!
            this.rear = newNode;
            this.front = newNode;
            return;
        }
        // queue is not empty!
        this.rear.next = newNode;
        this.rear = newNode;
    }

    dequeue() {
        if (this.front == null) {
            // queue is empty!
            console.log("The queue is empty!");
            return -1;
        }
        let val = this.front.val;
        this.front = this.front.next;
        if (this.front == null) {
            this.rear = null;
        }
        return val;
    }
}