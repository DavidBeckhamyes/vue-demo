(() => {
    // 访问修饰符: 用来描述类内部的属性/方法的可访问性
    //   public: 默认值, 公开的外部也可以访问
    //   private: 只能类内部可以访问 外部和子类无法访问
    //   protected: 类内部和子类可以访问 外部无法访问

    class Person {
        protected name: string;
        constructor(name: string) {
            this.name = name;
        }
        play() {
            console.log("我喜欢玩：", this.name)
        }
    }

    class Student extends Person {
        constructor(name: string) {
            super(name);
        }
        play() {
            console.log("我喜欢玩：", this.name)
        }
    }
    
    const stu = new Student("小米");
    // console.log(stu.name) name属性定义为protected关键字 只能在类内部及其子类中访问 此时为外部访问故而报错
})()