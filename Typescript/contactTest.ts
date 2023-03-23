import { Contacts } from "./contacts";
import { Person } from "./person";

let contacts =  new Contacts();

let person1 =  new Person("Alvaro Blanco", 24, "13 Tomares");

let person2 = new Person("David", 17, "55 Calle Murcia ");

contacts.people.push(person1);
contacts.people.push(person2);

contacts.printCalendar();

