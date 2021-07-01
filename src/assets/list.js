window.onload = function () {
    let ll = new LinkedList();
    ll.append('1');
    ll.append('2');
    ll.append('3');
    ll.append('4');

    ll.appendAt(4, '5');

    console.log('index->',ll.indexOf('3'))
    console.dir(ll, {
        depth: 100
    })
};

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    append(element) {
        let node = new Node(element);
        // 如果链表为空，往头部插入一个节点
        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.getNode(this.size - 1);
            currentNode.next = node;
        }
        this.size++;
    }

    appendAt(position, element) {
        let node = new Node(element);
        if (position < 0 || position > this.size) {
            throw new Error('insert position out range')
        }
        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let preNode = this.getNode(position - 1);
            node.next = preNode.next;
            preNode.next = node;
        }
        this.size++;
    }

    remove(position) {
        if (position < 0 || position >= this.size) {
            throw new Error('remove position out range')
        }
        if (position === 0) {
            this.head = this.head.next;
        } else {
            let preNode = this.getNode(position - 1);
            let currentNode = this.getNode(position);
            preNode.next = currentNode.next;
        }
        this.size--;
    }

    indexOf(element) {
        let currentNode = this.head;
        for (var i = 0; i < this.size; i++) {
            if (currentNode.element === element) {
                return i;
            }
            currentNode = currentNode.next;
        }

    }

    getNode(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('out range');
        }

        let current = this.head;
        for (var i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
}