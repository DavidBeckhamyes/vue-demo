window.onload = function () {
    // 快速排序测试用例
    // const arr = [1, 5, 7, 3, 4, 9, 11, 0, 2];
    // QuickSort(arr, 0, arr.length - 1);
    // 插入排序测试用例
    // InsertionSort([1,5,7,3,4,9,11,0,2])
    // 归并排序测试用例
    // let array = [1, 5, 7, 3, 4, 9, 11, 8, 2, 10, 0];
    // mergeSort(array, 0, 10);
    // 搜索插入位置测试用例
    // console.log(searchInsert([1,3,5,6], 0));
    // longestPalindrome("ccc");
    // lengthOfLongestSubstring("pwwkew");
    // threeSum([3, 0, -2, -1, 1, 2])
    // reverse(-4530);
    // twoSum([0, 3, -3, 4, -1], -1)
    // findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);
    // 最大子段和
    // console.log(maxSubSum([4, -3, -6, 1, 13, -15, 9, 4, 2], 0, 8));
    // 0-1背包问题(物品数量:4,背包容量-可装物品的最大重量:5)
    zeroOnePackage(4, 5);
    // 最长公共子序列动态规划
    LCS('ACDFGE', 'AMDHEFG');
    matrixChain();
}

// 找到数组中的重复元素(此方法仅限数组元素均为数字的情况)
var findRepeatNumber = function (nums) {
    const result = Array(nums.length).fill(0);
    nums.forEach((num) => {
        result[num] = result[num] + 1;
    })
    var repeatElement = 0;
    result.forEach((item, index) => {
        if (item > 1) {
            repeatElement = index
        }
    })
    return repeatElement
}

