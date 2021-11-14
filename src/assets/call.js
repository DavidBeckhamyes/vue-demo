function Person(a, b, c, d) {
    console.log("打印的名字是:",this.name);
    console.log(a, b, c, d)
}

var egg = {
    name: '蛋老师',
}

Function.prototype.newCall = function(obj) {
    var obj = obj || window;  // 处理对象为null的情况
    obj.p = this;
    console.log('函数中生成的参数数组是:',arguments);
    const newArguments = [];
    for (var i = 1; i < arguments.length; i++) {
        newArguments.push(arguments[i]);
    }
    // 数组和字符串相加的时候，数组会调用toString方法
    obj.p(...newArguments);
    delete obj.p;
}

Person.newCall(egg, '点赞', '投币', '转发', '充电');