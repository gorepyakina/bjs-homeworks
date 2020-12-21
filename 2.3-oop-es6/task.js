// Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        if (this.state < 100) {
            this.state = this.state * 1.5;
        }
    }

    set state(state) {
        if (state <= 0) {
            this._state = 0;
        } else if (state > 100)  {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

// Задача 2
class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        let find = this.findBookBy("name", bookName);
        if (find !== null) {
            this.books.splice(this.books.indexOf(find), 1);
        } else {
            return null;
        }
    }
    
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); 
console.log(library.findBookBy("releaseDate", 1924).name);

console.log("Количество книг до выдачи: " + library.books.length);
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); 

// Задача 3

class StudentLog {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (typeof this[subject] === "undefined") {
            this[subject] = [];
        }

        if (grade >= 1 && grade <= 5) {
            this[subject].push(grade);
            return this[subject].length;
        } else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
            return this[subject].length;
        }
    }

    getAverageBySubject(subject) {
        if (typeof this[subject] === "undefined") {
            return 0;
        }
        if (this[subject].length === 0) {
            return 0;
        }

        let sum = 0;

        for (let i = 0; i < this[subject].length; i++) {
            sum += parseInt(this[subject][i]);
        }
        return sum / this[subject].length;
    }

    getTotalAverage() {
        let sum = 0;
        let subjects = 0;

        for (let key in this) {
            if (key == "name") {
                continue;
            }
            sum += this.getAverageBySubject(key);
            ++subjects;
        }
        if (subjects === 0) {
            return 0;
        }

        return sum / subjects;
    }
}

