class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    fix() {
        if (this._state > 0 && this._state < 100) {
            this._state *= 1.5;
            if (this._state > 100) {
                this._state = 100;
            }
        }
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

let sherlockHolmes = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log(sherlockHolmes.releaseDate);
console.log(sherlockHolmes.state);
sherlockHolmes.fix();
console.log(sherlockHolmes.state);

let picnicOfTheRoad = new FantasticBook("Аркадий и Борис Стругацкие","Пикник на обочине", 1972, 168);
console.log(picnicOfTheRoad.author);
picnicOfTheRoad.state = 10;
console.log(picnicOfTheRoad.state);
picnicOfTheRoad.fix();
console.log(picnicOfTheRoad.state);

class Library {
    constructor(name) {
    this.name = name;
    this.books = [];
    }
   
    addBook(book) {
    if (book.state > 30) {
    this.books.push(book);
    }
    }
   
    findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
    }
   
    giveBookByName(bookName) {
    let bookIndex = this.books.findIndex(book => book.name === bookName);
    if (bookIndex !== -1) {
    return this.books.splice(bookIndex, 1)[0];
    }
    return null;
    }
   }
   
   let library = new Library("Центральная библиотека");
   
   library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей о Шерлоке Холмсе",
      2019,
      1008
    )
   );
   library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
   );
   library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
   library.addBook(new Magazine("Мурзилка", 1924, 60));
   
   let oldBook = library.findBookBy("releaseDate", 1919);
   if (!oldBook) {
    library.addBook(
      new Book(
        "Иван Иванов",
        "Книга 1919 года",
        1919,
        200
      )
    );
   }
   
   let issuedBook = library.giveBookByName("Машина времени");
   console.log("Выдана книга:", issuedBook.name);
   
   issuedBook.state = 10;
   console.log("Состояние после повреждения:", issuedBook.state);
   
   issuedBook.fix();
   console.log("Состояние после восстановления:", issuedBook.state);
   
   if (issuedBook.state > 30) {
    library.addBook(issuedBook);
    console.log("Книга успешно возвращена");
   } else {
    console.log("Книгу невозможно вернуть из-за плохого состояния");
   }
   
   console.log("Текущее количество книг:", library.books.length);
   

   class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark < 2 || mark > 5) return;
  
      if (!this.marks[subject]) {
        this.marks[subject] = [];
      }
  
      this.marks[subject].push(mark);
    }
  
    getAverageBySubject(subject) {
      if (!this.marks[subject] || this.marks[subject].length === 0) return 0;
  
      let sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
      return sum / this.marks[subject].length;
    }
  
    getAverage() {
      let subjects = Object.keys(this.marks);
      
      if (subjects.length === 0) return 0;
  
      const totalAverage = subjects.reduce((acc, subject) => {
        return acc + this.getAverageBySubject(subject);
      }, 0);
  
      return totalAverage / subjects.length;
    }
  }
  
  const student = new Student("Олег Никифоров");
  student.addMark(5, "химия");
  student.addMark(5, "химия");
  student.addMark(5, "физика");
  student.addMark(4, "физика");
  student.addMark(6, "физика");
  
  console.log(student.getAverageBySubject("физика"));
  console.log(student.getAverageBySubject("биология"));
  console.log(student.getAverage());
  
