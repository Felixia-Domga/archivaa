// Quand on appuie sur le bouton de la page un message d'alerte s'affiche
const maPage = document.querySelector(".nav__link--active");
maPage.addEventListener("click", ()=>{
    alert("Bienvenue dans la liste des favoris!");
})

// Le message d'alerte pour le bouton de connexion
const btnConnexion = document.querySelector(".connexion");
btnConnexion.addEventListener("click", ()=>{
    alert("Bienvenue à la page de connexion");
})