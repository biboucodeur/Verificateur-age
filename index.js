function checkAge() {
    var birthdateInput = document.getElementById("birthdate").value;
    var birthdate = new Date(birthdateInput);
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    var monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    var resultElement = document.getElementById("result");
    if (isNaN(age)) {
        resultElement.textContent = "Veuillez entrer une date de naissance valide.";
    } else if (age >= 18) {
        resultElement.textContent = "Vous avez " + age + " ans. Vous êtes majeur.";
    } else {
        resultElement.textContent = "Vous avez " + age + " ans. Vous êtes mineur.";
    }
}