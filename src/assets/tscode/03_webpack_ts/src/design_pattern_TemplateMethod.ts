// 设计模式之模板方法模式
(() => {
    abstract class Person {
        templateMethod(): void {
            console.log("上课");
            this.primitiveOperation1();
            console.log("放学");
            this.primitiveOperation2();
        }
        abstract primitiveOperation1(): void;  // 原语操作1 上课过程 学生：听课 老师：讲课
        abstract primitiveOperation2(): void;  // 原语操作2 作业过程 学生：写作业 提交作业 老师：批改作业 打分数
    }

    class Student extends Person {
        primitiveOperation1(): void {
            console.log("学生听课");
        }
        primitiveOperation2(): void {
            console.log("学生写作业，提交作业");
        }
    }

    class Teacher extends Person {
        primitiveOperation1(): void {
            console.log("老师讲课");
        }
        primitiveOperation2(): void {
            console.log("老师批改，提交作业");
        }
    }

    const student = new Student();
    student.templateMethod();
    console.log("##########################");
    const teacher = new Teacher();
    teacher.templateMethod();
})()