// 设计模式之组合模式
(() => {
    // 抽象的组合文件包括文件夹和文件
    abstract class AbstractFile {
        protected name: string;
        constructor(name: string) {
            this.name = name;
        }
        public printName(): void {
            console.log(this.name);
        }
        // 定义一个抽象删除方法(删除的可能是文件夹也可能是文件)
        public abstract add(file: AbstractFile): void;
        // 定义一个抽象新增方法(新增的可能是文件夹也可能是文件)
        public abstract remove(file: AbstractFile): void;
        public abstract getChildren(): Array<AbstractFile>;
    }

    class Folder extends AbstractFile {
        private childrenList: Array<AbstractFile> = [];
        constructor(name: string) {
            super(name);
        }
        public add(file: AbstractFile): void {
            this.childrenList.push(file)
        }
        public remove(file: AbstractFile): void {
            for (var i = 0; i < this.childrenList.length; i++) {
                if (this.childrenList[i] == file) {
                    this.childrenList.splice(i, 1)
                }
            }
        }
        public getChildren(): AbstractFile[] {
            return this.childrenList;
        }
    }

    class File extends AbstractFile {
        constructor(name: string) {
            super(name);
        }
        public add(file: AbstractFile): void {
            return
        }
        public remove(file: AbstractFile): void {
            return
        }
        public getChildren(): AbstractFile[] {
            return null;
        }
    }
    const root: AbstractFile = new Folder("root");
    const folderA: AbstractFile = new Folder("folderA");
    const fileB: AbstractFile = new File("fileB");
    const fileC: AbstractFile = new File("fileC");
    root.add(folderA);
    root.add(fileB);
    folderA.add(fileC);
    console.log(root)
    // 遍历文件名称
    const func = function print(file: AbstractFile): void {
        file.printName();

        const childrenList = file.getChildren();
        if (childrenList == null) {
            return
        } else {
            for (let i = 0; i < childrenList.length; i++) {
                print(childrenList[i]);
            }
        }
    }
    func(root);
})()