const express = require('express');

const app = express();

// 可直接访问 file 目录下的静态资源
// e.g. http://127.0.0.1:8080/成绩.txt
// app.use(express.static('../file'));

// 通过带有 /file 前缀的地址访问 file 目录下的文件
app.use('/file', express.static('../file'))

app.listen('8080', () => {
    console.log("express server running at http://127.0.0.1");
})