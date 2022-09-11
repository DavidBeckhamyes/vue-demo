// 泛型接口: 在定义接口时，为接口中的属性或方法定义泛型类型，在使用接口时，再指定具体的泛型类型。
(() => {
    // 需求：定义一个类，用来存储用户的相关信息(id，名字，年龄)
    // 通过一个类的实例对象调用add方法可以添加多个用户信息对象，调用getUserId方法可以根据id获取某个指定的用户信息对象

    // 定义一个泛型接口
    interface IBaseCRUD<T> {
        data: T[];
        add: (user: T) => T;
        getUserId: (id: number) => T
    }

    // 定义一个用户信息的类
    class User {
        id?: number;
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    // 定义一个类，可以针对用户的信息对象进行增加及查询的操作
    // CRUD---->Create,Read,Update,Delete
    class UserCRUD implements IBaseCRUD<User>{
        data: User[] = [];
        add(user: User): User {
            // 产生id
            user.id = Date.now() + Math.random();
            // 把用户信息对象添加到data数组中
            this.data.push(user);
            return user
        };
        // 方法根据id查询指定的用户信息对象
        getUserId(id: number): User {
            return this.data.find(item => item.id === id);
        }
    }

    const userCRUD = new UserCRUD();
    const user1 = new User("小红", 17);
    const user2 = new User("losa", 17);
    const user3 = new User("jack", 17);
    const user4 = new User("小明", 17);
    userCRUD.add(user1);
    const { id } = userCRUD.add(user2);
    userCRUD.add(user3);
    userCRUD.add(user4);
    console.log(userCRUD.data);
    console.log(userCRUD.getUserId(id));
})()