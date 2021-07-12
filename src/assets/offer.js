window.onload = function () {
    longestPalindrome("babad");
    // lengthOfLongestSubstring("pwwkew");
    // threeSum([3, 0, -2, -1, 1, 2])
    // reverse(-4530);
    // twoSum([0, 3, -3, 4, -1], -1)
    // findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);
}

// 找到数组中的重复元素
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
    var powNum = origin.toString().length - 1;
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
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) {
        return []
    }
    var isZeroArray = !nums.some(item => item !== 0);
    if (isZeroArray) {
        return [[0, 0, 0]]
    }
    nums.sort((a, b) => a - b)
    var length = nums.length;
    const result = []
    for (var i = 0; i < length - 2; i++) {
        // 目标元素相同直接跳过
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue
        }
        var target = 0 - nums[i];
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

// 最长子串
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

var longestPalindrome = function(s) {
    const arr = s.split("");
    var result = arr[0];
    for(var i = 0;i<arr.length;i++){
        if (i < 1 && i > arr.length-1){

        } else {
            
        }
    }
};