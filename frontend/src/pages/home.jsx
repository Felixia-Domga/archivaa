// Vite c'est un serveur front-end qui permet de mettre du code React en HTML sur notre page Web (ctrl + u)
//Au lieu de répéter 6 fois le bloc de code, on peut juste utiliser une boucle .map() sur une liste de données qui contient les informations de la carte de CER
import CerCard from "../components/cercard";
//Pour le chemin on utilise tjr ../, pas la peine d'y mettre le vrai chemin

//Un composant doit tjr commencer apr une majuscule même si le fichier est en minuscule sinon React va croire que c'est une balise
function Home() {
    //Liste des CERs (que l'on fera plus tard avec une API avec fletch/axios)
    const cers = [
        { id: 1, titre: "Prosit 3.2 Annuaire AD", auteur: "Sadjo Mamadou", description: "L'Annulaire Active Directory (AD) est un service de gestion des identités et des accès utilisé principalement dans les environnements Windows. il permet de ...", image: "assets/window.jpg" },
        { id: 2, titre: "Prosit 2.2 Modélisation", auteur: "Pauline Lock", description: "Le Langage de Modélisation Unifié, de l'anglais Unified Modeling Language, est un langage de modélisation graphique à base de pictogrammes conçu comme...", image: "assets/uml.png" },
        { id: 3, titre: "Prosit 3.3 API et Webservice", auteur: "Daryl Noupik", description: "Les API sont principalement axées sur la communication entre applications pour l'accès aux fonctionnalités. L'EDI se concentre sur l'énergie de documents...", image: "assets/api.jpg" },
    ];

    return (
        <div className="row g-4">
            {cers.map((cer) =>(
                <CerCard
                    key={cer.id}
                    titre={cer.titre}
                    auteur={cer.auteur}
                    description={cer.description}
                    image={cer.image}
                />
            ))}
        </div>  
    );
}

export default Home;