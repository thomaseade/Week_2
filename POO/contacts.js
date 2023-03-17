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

module.exports = Contacts
