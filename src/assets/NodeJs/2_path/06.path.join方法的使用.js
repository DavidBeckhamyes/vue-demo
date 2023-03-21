const fs = require('fs');
const path = require('path');

// 注意 ../ 会抵消前面的路径
// ./ 会被忽略
fs.readFile(path.join(__dirname, '../file/成绩.txt'), 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log("文件读取失败!", err)
    }
    console.log("文件读取成功!");
})