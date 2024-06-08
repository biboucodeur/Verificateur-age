function checkAge() {
    let birthdateInput = document.getElementById("birthdate").value;
    let birthdate = new Date(birthdateInput);
    let today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    let monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    let resultElement = document.getElementById("result");
    if (isNaN(age)) {
        resultElement.textContent = "Veuillez entrer une date de naissance valide.";
    } else if (age >= 18) {
        resultElement.textContent = "Vous avez " + age + " ans. Vous êtes majeur.";
    } else {
        resultElement.textContent = "Vous avez " + age + " ans. Vous êtes mineur.";
    }
}