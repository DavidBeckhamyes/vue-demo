window.onload = function () {
    let heap = new MaxHeap(20);
    heap.insert(3);
    heap.insert(5);
    heap.insert(7);
    heap.insert(1);
    heap.insert(4);
    console.log(heap)
}

// 堆实现 将最大元素放在头节点上 (完全二叉树)
class MaxHeap {
    constructor(capacity) {
        this.capacity = capacity;
        this.array = new Array(capacity);
        this.size = 0;
    }

    getLeftChildIndex(parentIndex) {
        // 根据父节点的index 获取它的左孩子在数组中的index
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        // 根据父节点的index 获取它的右孩子在数组中的index
        return 2 * parentIndex + 1;
    }

    getParentIndex(childIndex) {
        // 根据孩子的index 获取父节点在数组的序号index
        return (childIndex - 1) / 2;
    }

    hasLeftChild(index) {
        // 是否有左孩子
        return this.getLeftChildIndex(index) < this.size;
    }

    hasRightChild(index) {
        // 是否有右孩子
        return this.getRightChildIndex(index) < this.size;
    }

    hasParent(index) {
        // 是否有父节点
        return this.getParentIndex(index) >= 0;
    }

    leftChild(parentIndex) {
        return this.array[this.getLeftChildIndex(parentIndex)];
    }

    rightChild(parentIndex) {
        return this.array[this.getRightChildIndex(parentIndex)];
    }

    parent(childIndex) {
        return this.array[this.getParentIndex(childIndex)];
    }

    insert(item) {
        if (this.size == this.capacity) {
            const newArray = new Array(this.capacity);
            this.array = this.array.concat(newArray);
            this.capacity = this.capacity * 2;
        }
        this.array[this.size] = item;
        this.size++;
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.size - 1;
        while (this.hasParent(index) && this.parent(index) < this.array[index]) {
            // 有父节点 并且 父节点小于子节点 交互两个节点
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    poll() {
        // 拉出来最大的数 然后再重排列
        if (this.size == 0) {
            throw new Error("No Such Element Exception!");
        }
        let element = this.array[0];
        this.array[0] = this.array[this.array.length - 1];
        this.size--;
        this.heapifyDown();
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            // 初始设置较大的节点为左孩子
            let largerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
                // 如果同时有右孩子 并且右孩子比左孩子大
                largerChildIndex = this.getRightChildIndex(index);
            }
            if (this.array[index] < this.array[largerChildIndex]) {
                this.swap(index, largerChildIndex);
            } else {
                break;
            }
            index = largerChildIndex;
        }
    }

    peek() {
        if (this.size == 0) {
            throw new Error("No Such Element Exception!");
        }
        return this.array[0];
    }

    swap(index1, index2) {
        let tmpValue = this.array[index1];
        this.array[index1] = this.array[index2];
        this.array[index2] = tmpValue;
    }
}