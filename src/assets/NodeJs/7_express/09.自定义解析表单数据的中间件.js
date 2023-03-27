const express = require('express');

const app = new express();

// 导入处理 querystring 的 Node.js 内置模块
const qs = require('querystring');

// 这是解析表单数据的中间件
app.use(function (req, res, next) {
    // 定义中间件的具体业务逻辑
    // 1.定义一个 str 变量，用来存储客户端发送过来的请求体数据
    let str = '';
    // 2.监听 req 的 data 事件
    req.on('data', (chunk) => {
        str += chunk;
    })

    // 3.监听 req 的 end 事件
    req.on('end', () => {
        // 在 str 中存放的是完整的请求体数据
        console.log(str)
        // 把字符串格式的请求体数据，通过调用 qs.parse() 方法解析成对象格式
        const body = qs.parse(str);
        // 将解析出来的请求体对象，挂载为 req.body 属性
        req.body = body;
        next();
    })
})

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen('8080', () => {
    console.log('Express Server running at http://127.0.0.1')
})