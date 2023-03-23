export class Book {
    private title: string;

    private nPages: number;

    private isbn: string;

    private author: string;

    private editorial: string;

    constructor(title: string, nPages: number, isbn: string, author: string, editorial:string) {

        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    
    public gettitle(): string {
        return this.title;
    }

    public getnPages(): number {
        return this.nPages;
    }

    public getisbn(): string {
        return this.isbn;
    }

    public getauthor(): string { 
        return this.author;
    }

    public geteditorial(): string { 
        return this.editorial;
    }
    
    public settitle(title:string): void{
        this.title= title;
    }

    public setnPages(nPages:number): void{
        this.nPages= nPages;
    }
    
    public setisbn(isbn:string): void{
        this.isbn= isbn;
    }

    public setauthor(author: string): void { 
        this.author=author;
    }

    public seteditorial(editorial: string): void {
        this.editorial = editorial
    }
    
    public toString(): string {
        
        return("Title - " + this.title + "\n" + "Number of Pages - " + this.nPages +  "\n" + "ISBN - " + this.isbn +  "\n" + "Author- " + this.author +  "\n"+ "Editorial - " + this.editorial +  "\n") 
    }
}