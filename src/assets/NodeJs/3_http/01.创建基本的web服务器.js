const http = require('http')

// 创建 web 服务器实例
const server = http.createServer()

// 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', function (req, res) {
    // req.url是客户端请求的url地址
    const url = req.url
    // req.method是客户端请求的method类型
    const method = req.method
    const str = `您请求的 url 地址是 ${url}, 请求的 method 类型是 ${method}`

    // 设置 Content-Type 响应头，解决中文乱码的问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 向客户端响应内容
    res.end(str)
})

// 调用 server.listen(端口号, cb回调)方法 即可启动web服务器
server.listen(8080, function () {
    console.log('server running at http://127.0.0.1:8080')
})