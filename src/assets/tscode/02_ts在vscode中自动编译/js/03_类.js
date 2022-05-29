// ts中书写js的类
(() => {
    // 定义一个类
    class Person {
        // 定义一个构造器函数
        constructor(firstName, lastName) {
            // 更新属性数据
            this.firstName = firstName;
            this.lastName = lastName;
            // 更新姓名
            this.fullName = this.firstName + "_" + this.lastName;
        }
    }
    // 定义个函数
    function showFullName(person) {
        return person.firstName + "_" + person.lastName;
    }
    // 实例化对象
    const person = new Person("诸葛", "孔明");
    console.log(showFullName(person));
})();
