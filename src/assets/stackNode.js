// 链式栈的实现
window.onload = function() {
    let list = new ListStack();
    list.push("a");
    list.push("b");
    list.push("c");
    // 链式栈弹栈
    console.log(list.pop())
}

class StackNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class ListStack {
    constructor() {
        this.top = null;
    }

    push(val) {
        let newNode = new StackNode(val);
        if (this.top == null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    pop() {
        if (this.top == null) {
            console.log("Stack is Empty!")
            return -1
        }
        let popped = this.top.val;
        this.top = this.top.next;
        return popped
    }

    peek() {
        if (this.top == null) {
            console.log("Stack is Empty!")
            return -1
        }
        return this.top.val;
    }

    isEmpty() {
        return this.top == null;
    }
}