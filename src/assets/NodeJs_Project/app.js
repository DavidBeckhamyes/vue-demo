const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 导入并配置 cors 中间件，解决跨域问题
const cors = require('cors')
app.use(cors())

// 配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 导入注册用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007, function () {
    console.log('api server running at http://127.0.0.1:3007')
})