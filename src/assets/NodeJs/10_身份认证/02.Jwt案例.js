// 导入 express 模块
const express = require('express');
// 创建 express 的服务器实例
const app = express();

// TODO_01：安装两个包
// jsonwebtoken 用于生成 JWT 字符串
const jwt = require('jsonwebtoken')

// 解析表单中的 URL-encoded 格式的请求体数据
app.use(express.urlencoded({ extended: false }));

// express-jwt 用于将 JWT 字符串解析还原成 JSON 对象
const { expressjwt: expressJWT } = require('express-jwt')

// TODO_02：定义 secret 密钥
// 为保证 JWT 字符串的安全性，防止其在网络传输过程中被破解，需定义用于加密和解密的 secret 密钥
const secretKey = 'itHeima No1 ^_^';

// TODO_04：注册将 JWT 字符串解析还原成 JSON 对象的中间件
// unless({ path: [/^\/api\//] }) 指定哪些接口无需访问权限
// 注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到 req.user 属性上
app.use(expressJWT({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] }))

// 登录的 API 接口
app.post('/api/login', (req, res) => {
    const userInfo = req.body;
    if (userInfo.username != 'admin' || userInfo.password != '000000') {
        // 登录失败
        return res.send({ status: 1, msg: '登录失败!' })
    }
    // 登录成功
    // TODO_03：在用户登录成功之后，调用 jwt.sign() 方法生成 JWT 字符串。并通过 token 属性发送给客户端

    res.send({
        status: 200,
        message: '登录成功',
        // jwt.sign() 生成 JWT 字符串
        // 参数：用户信息对象、加密密钥、配置对象-token有效期
        // 尽量不保存敏感信息，因此只有用户名，没有密码
        token: jwt.sign({ username: userInfo.username }, secretKey, { expiresIn: '60s' })
    })
})

// 这是一个有访问权限的 API 接口
app.get('/admin/getinfo', (req, res) => {
    // TODO_05：使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端
    console.log(req.user)
    res.send({
        status: 200,
        message: '获取信息成功',
        data: req.username,  // 要发送给客户端的用户信息
    })
})

// TODO_06：使用全局错误处理中间件，捕获解析 JWT 失败后产生的错误
app.use((err, req, res, next) => {
    // 这次错误是由 token 解析失败造成的
    if (err.name === 'UnauthorizedError') {
        return res.send({ status: 401, message: 'Invalid token' })
    }
    res.send({ status: 500, message: 'Unknown error' })
})

// 调用 app.listen 方法，指定端口号并启动 web 服务器
app.listen('80', function () {
    console.log('Exprss Server running at http://127.0.0.1:80');
})