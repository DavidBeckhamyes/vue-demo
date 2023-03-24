const express = require('express');

const app = express();

// 注意除了错误级别中间件，其他中间件必须在注册路由之前注册
// 解析表单中的 JSON 格式的请求体数据
app.use(express.json());

// 解析表单中的 URL-encoded 格式的请求体数据
app.use(express.urlencoded({ extended: false }));

app.post('/user', (req, res) => {
    // 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
    res.send(req.body);
})

app.listen('80', () => {
    console.log('http:127.0.0.1');
})