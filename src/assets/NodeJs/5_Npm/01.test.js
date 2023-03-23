// 导入自定义的格式化时间的模块
const Time = require('./01.dateFormat方法的使用');

// 调用方法，进行时间的格式化
const dt = new Date();

const newDt = Time.dateFormat(dt);
console.log(newDt);