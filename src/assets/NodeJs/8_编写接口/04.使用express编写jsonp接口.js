// 导入express模块
const express = require('express');
// 创建服务器实例
const app = express();

// 优先创建 JSONP 接口，【这个接口不会被处理成 CORS 接口】
// JSONP 原理本质上是客户端通过 script 标签把调用函数的名字发送给服务器，服务器返回函数的调用，在调用期间将参数传入
app.get('/api/jsonp', (req, res) => {
    // 1.获取客户端发送过来的回调函数的名字
    const functionName = req.query.callback;
    // 2.得到要通过 JSONP 形式发送给客户端的数据
    const data = { name: 'zs', age: 22 };
    // 3.根据前两步得到的数据，拼接出一个函数调用的字符串
    const scriptStr = `${functionName}(${JSON.stringify(data)})`;
    // 4.把上一步拼接得到的字符串，响应给客户端 <script></script> 标签进行解析执行
    res.send(scriptStr);
})

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