// 两数之和
var twoSum = function (nums, target) {
    //暴力枚举
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// 数字反转
var reverse = function (x) {
    var origin = Math.abs(x)
    if (origin < 10) {
        return x
    }
    var powNum = origin.toString().length - 1;  // powNum 表示该数字的最高位可表示为 10 的幂次 e.g. 314 最高位为百位，可表示为 10 的平方
    var result = 0;
    var step = 0;
    for (i = powNum; i >= 0; i--) {
        var bit = Math.floor(origin / Math.pow(10, i));
        origin = origin - bit * Math.pow(10, i);
        result = result + bit * Math.pow(10, step);
        step++;
    }
    if (result > Math.pow(2, 31) - 1) {
        return 0
    }
    if (-result < -Math.pow(2, 31)) {
        return 0
    }
    return x < 0 ? -result : result
};

/**
 * @description 三数之和(三个数字相加和为0)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) {
        return []
    }
    // 此时数组中的元素 全为 0
    var isZeroArray = !nums.some(item => item !== 0);
    if (isZeroArray) {
        return [[0, 0, 0]]
    }
    // 数组升序排列
    nums.sort((a, b) => a - b)
    var length = nums.length;
    const result = []
    for (var i = 0; i < length - 2; i++) {
        // 目标元素相同直接跳过(避免出现重复结果)
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }
        // 将三数之和转变为两数之和的解法来遍历
        var target = 0 - nums[i];
        // 此处采用双指针法，一头一尾遍历
        var start = i + 1;
        var end = length - 1;
        while (start < end) {
            const res = [];
            if (target == nums[start] + nums[end]) {
                res.push(nums[i], nums[start], nums[end]);
                result.push(res)
                start++;
                end--;
                // 遍历到相同的元素直接跳过,while是因为可能存在多个连着的相同元素
                while (nums[start] == nums[start - 1]) {
                    start++;
                }
                while (nums[end] == nums[end + 1]) {
                    end--;
                }
            } else if (target < nums[start] + nums[end]) {
                end--;
            } else {
                start++;
            }
        }
    }
    return result
};

// 最长子串(不含有重复字符的 最长子串 的长度)
var lengthOfLongestSubstring = function (s) {
    var length = 0;
    const result = [];
    var arr = s.split("");
    if (arr.length == 0) {
        return 0
    }
    var longestString = "";
    for (var i = 0; i < arr.length; i++) {
        if (!longestString) {
            longestString += arr[i];
        } else {
            var position = longestString.indexOf(arr[i]);
            if (position != -1) {
                result.push(longestString);
                // 在原有子串上截掉开始位置和重复字符所在位置之间的部分
                longestString = longestString.slice(position + 1, longestString.length);
            }
            longestString += arr[i];
        }
        if (i == arr.length - 1) {
            result.push(longestString);
        }
    }
    console.log(result)
    result.forEach(str => {
        if (str.length > length) {
            length = str.length
        }
    })

    return length

}

// 最长回文子串(字符串的反序与原始字符串相同，则该字符串称为回文字符串)
var longestPalindrome = function (s) {
    // 边界条件
    if (s.length < 2) {
        return s;
    }
    const arr = s.split("");

    var length = 0;
    var res = "";
    for (var i = 0; i < arr.length; i++) {
        var result = arr[i];
        var start = i - 1;
        var end = i + 1;
        // 先看 “基座” 部分是否由多个相同的字符组成
        while (start >= -1 && end < arr.length && arr[i] == arr[end]) {
            result = result + arr[end];
            end++;
        }
        // 然后检查 “基座” 左右两侧的字符是否相同，如果相同则拼接到 “基座” 的左右两侧 并构成一个回文字符串
        while (start >= 0 && end < arr.length && arr[start] == arr[end]) {
            result = arr[start] + result + arr[end];
            start--;
            end++;
        }
        if (result.length > length) {
            length = result.length;
            res = result
        }
        result = "";
    }
    return res
};

// 搜索插入位置
var searchInsert = function (nums, target) {
    if (nums.indexOf(target) != -1) {
        return nums.indexOf(target);
    } else {
        // 处理边界情况
        if (target < nums[0]) {
            return 0
        }
        if (target > nums[nums.length - 1]) {
            return nums.length
        }
        for (var i = 0; i < nums.length - 1; i++) {
            if (target > nums[i] && target < nums[i + 1]) {
                return i + 1;
            }
        }
    }
};

// 插入排序
function InsertionSort(array) {
    let start = 0;  // 起始位置
    for (let i = start + 1; i < array.length; i++) {
        let cursor = i; // 游标左侧的元素均为有序
        while (cursor - 1 >= 0 && array[cursor - 1] >= array[cursor]) {
            // 向左遍历 一直找到遍历元素小于 游标指向元素为止
            let tmpVar = array[cursor];
            array[cursor] = array[cursor - 1];
            array[cursor - 1] = tmpVar;
            cursor--;
        }
    }
    console.log("按照插入排序正序排序后的数组为->", array);
}

// 快速排序
function QuickSort(array, left, right) {
    if (array.length == 0) {
        return;
    }
    if (left > right) {
        return;
    }

    let key = array[left];  // 基准数
    let leftIndex = left;  // 左侧指针位置
    let rightIndex = right;  // 右侧指针位置

    while (leftIndex < rightIndex) {
        while (leftIndex < rightIndex && array[rightIndex] >= key) {
            rightIndex--;
        }
        if (array[rightIndex] < key) {
            array[leftIndex] = array[rightIndex];
        }
        while (leftIndex < rightIndex && array[leftIndex] <= key) {
            leftIndex++;
        }
        if (array[leftIndex] > key) {
            array[rightIndex] = array[leftIndex];
        }
    }
    array[leftIndex] = key;
    // 基准数左侧快排
    QuickSort(array, left, leftIndex - 1);
    // 基准数右侧快排
    QuickSort(array, leftIndex + 1, right);
}

// 归并排序
function mergeSort(array, left, right) {
    if (right - left < 1) {
        // 子数组只有一个元素 结束递归
        return;
    }
    let mid = Math.floor(left + (right - left) / 2);
    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);
    merge(array, left, right, mid + 1);
}

function merge(array, left, right, mid) {
    let i = left;
    let j = mid;
    let p = left;
    let temp = [];

    while (i < mid && j <= right) {
        if (array[i] < array[j]) {
            temp[p++] = array[i++];
        } else {
            temp[p++] = array[j++];
        }
    }
    while (i < mid) {
        // 右边的数组已经遍历完
        temp[p++] = array[i++];
    }
    while (j <= right) {
        // 左边的数组已经遍历完
        temp[p++] = array[j++];
    }
    p = left;
    i = left;
    while (i <= right) {
        array[i++] = temp[p++];
    }
}

var maxSubSum = function (array, left, right) {
    let sum = 0;  // 初始化最大子段和为0
    if (left == right) {
        // 切分到只有一个数
        if (array[left] < 0) {  // 依题干 序列中所有整数均为负整数时，其最大子段和为0
            sum = 0;
        } else {
            sum = array[left];
        }
    } else {
        let center = Math.floor(left + (right - left) / 2);
        let leftMaxSubSum = maxSubSum(array, left, center);  // 获取当前左子段的最大子段和
        let rightMaxSubSum = maxSubSum(array, center + 1, right);  // 获取当前右子段的最大子段和

        let leftSum = 0;  // 当前左侧子段求和
        let s1 = 0;  // 左侧子段的最大和
        // 以下为第三种情况 最大子段和是结合左子段和右子段的元素序列和
        for (let i = center; i >= left; i--) {
            leftSum += array[i];
            if (s1 <= leftSum) {
                s1 = leftSum
            }
        }

        let rightSum = 0;  // 当前右侧子段求和
        let s2 = 0;  // 右侧子段的最大和
        for (let i = center + 1; i <= right; i++) {
            rightSum += array[i];
            if (s2 <= rightSum) {
                s2 = rightSum
            }
        }

        sum = s1 + s2;
        if (sum <= leftMaxSubSum) {
            sum = leftMaxSubSum
        }
        if (sum <= rightMaxSubSum) {
            sum = rightMaxSubSum
        }
    }
    return sum;
}

var zeroOnePackage = function (number, weight) {
    const w = [0, 1, 2, 3, 4];  // 物品重量数组
    const v = [0, 2, 4, 5, 6];  // 背包价值数组

    const max = function (a, b) {
        if (a > b) {
            return a
        } else {
            return b
        }
    }

    const maxValues = new Array(number + 1).fill(0).map((x) => new Array(weight + 1).fill(0));
    for (i = 1; i <= number; i++) {  // 遍历物品
        for (j = 1; j <= weight; j++) {  // 遍历背包重量
            if (j < w[i]) {
                // 当前物品在现有背包体量下装不下
                maxValues[i][j] = maxValues[i - 1][j];  // 从前i-1个物品中找到能装进当前背包的物品
            } else {
                // 当前物品在现有背包体量下能装下
                maxValues[i][j] = max(maxValues[i - 1][j], v[i] + maxValues[i - 1][j - w[i]])  // 不装当前物品,从前i-1个物品中找到能装进当前背包的物品;装下当前物品,再从前i-1个物品中找到能装进当前背包的物品，两个取最大值
            }
        }
    }
    console.log(maxValues[number][weight])
}

var LCS = function (s1, s2) {
    const charArray1 = s1.split('');
    const charArray2 = s2.split('');

    const array = new Array(charArray1.length + 1).fill(0).map((x) => new Array(charArray2.length + 1).fill(0));

    for (let i = 1; i <= charArray1.length; i++) {
        for (let j = 1; j <= charArray2.length; j++) {
            if (charArray1[i - 1] == charArray2[j - 1]) {
                array[i][j] = 1 + Math.max(array[i - 1][j], array[i][j - 1]);
            } else {
                array[i][j] = Math.max(array[i - 1][j], array[i][j - 1]);
            }
        }
    }
    let i = charArray1.length, j = charArray2.length;
    let stash = [];
    while (i - 1 >= 0 && j - 1 >= 0) {
        if (charArray1[i - 1] == charArray2[j - 1]) {
            stash.push(charArray1[i - 1]);
            i--;
            j--;
        } else {
            if (array[i - 1][j] > array[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }
    }
    let n = 1;
    while (stash.length) {
        console.log("第" + n + "次出栈的子序列中的字符为:" + stash.pop() + '');
        n++;
    }
}

var matrixChain = function () {
    const matrixArray = [30, 35, 15, 5, 10, 20, 25];  // 矩阵规模数组
    let matrixNum = matrixArray.length - 1;  // 矩阵数量
    const trace = new Array(matrixNum).fill(0).map((x) => new Array(matrixNum).fill(0));  // 初始化连乘代价矩阵
    const dp = new Array(matrixNum).fill(-1).map((x) => new Array(matrixNum).fill(-1));
    for (let i = 0; i < matrixNum; i++) dp[i][i] = 0; // 对角线初始化为0 表示1个矩阵的乘法次数为0
    for (let n = 1; n < matrixNum; n++) {  // 表示遍历矩阵的规模 从两个矩阵的乘法到6个矩阵的乘法规模次数为5
        for (let i = 0; i < matrixNum - n; i++) {  // 表示矩阵连乘的组合种类(e.g.2个矩阵连乘有5种组合)
            let j = i + n;
            for (let k = i; k < j; k++) {
                const tempCost = dp[i][k] + dp[k + 1][j] + matrixArray[i] * matrixArray[k + 1] * matrixArray[j + 1];
                if (dp[i][j] == -1 || dp[i][j] > tempCost) {
                    dp[i][j] = tempCost;
                    trace[i][j] = k;
                }
            }
        }
    }

    let result = "";
    var Traceback = function (i, j) {
        if (i == j) {
            result += "A" + i;
        } else {
            result += "(";
            Traceback(i, trace[i][j]);
            Traceback(trace[i][j] + 1, j);
            result += ")";
        }
    }

    Traceback(0, matrixNum - 1);
    console.log("最大阶乘组合为:", result)
    console.log("矩阵连乘乘法代价矩阵为:", dp)
}