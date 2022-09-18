// 设计模式之迭代器模式
(() => {
    interface Iterator {
        hasNext(): boolean;
        next(): Object;
    }

    class BookIterator implements Iterator {
        private index: number = 0;
        private bookAggregate: BookAggregate;

        constructor(bookAggregate: BookAggregate) {
            this.bookAggregate = bookAggregate;
        }

        hasNext(): boolean {
            if (this.index <= this.bookAggregate.getSize() - 1) {
                return true
            } else {
                return false

            }
        }

        next(): Object {
            const obj: Object = this.bookAggregate.getBook(this.index);
            this.index++;
            return obj
        }
    }

    interface Aggregate {
        createIterator(): Iterator
    }

    class BookAggregate implements Aggregate {
        private list: Array<Book> = [];

        addBook(book: Book): void {
            this.list.push(book);
        }

        getBook(index: number): Book {
            return this.list[index];
        }

        getSize(): number {
            return this.list.length;
        }

        createIterator(): Iterator {
            return new BookIterator(this);
        }
    }

    class Book {
        private name: string;
        private price: number;

        constructor(name: string, price: number) {
            this.name = name;
            this.price = price;
        }

        getName(): string {
            return this.name;
        }

        getPrice(): number {
            return this.price;
        }
    }

    const bookAggregate: BookAggregate = new BookAggregate();
    const books: string[] = ["数据结构", "操作系统", "计算机网络", "计算机组成原理"];
    const prices: number[] = [40, 35, 55, 50];
    for (let i = 0; i < 4; i++) {
        bookAggregate.addBook(new Book(books[i], prices[i]));
    }
    const bookIterator = bookAggregate.createIterator();
    while (bookIterator.hasNext()) {
        let book = <Book>bookIterator.next();
        console.log(book.getName() + '-------' + book.getPrice());
    }
})()