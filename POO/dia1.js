class Person {
    
    constructor(nombre, apellidos, peso, altura, yearOfBirth, hobbies) {

        this.nombre = nombre
        this.apellidos = apellidos
        this.peso = peso
        this.altura = altura 
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;


    }

    Indicemasacorporal() {

        let imc= this.peso / (this.altura * this.altura);

        return imc;
    }

    edad(año2023) {

        let edad = año2023 - this.yearOfBirth;

        return edad;

    }

    printAll() {

        console.log( `Nombre - ${this.nombre} ; Apellidos - ${this.apellidos} ; Peso - ${this.peso} ; Altura - ${this.altura} ; Año de Nacimiento - ${this.yearOfBirth}` );

    }

    printHobbies() { 

        this.hobbies.forEach(hobbies => console.log(hobbies));
    }


}





let persona1 = new Person("Thomas", "Eade", 90, 180, 1995, ["padel", "pesca", "tenis", "cocinar"]);

let imcpersona1 = persona1.Indicemasacorporal();

let edadpersona1 = persona1.edad(2023);

console.log(persona1);
console.log(imcpersona1);
console.log(edadpersona1);
persona1.printAll();
persona1.printHobbies();





class Contacts {

    constructor() 
    {
        this.persons = [];
    }

    printPersons() 
    {
        this.persons.forEach(person => person.printAll());
    }
}


let contacts =  new Contacts();

let persona2 = new Person ("Ana", "Perez", 70, 165, 1997, ["leer", "dormir", "TV", "pasear"])

contacts.persons.push(persona1);

contacts.persons.push(persona2);

contacts.printPersons();


