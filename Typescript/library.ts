import { Book } from './book';

export class Library {

  private books: Book[];

  private address: string;

  private manager: string;


  constructor(books: Book[], address: string, manager: string) 
  {
    this.books = books;

    this.address = address;

    this.manager = manager;

  }

  public getBooks(): Book[] {
    return this.books;
  }

  public setBooks(books: Book[]): void {
    this.books = books;
  }

  public getAddress(): string {
    return this.address;
  }

  public setAddress(address: string): void {
    this.address = address;
  }

  public getManager(): string {
    return this.manager;
  }

  public setManager(manager: string): void {
    this.manager = manager;
  }

  public toString(): string {
    let result = "";

    for (let i = 0; i < this.books.length; i++) 
    {
      result += `Book${i + 1}:\n${this.books[i].toString()}\n`;
    }
    return result;
  }

  public getNumberOfBooks(): number {
    return this.books.length;
  }

  public findByAuthor(author: string): Book[] {
    return this.books.filter(book => book.getauthor() === author);
  }
}



