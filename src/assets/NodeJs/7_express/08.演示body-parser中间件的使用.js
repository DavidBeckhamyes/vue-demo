const express = require('express');

const app = express();

// 导入解析表单数据的中间件 body-parser
const parser = require('body-parser');
// 使用 app.use() 注册中间件
app.use(parser.urlencoded({ extended: false }));

app.post('/user', (req, res) => {
    // 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
    res.send(req.body);
})

app.listen('80', () => {
    console.log('http:127.0.0.1');
})