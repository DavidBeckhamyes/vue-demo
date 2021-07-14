window.onload = function () {
    console.log(combination([3,6,12,7,98,9],2))
    // console.log(searchInsert([1,3,5,6], 0));
    // longestPalindrome("ccc");
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
        while (start >= -1 && end < arr.length && arr[i] == arr[end]) {
            result = result + arr[end];
            end++;
        }
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


function combination(arr, m) {
    let r = [];
    _([], arr, m);
    return r;
    function _(t, a, m) {
      //t:临时数组 a:目标数组 m：多少个数进行组合
      if (m === 0) {
        r[r.length] = t;//相当于push
        return;
      }
      for (let i = 0; i <= a.length - m; i++) {
        //从0开始 到n-m
   
        let b = t.slice();//将t赋值给b 不能用=赋值，使用slice会形成新的数组赋值
        b.push(a[i])
        _(b, a.slice(i + 1), m - 1); 
      }
    }
  }
  