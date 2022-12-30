export class Node {
    // 节点类
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

export class LinkedList {
    // 链表类
    constructor() {
        // 构造函数 初始化链表的头和大小
        this.size = 0;
        this.head = null;
    }

    append(element) {
        let node = new Node(element);
        // 链表追加元素(头部或者尾部)
        if (this.head == null) {
            // 链表为空 从头追加
            this.head = node;
        } else {
            // 链表不为空 从尾部追加
            let tailNode = this.getNode(this.size - 1);
            tailNode.next = node;
        }
        this.size++;
    }

    getNode(position) {
        // 获取节点

        // 边界条件判定
        if (position < 0 || position >= this.size) {
            // 位置小于0 或者 位置超出界限
            throw new Error("opt:getNode, err:out range of list!");
        }

        let currentNode = this.head;

        if (position == 0) {
            // 取的是第一个节点
        } else {
            for (let i = 0; i < position; i++) {
                currentNode = currentNode.next;
            }
        }
        return currentNode
    }

    appendAt(position, element) {
        // 在某个位置插入节点
        if (position < 0 || position > this.size) {
            throw new Error("opt:appendAt, err:out range of list!");
        }
        let node = new Node(element);
        if (position == 0) {
            element.next = this.head;
            this.head = node;
        } else {
            let prev = this.getNode(position - 1);
            node.next = prev.next;
            prev.next = node;
        }
        this.size++;
    }

    remove(position) {
        // 删除某个位置上的节点
        if (position < 0 || position >= this.size) {
            throw new Error("opt:remove, err:out range of list!");
        }

        if (position == 0) {
            // 删除头节点
            this.head = this.head.next;
        } else {
            let currentNode = this.getNode(position);
            let prev = this.getNode(position - 1);
            prev.next = currentNode.next;
        }
        this.size--;
    }

    indexOf(element) {
        // 查找元素所在位置
        let currentNode = this.head;
        for (let i = 0; i < this.size; i++) {
            if (currentNode.element == element) {
                return i
            }
            currentNode = currentNode.next;
        }
        return -1
    }
}
