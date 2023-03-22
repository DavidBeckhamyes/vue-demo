const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // 1.获取请求的url地址
    const url = req.url;
    // 2.设置默认的相应内容为 404 Not found
    let content = '404 Not found';
    // 3.判断用户请求的是否为 / 或/index.html 首页
    // 4.判断用户请求的是否为 /about.html 关于页面
    if (url == '/' || url == '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url == '/about.html') {
        content = '<h1>关于</h1>'
    }
    // 5.设置 Content-Type 响应头，解决中文乱码的问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 6.向客户端响应内容
    res.end(content)
})

server.listen('80', function () {
    console.log('server running at http://127.0.0.1')
})