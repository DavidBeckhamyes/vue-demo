(() => {
    // 访问修饰符: 用来描述类内部的属性/方法的可访问性
    //   public: 默认值, 公开的外部也可以访问
    //   private: 只能类内部可以访问
    //   protected: 类内部和子类可以访问

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
    // console.log(stu.name) 属性“name”受保护，只能在类“Person”及其子类中访问
})()