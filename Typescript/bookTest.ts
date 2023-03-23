import { Book } from "./book";

let book1 = new Book("Introducción a Javascript", 233,"2344433-BC23333","Joseph Smith","Now Editions");

console.log(book1.gettitle());
console.log(book1.getnPages());
console.log(book1.getisbn());
console.log(book1.getauthor());
console.log(book1.geteditorial());

console.log(book1.toString());
