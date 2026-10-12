// Le message d'alerte pour le lien de création de compte
const btnCreation = document.querySelector(".lien_creation");
btnCreation.addEventListener("click", ()=>{
    alert("Bienvenue à la page de Création de compte!");
})

function validerFormulaire() {
    const email = document.myForm.email.value.trim();
    const password = document.myForm.password.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email=="") {
        alert("Merci d'entrer votre email svp");
        return false;
    }
    else if (!regexEmail.test(email)){
        alert("Veillez entre un email valide, ex: exemple@domaine.com")
        return false;
    }

    if (password=="") {
        alert("Merci d'entrer votre mot de passe svp");
        return false;        
    }

    alert("Connexion réussie!");
    return true;
}