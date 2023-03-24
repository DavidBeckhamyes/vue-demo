const express = require('express');
const app = express();

// 定义第一个中间件函数
const mw1 = function (req, res, next) {
    console.log('调用了第1个全局中间件');
    // 把流转关系，转交给下一个中间件或路由
    next()
}

// 把 mw1 注册为全局生效的中间件
app.use(mw1);

// 定义第一个中间件函数
const mw2 = function (req, res, next) {
    console.log('调用了第2个全局中间件');
    // 把流转关系，转交给下一个中间件或路由
    next()
}

// 把 mw2 注册为全局生效的中间件
app.use(mw2);

app.get('/user', (req, res) => {
    res.send('User page.')
})

app.listen('80', () => {
    console.log('http://127.0.0.1')
})