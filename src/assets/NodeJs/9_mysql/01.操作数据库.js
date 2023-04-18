// 1.导入mysql模块
const mysql = require('mysql');
// 2.建立与 Mysql 数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1',  // 数据库的 IP 地址
    user: 'root',  // 登录数据库的用户名
    password: '123456',  // 登录数据库的密码
    database: 'my_db_01'  // 指定要操作哪个数据库
})

// 3.测试 mysql 模块能否正常工作
// db.query('select 1', (err, results) => {
//     // mysql 模块工作期间报错了
//     if (err) return console.log(err.message);
//     // 能够成功执行 mysql 模块
//     console.log(results);
// })

// 操作一：查询 user 表中所有的用户数据
// const sqlStr = "select * from user"
// db.query(sqlStr, (err, results) => {
//     // 查询数据失败
//     if (err) return console.log(err.message);
//     // 查询数据成功
//     // 注意：如果执行的是 select 查询语句，则执行的结果是数组
//     console.log(results);
// })

// 操作二：向 user 表中，新增一条数据，其中 username 的值为 Spider-Man，password 的值为 pcc123
// const user = { username: 'Spider-Man', password: 'pcc123' };
// // 定义待执行的 SQL 语句
// const sqlStr = "insert into user (username, password) values(?,?)";
// // 执行 SQL 语句
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//     // 执行 SQL 语句失败
//     if (err) return console.log(err.message);
//     // 执行成功了
//     // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
//     // 可以通过 affectedRows 属性，来判断是否插入数据成功
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功!');
//     }
// })

// 操作三：演示如何更新用户的信息
// const user = { id: 3, username: 'aaa', password: '000' };
// // 定义待执行的 SQL 语句
// const sqlStr = "update user set username=?, password=? where id=?";
// // 执行 SQL 语句
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//     // 执行 SQL 语句失败
//     if (err) return console.log(err.message);
//     // 执行成功了
//     if (results.affectedRows === 1) {
//         console.log('更新数据成功!');
//     }
// })

// 操作四：删除 id 为 5的用户
// 定义待执行的 SQL 语句
// const sqlStr = "delete from user where id=?";
// // 执行 SQL 语句
// db.query(sqlStr, 5, (err, results) => {
//     // 执行 SQL 语句失败
//     if (err) return console.log(err.message);
//     // 执行成功了
//     if (results.affectedRows === 1) {
//         console.log('删除数据成功!');
//     }
// })

// 操作五：标记删除-使用 update 语句替代 delete 语句，只更新数据的状态，并没有真正删除
// 定义待执行的 SQL 语句
const sqlStr = "update user set status=? where id=?";
// 执行 SQL 语句
db.query(sqlStr, [1, 2], (err, results) => {
    // 执行 SQL 语句失败
    if (err) return console.log(err.message);
    // 执行成功了
    if (results.affectedRows === 1) {
        console.log('标记删除数据成功!');
    }
})