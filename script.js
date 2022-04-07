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


    // OM password = Grit, name inte är tomt och age inte är tomt, skapa en instans av klassen Person med angivna parametrar.
    if (password.value == "Grit" && name.value != "" && age.value !=""){
        let person = new Person(name.value, age.value, password.value);
        console.log(person);
        name.value = "";
        age.value = "";
    // Om inget lösenord/namn/ålder angetts, kalla på funktionen showError och skicka med id på paragrafen där felmeddelandet ska visas.
    } 
    if (password.value == ""){
        showError("passwordError");
    } 
    if (password.value != "Grit" && password.value.length > 0) {
        document.getElementById("passwordError").innerText = "Wrong password";
    } 
    if (name.value == ""){
        showError("nameError");
    } 
    if (age.value == ""){
        showError("ageError");
    }

    // if(password.value == ""){
    //     showError("passwordError");
    // } else if (password.value != "Grit"){
    //     document.getElementById("passwordError").innerText = "Wrong password";
    // }
    // if (name.value == ""){
    //     showError("nameError");
    // }
    // if (age.value == ""){
    //     showError("ageError");
    // }
    // else{
    //     // skapa en instans av klassen Person med angivna parametrar.
    //     let person = new Person(name.value, age.value, password.value);
    //     console.log(person);
    //     name.value = "";
    //     age.value = "";
    // }

    // lägg till den nya instansen i statiska arrayen persons.
    // Person.persons.append(person);

}

// Funktion för att visa felmeddelande under respektive input.
function showError(pId) {
    let errorP = document.getElementById(pId.toString());
    errorP.innerText = "Error! Missing value";
    errorP.removeAttribute("hidden");
}