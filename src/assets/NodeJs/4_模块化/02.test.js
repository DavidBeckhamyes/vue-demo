// 在外界使用 require 导入一个自定义模块的时候，得到的成员
// 就是那个模块中，通过 module.exports 指向的那个对象
const custom = require('./02.自定义模块');

console.log(custom);