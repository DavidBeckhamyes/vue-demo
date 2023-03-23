## 安装

```
npm install itheima-tools-zlh
```

## 导入

```js
const itheima = require('./index');
```

## 格式化时间

```js
// 调用方法，进行时间的格式化
const dt = itheima.dateFormat(new Date());
// 结果 2023-03-23 17:21:26
console.log(dt);
```

## 转义html中的特殊字符
```js
// 待转换的 HTML 字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';
// 调用htmlEscape方法进行字符串转换
const str = itheima.htmlEscape(htmlStr);
console.log(str);
```

## 还原html中的特殊字符
```js
// 待还原的 HTML 字符串
const html = itheima.htmlUnEscape(str);
console.log(html);
```

## 开源协议
ISC