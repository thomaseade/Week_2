let Contacts = require('./contacts.js')

let Person = require('./Person.js');



let contacts =  new Contacts();

let persona1 = new Person("Thomas", "Eade", 90, 180, 1995, ["padel", "pesca", "tenis", "cocinar"]);

let persona2 = new Person("Ana", "Perez", 70, 165, 1997, ["leer", "dormir", "TV", "pasear"])


contacts.persons.push(persona1);

contacts.persons.push(persona2);

contacts.printPersons();


