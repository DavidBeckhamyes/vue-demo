// 设计模式之访问者模式
(() => {
    interface Visitor {
        visitTeacher(teacher: Teacher): void;  // 访问老师
        visitStudent(student: Student): void;  // 访问学生
    }

    class Visitor1 implements Visitor {
        visitStudent(student: Student): void {
            console.log("访问者1访问学生", student.getName());
        }
        visitTeacher(teacher: Teacher): void {
            console.log("访问者1访问老师", teacher.getName());
        }
    }

    class Visitor2 implements Visitor {
        visitStudent(student: Student): void {
            console.log("访问者2访问学生", student.getName());
        }
        visitTeacher(teacher: Teacher): void {
            console.log("访问者2访问老师", teacher.getName());
        }
    }

    class PersonStructure {
        private personList: Array<Person> = [];

        constructor() {
            this.personList.push(new Student("张三"));
            this.personList.push(new Student("李四"));
            this.personList.push(new Student("王五"));

            this.personList.push(new Teacher("张老师"));
            this.personList.push(new Teacher("王老师"));
            this.personList.push(new Teacher("赵老师"));
        }

        accept(visitor: Visitor) {
            for (const person of this.personList) {
                person.accept(visitor);
            }
        }
    }

    abstract class Person {
        private name: string;

        constructor(name: string) {
            this.name = name;
        }

        getName(): string {
            return this.name;
        }

        abstract accept(visitor: Visitor): void;
    }

    class Student extends Person {
        constructor(name: string) {
            super(name);
        }
        accept(visitor: Visitor): void {
            visitor.visitStudent(this);
        }
    }

    class Teacher extends Person {
        constructor(name: string) {
            super(name);
        }
        accept(visitor: Visitor): void {
            visitor.visitTeacher(this);
        }
    }

    const structure: PersonStructure = new PersonStructure();
    const visitor1 = new Visitor1();
    console.log("访问者1的访问记录:");
    structure.accept(visitor1);
    console.log("#####################");
    const visitor2 = new Visitor2();
    console.log("访问者2的访问记录:");
    structure.accept(visitor2);
})()