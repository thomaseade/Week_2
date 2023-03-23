"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("./library");
var book_1 = require("./book");
var book1 = new book_1.Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
var book2 = new book_1.Book("El cielo esta azul", 500, "123123-AB13123", "Thomas Eade", "Libros");
var books = [book1, book2];
var library = new library_1.Library(books, "85, Cañada de la Viña", "Thomas Ede");
console.log(library.toString());
console.log(library.getNumberOfBooks());
var buscarporautor = library.findByAuthor("Thomas Eade");
console.log(buscarporautor);
library.setAddress("Ruta de la Seda");
console.log(library.getAddress());
library.setManager("Rafa Carmona");
console.log(library.getManager());