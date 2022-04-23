class Person {
    static persons = [];

    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
        if (this.age >= 18){
            this.legal = true;
        } else {
            this.legal = false
        }

    }
    toString (){
        let output = `${this.name}, ${this.age} år gammal. `
        !this.legal ? output += "Ej myndig." : output += "Myndig.";
        return output
    }

    birthday(){
        // Öka age med ett för varje person i arrayen persons.
        for (let person of Person.persons){
            person.age++;
        }
        return this.toString()
    }

    greetings(otherPerson){
        
    }

    
    
}
