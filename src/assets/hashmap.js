window.onload = function() {
    const map = new HashMap(100);
    map.put("a", 2);
    map.put("b", 7);
    map.put("d", 9);
    map.remove("a");
}

// 哈希表
class HashNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashMap {
    constructor(numBuckets) {
        this.size = 0;  // 节点数量
        this.numBuckets = numBuckets;  // 桶的数量
        this.bucketArray = new Array(numBuckets).fill(null);  // 初始化每个桶的头指针指向为空
    }

    hashCode(key) {
        var hashCode = "";
        for (var i = 0; i < key.length; i++) {
            hashCode += key.charCodeAt(i);
        }
        return hashCode;
    }
    
    // hash值计算
    hash(h) {
        h ^= (h >>> 20) ^ (h >>> 12);
        return h ^ (h >>> 7) ^ (h >>> 4);
    }

    // 根据hash值获取数据应该存放到数组的哪个桶(下标)中
    indexFor(h) {
        return h % this.numBuckets;
    }

    // 向HashMap中存放值
    put(key, value) {
        if (key == null || key == undefined) return;

        var hashCode = this.hashCode(key);
        var hash = this.hash(hashCode);
        var index = this.indexFor(hash);
        var head = this.bucketArray[index];
        while(head != null) {
            // 头节点不为空  遍历查找
            if (head.key == key) {
                // 有相同的key 替换value 并返回
                head.value = value;
                return;
            }
            // 没有相同的key 接着追加节点
            head = head.next;
        }
        let newNode = new HashNode(key, value);
        this.bucketArray[index] = newNode;
        this.size++;

        if (this.size / this.numBuckets > 0.7) {
            this.generateBiggerArray();
        }
    }

    // Hash表扩容
    generateBiggerArray() {
        let temp = this.bucketArray;
        this.numBuckets = this.numBuckets * 2;
        this.bucketArray = new Array(this.numBuckets).fill(null);
        this.size = 0;
        for(let headNode of temp) {
            while (headNode != null) {
                this.put(headNode.key, headNode.value);
                headNode = headNode.next;
            }
        }
    }

    // 获取key所对应的value
    get(key) {  
        if (key == null || key == undefined) return;

        var hashCode = this.hashCode(key);
        var hash = this.hash(hashCode);
        var index = this.indexFor(hash);
        var head = this.bucketArray[index];

        while(head != null) {
            if (head.key == key) {
                return head.value;
            }
            head = head.next;
        }
        return null;
    }

    // 删除key所对应的node
    remove(key) {
        if (key == null || key == undefined) return;

        var hashCode = this.hashCode(key);
        var hash = this.hash(hashCode);
        var index = this.indexFor(hash);
        var head = this.bucketArray[index];
        var prev = null;
        while(head != null) {
            if (head.key == key) {
                // 找到了跳出循环
                break;
            }
            // 没找到继续遍历
            prev = head;
            head = head.next;
        }
        if (head == null) {
            // 没有找到相对应的key
            return null;
        }
        let value = head.value;
        if (prev != null) {
            // 找到的key不是链表的头节点
            prev.next = head.next;
        } else {
            // 找到的key是链表的头节点
            this.bucketArray[index] = head.next;
        }
        this.size--;
        return value;
    }

    size() {
        return this.size;
    }

    isEmpty() {
        return this.size == 0;
    }
}