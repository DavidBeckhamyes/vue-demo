const itheima = require('./index');

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';

const str = itheima.htmlEscape(htmlStr);
console.log(str);

const html = itheima.htmlUnEscape(str);
console.log(html);