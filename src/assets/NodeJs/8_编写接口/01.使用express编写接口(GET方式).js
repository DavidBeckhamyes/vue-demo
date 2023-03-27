// 导入express模块
const express = require('express');
// 创建服务器实例
const app = express();

// 一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域的问题
const cors = require('cors');
app.use(cors());

// 导入路由模块
const apiRouter = require('./apiRouter(GET)');
// 把路由模块，注册到app上
app.use('/api', apiRouter);

app.listen('80', () => {
    console.log('express running at localhost:80');
})