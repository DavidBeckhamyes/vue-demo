// 在一个自定义模块中，默认情况下，module.exports = {}
const age = 20;

// 向 module.exports 对象上挂载 username 属性
module.exports.username = "xiaoming";

// 向 module.exports 对象上挂载 sayHello 方法
module.exports.sayHello = function () {
    console.log('Hello!');
}

module.exports.age = age;

// 让 module.exports 指向一个全新的对象
module.exports = {
    nickName: "小黑",
    sayGoodBye: function () {
        console.log("ByeBye!");
    }
}

// 默认情况下，exports 和 module.exports 指向同一个对象。最终共享的结果，以 module.exports 指向的对象为准。