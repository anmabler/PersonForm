console.log("Hello World!");

let form = document.getElementById("form");

document.getElementById("form").addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("submit function");
    addPerson();
})


function addPerson(){
   
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
        console.log(person);
        Person.persons.push(person)
        showPersons();
        // name.value = "";
        // age.value = "";
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

function showPersons() {
    Person.persons.forEach(person => {
        document.getElementById('output').innerHTML = '<p>'+`${person.toString()}`+'</p>'
        
    });
}
