function Person(a, b, c, d) {
    console.log("打印的名字是:", this.name);
    console.log(a, b, c, d)
    return {
        name: this.name,
        a, b, c, d
    }
}

Person.prototype.collection = '收藏';

var egg = {
    name: '蛋老师',
}

Function.prototype.newCall = function (obj) {
    var obj = obj || window;  // 处理对象为null的情况
    obj.p = this; // 这里的this指向的是Person方法,原因为隐式绑定
    console.log('函数中生成的参数数组是:', arguments);
    const newArguments = [];
    for (var i = 1; i < arguments.length; i++) {
        newArguments.push(arguments[i]);
    }
    // 数组和字符串相加的时候，数组会调用toString方法
    var result = obj.p(...newArguments);
    delete obj.p;
    return result;
}

Function.prototype.newApply = function (obj, arr) {
    var obj = obj || window;
    obj.p = this;
    console.log('函数中生成的参数数组是:', arguments);
    if (!arr) {
        var result = obj.p();
    } else {
        const newArguments = [];
        for (var i = 0; i < arr.length; i++) {
            newArguments.push(arr[i]);
        }
        // 数组和字符串相加的时候，数组会调用toString方法
        var result = obj.p(...newArguments);
    }
    delete obj.p;
    return result;
}

Function.prototype.newBind = function (obj) {
    if (typeof this != 'function') {
        throw new TypeError('错误!');
    }
    // that保存好this对象(Person函数)
    var that = this;
    // Array.prototype.slice.call(arguments)能将具有length属性的对象(key值为数字)转成数组。
    arr = Array.prototype.slice.call(arguments, 1),
    o = function() {},
    newf = function () {
        var arr2 = Array.prototype.slice.call(arguments);
        arrSum = arr.concat(arr2);
        if (this instanceof newf) {
            // 如果使用了new来调用函数 也就是发生了构造函数 那么实例(新对象)会绑定到函数调用的this上
            // 此时的this不是person函数，而是一个实例，也就是发生了new构造函数
            that.apply(this, arrSum);
        } else {
            that.apply(obj, arrSum);
        }
    }
    o.prototype = that.prototype;
    newf.prototype = new o;
    return newf
}

// console.log(Person.newCall(egg, '点赞', '投币', '转发', '充电'));
// console.log(Person.newApply(egg, ['点赞', '投币', '转发', '充电']));
// Person.newBind(egg, "点赞", "收藏")("投币", "转发");
var bibi = Person.newBind(egg, "点赞", "投币");
// 加入new会使得this指向失效
var b = new bibi("转发", "充电")
console.log(b.collection);