const express = require('express');

const app = express();

app.get('/user', (req, res) => {  // 1.1 路由
    throw new Error('服务器内部发生了错误!');  // 1.2 抛出一个自定义的错误
    res.send('User Page');
})

// 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃(处理异常，服务降级)
// 注意：错误级别的中间件，必须注册在所有路由之后！！！！
app.use((err, req, res, next) => {
    console.log('发生了错误:' + err.message);
    res.send('Error:' + err.message);
})

app.listen('80', () => {
    console.log('http://127.0.0.1');
})