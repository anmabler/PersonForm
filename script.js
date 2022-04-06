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

    if(password.value == ""){
        showError("passwordError");
    } else if (password.value != "Grit"){
        document.getElementById("passwordError").innerText = "Wrong password";
    }
    if (name.value == ""){
        showError("nameError");
    }
    if (age.value == ""){
        showError("ageError");
    }
    else{
        // skapa en instans av klassen Person med angivna parametrar.
        let person = new Person(name.value, age.value, password.value);
        console.log(person);
        name.value = "";
        age.value = "";
    }

    // lägg till den nya instansen i statiska arrayen persons.
    // Person.persons.append(person);

}

// Funktion för att visa felmeddelande under respektive input.
function showError(pId) {
    let errorP = document.getElementById(pId.toString());
    errorP.innerText = "Error! Missing value";
    errorP.removeAttribute("hidden");
}