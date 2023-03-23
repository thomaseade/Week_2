import { Person } from "./person";

export class Contacts {
    public people: Person[];

    constructor() { 
        this.people = [];
    }
    
    public printCalendar(): void {
        this.people.forEach(person => {

            console.log(person.name);
            console.log(person.age);
            console.log(person.getAddress());
            
        });
    }
    
}



