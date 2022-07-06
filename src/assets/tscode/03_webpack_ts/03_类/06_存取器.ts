(()=>{
    class Person {
        private name: string
        constructor(name: string) {
            this.name = name
        }
        // 读取器----负责读取数据的
        getName():string {
            return this.name
        }
        // 设置器----负责设置数据的
        setName(name: string) {
            this.name = name;
        }
    }
    // 实例化对象
    const person1: Person = new Person("詹凌瀚")
    person1.setName("刘国柱");
    console.log(person1.getName());
})()