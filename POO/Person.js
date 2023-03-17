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


module.exports = Person