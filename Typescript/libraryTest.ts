import {Library} from  "./library"
import {Book} from  "./book"


let book1= new Book("Introducción a Javascript", 233, "2344433-BC23333","Joseph Smith","Now Editions");

let book2= new Book("El cielo esta azul", 500, "123123-AB13123", "Thomas Eade", "Libros");


let books = [book1, book2];

let library = new Library(books, "85, Cañada de la Viña", "Thomas Ede");

console.log(library.toString());
console.log(library.getNumberOfBooks());

let buscarporautor = library.findByAuthor("Thomas Eade");
console.log(buscarporautor);

library.setAddress("Ruta de la Seda");
console.log(library.getAddress());

library.setManager("Rafa Carmona");
console.log(library.getManager());


  