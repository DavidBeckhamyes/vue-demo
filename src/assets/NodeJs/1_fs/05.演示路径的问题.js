const fs = require('fs');
// 在使用 fs 模块操作文件时，如果提供的操作路径是以 ./ 或 ../ 开头的相对路径时，容易出现路径动态拼接错误的问题
// 原因：代码在运行的时候，会以执行 node 命令时所处的目录，动态拼接出被操作文件的完整路径
// fs.readFile('../file/成绩.txt', 'utf-8', function (err, dataStr) {
//     if (err) {
//         return console.log("读取文件失败!" + err.message)
//     }
//     console.log("文件读取成功!")
// })


// 解决方案：在使用 fs 模块操作文件时，直接提供完整的路径，从而防止路径动态拼接的问题
// __dirname 获取文件所处的绝对路径
fs.readFile(__dirname + '/../file/成绩.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log("读取文件失败!" + err.message)
    }
    console.log("文件读取成功!")
})