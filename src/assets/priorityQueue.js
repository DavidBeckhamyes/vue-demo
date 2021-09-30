// 优先队列
class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue {
    constructor() {
        this.head = null;
    }

    push(value, priority) {
        if (this.head == null) {
            // 头节点为空 头节点直接指向新的节点 
            this.head = new Node(value, priority);
            return;
        }
        let cur = this.head;
        let newNode = new Node(value, priority);
        if (this.head.priority < priority) {
            // 优先级比头节点还要高
            newNode.next = this.head;
            this.head = newNode;
        } else {
            while (cur.next != null && cur.next.priority > priority) {
                // 迭代条件：不指向队尾或者插入节点优先级比下一个节点低
                cur = cur.next;
            }
            newNode.next = cur.next;
            cur.next = newNode;
        }
    }

    peek() {
        return this.head;
    }

    pop() {
        if (this.head == null) {
            return null;
        }
        let temp = this.head;
        this.head = this.head.next;
        return temp;
    }

    isEmpty() {
        return this.head == null;
    }
}