// Le message d'alerte pour le lien de connexion au compte
const btnConnexion = document.querySelector(".lien_connexion");
btnConnexion.addEventListener("click", ()=>{
    alert("Bienvenue à la page de Connexion au compte!");
})

function validerFormulaire(){
    const nom = document.myForm.nom.value.trim();
    const email = document.myForm.email.value.trim();
    const password = document.myForm.password.value.trim();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexLettres = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;

    //Validation du nom
    if (nom==""){
        alert("Merci d'indiquer votre nom svp");
        return false;
    }
    else if (!regexLettres.test(nom) || nom.length<3){
        alert("Le nom ne doit être composé que de lettres et en avoir au moins 3");
        return false;
    }

    //Validation de l'email
    if (email==""){
        alert("Merci d'indiquer votre email svp");
        return false;
    }
    else if (!regexEmail.test(email)){
        alert("Entre un email valide ex: exemple@domaine.com")
        return false
    }

    //Validation du mot de passe
    if (password==""){
        alert("Merci d'indiquer votre mot de passe");
        return false;
    }

    // Si tout est validé alors true
    alert("Compte créé avec succès!");
    return true;
}