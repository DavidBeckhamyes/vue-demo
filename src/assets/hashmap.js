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
        this.bucketArray = new Array(numBuckets).fill(null);
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
    }
}