const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

// 使用 path.basename() 方法，可以获取路径中的最后一部分，常通过该方法获取路径中的文件名
const fullName = path.basename(fpath)
console.log(fullName) // index.html

// 去掉后缀只获取文件名
const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt) // index