class stack {
    constructor () {
        this.CAPACITY = 1000;
        this.top = -1;
        this.stack = new Array(this.CAPACITY);
    }

    push(val) {
        if (this.top >= this.CAPACITY - 1) {
            // 堆栈已满
            console.log("Stack Overflow!")
            return false
        }
        this.stack[++this.top] = val;
        return true;
    }

    pop() {
        if (this.top < 0) {
            console.log("Stack Underflow!");
            return 0
        }
        let element = this.stack[--this.top];
        return element
    }

    peek() {
        if (this.top < 0) {
            console.log("Stack Underflow!");
            return 0;
        }
        return this.stack[this.top];
    }

    isEmpty() {
        return this.top < 0;
    }
}