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
        // SKriv ut namn, ålder på det objekt som kallar på funktionen.
        let output = `${this.name}, ${this.age} år gammal. `
        // om denne person är under 18, skriv ut "Ej myndig", annars skriv ut "Myndig"
        !this.legal ? output += "Ej myndig." : output += "Myndig.";
        return output
    }

    birthday(){
        // Öka age med ett för varje person i arrayen persons.
        this.age++;

    }

    // Skriv ut ett hälsningsmeddelande
    greetings(otherPerson){ 
        let greetDiv = document.getElementById("greetings");
        if (this !== otherPerson){
            greetDiv.innerHTML += `<p>Hej ${otherPerson.name}. Mitt namn är ${this.name}.</p>`
        }

    }
            

    
    
}
