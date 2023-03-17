let Person = require('./Person.js');


let persona1 = new Person("Thomas", "Eade", 90, 180, 1995, ["padel", "pesca", "tenis", "cocinar"]);

let imcpersona1 = persona1.Indicemasacorporal();

let edadpersona1 = persona1.edad(2023);

console.log(persona1);
console.log(imcpersona1);
console.log(edadpersona1);
persona1.printAll();
persona1.printHobbies();