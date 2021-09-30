window.onload = function () {
    let bstTree = new BST();
    bstTree.insert(1);
    bstTree.insert(5);
    bstTree.insert(9);
    bstTree.insert(3);
    bstTree.insert(4);
    bstTree.insert(10);
    bstTree.insert(8);
    bstTree.delete(9);
    console.log("tree->", bstTree);
}

// 二叉搜索树
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    // 二叉搜索树
    constructor() {
        this.root = null;
    }

    get(key) {
        // 获取节点
        let current = this.root;
        while (current != null && current.value != key) {
            if (key < current.value) {
                current = current.left;
            } else if (key > current.value) {
                current = current.right;
            }
        }
        return current === null ? null : current;
    }

    insert(key) {
        // 插入节点
        // 创建一个节点
        let node = new TreeNode(key);
        let current = this.root;
        if (current == null) {
            // 根节点为空 插入一个根节点并返回
            this.root = node;
            return
        }
        // 父节点
        let parent = null;
        while (true) {
            parent = current;
            if (key < parent.value) {
                current = parent.left;
                if (current == null) {
                    parent.left = node;
                    return;
                }
            } else if (key > parent.value) {
                current = parent.right;
                if (current == null) {
                    parent.right = node;
                    return;
                }
            } else {
                return;  // BST does not allow nodes with the same value
            }
        }
    }

    delete(key) {
        // 删除节点
        let parent = this.root;
        let current = this.root;
        let isLeftChild = false;  // 是否是左孩子
        while (current != null && current.value != key) {
            parent = current;
            if (current.value > key) {
                current = parent.left;
                isLeftChild = true;
            } else {
                isLeftChild = false;
                current = parent.right;
            }
        }

        if (current == null) {
            // 遍历完成没有找到相对应的节点 返回
            return false;
        }

        // Case1 要删除的节点没有child
        if (current.left == null && current.right == null) {
            if (current == this.root) {
                // 只有一个根节点
                this.root = null;
            } else if (isLeftChild) {
                // 需要删除的是左孩子
                parrent.left = null;
            } else {
                // 需要删除的是右孩子
                parrent.right = null;
            }
        }
        // Case2 要删除的节点只有一个child
        else if (current.left == null) {
            if (current == this.root) {
                // 找到的是root节点
                this.root = current.right
            } else if (isLeftChild) {
                parent.left = current.right;
            } else {
                parent.right = current.right;
            }
        } else if (current.right == null) {
            if (current == this.root) {
                // 找到的是root节点
                this.root = current.left;
            } else if (isLeftChild) {
                parent.left = current.left;
            } else {
                parent.right = current.left;
            }
        }
        // Case3 要删除的节点有左右两个孩子
        else {
            let successor = this.getSuccessor(current);
            if (current == this.root) {
                this.root = successor;
            } else if (isLeftChild) {
                parent.left = successor;
            } else {
                parent.right = successor;
            }
            successor.left = current.left;
        }
    }

    getSuccessor(node) {
        // 找到右半部最小的节点
        let successor = null;  // 要替换被删除的节点
        let successorParent = null;
        let current = node.right;
        while (current != null) {
            successorParent = successor;
            successor = current;
            current = current.left;
        }
        if (successor != node.right) {
            // 右侧有更小的左孩子
            // 如果节点有rightLeaf 赋值给上一个节点的左枝
            successorParent.left = successor.right;
            successor.right = node.right;
        }
        return successor;
    }
}