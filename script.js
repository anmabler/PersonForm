
document.getElementById("form").addEventListener('submit', function(event) {
    // förhindra sänding av formuläret
    event.preventDefault();
    addPerson();
})


function addPerson(){
    // Hämta id på alla input-fält, spara i en variabel
    let name = document.getElementById("nameInput");
    let age = document.getElementById("ageInput");
    let password = document.getElementById("passwordInput");

    // Hämta id på felmeddelande-paragrafer
    let nameErrorP = document.getElementById('nameError');
    let ageErrorP = document.getElementById('ageError');
    let passErrorP = document.getElementById('passwordError');

    // Göm tidigare felmeddelanden
    nameErrorP.setAttribute("hidden", "");
    ageErrorP.setAttribute("hidden", "");
    passErrorP.setAttribute("hidden", "")


    // OM password = Grit, name inte är tomt och age inte är tomt, skapa en instans av klassen Person med angivna parametrar.
    if (password.value == "Grit" && name.value != "" && age.value !=""){
        let person = new Person(name.value, age.value, password.value);
        // Lägg till personen i den statiska arrayen persons
        Person.persons.push(person)
        // Kalla på showPersons-funktionen för att skriva ut information om personerna
        showPersons();
    } 
    // Om inget lösenord/namn/ålder angetts, kalla på funktionen showError och skicka med id på paragrafen där felmeddelandet ska visas.
    if (password.value == ""){
        showError("passwordError");
    } 
    // Om lösenordet inte är "Grit", skriv ut ett annat felmeddelande.
    if (password.value != "Grit" && password.value.length > 0) {
        passErrorP.innerText = "Wrong password";
        passErrorP.removeAttribute("hidden");

    } 
    if (name.value == ""){
        showError("nameError");
    } 
    if (age.value == ""){
        showError("ageError");
    }

}

// Funktion för att visa felmeddelande under respektive input.
function showError(pId) {
    let errorP = document.getElementById(pId.toString());
    errorP.innerText = "Error! Missing value";
    errorP.removeAttribute("hidden");
}

// Funktion för att skriva ut alla personers info
function showPersons() {
    // rensa output
    document.getElementById('output').innerHTML = "";
    // skriv ut personernas info.
    Person.persons.forEach(person => {
        document.getElementById('output').innerHTML += '<p>'+`${person.toString()}`+'</p>'
        
    });
}

// Funktion för att kalla på metoden birthday
function callBirthday(){
    document.getElementById('output').innerHTML = "";
    for(let person of Person.persons){
        person.birthday();
        document.getElementById('output').innerHTML += '<p>'+`${person.toString()}`+'</p>'
    }
}

// Funktion för att kalla på klassmetoden greetings, så att alla personer hälsar på varandra.
function callGreetings(){
    for(let personX of Person.persons){
        for (let personY of Person.persons){
            personX.greetings(personY);
        }
    }
}