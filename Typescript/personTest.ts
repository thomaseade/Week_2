import { Person } from "./person";

let person = new Person("Pepa Pig", 24, "85 Cañada de la Viña");

console.log(person.name);
console.log(person.age);

person.printName();
console.log(person.yearOfBirth(2023));
console.log(person.getAddress());
person.setAddress("85, Cañada de la Viña");
console.log(person.getAddress());


