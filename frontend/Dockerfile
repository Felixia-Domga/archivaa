#Le Dockerfile est la recette qui dit à notre application quoi faire, en donnant le où et le comment.

#Pour utiliser une image de base node.js légère basée sur Alpine Linux, c'est le 
# système d'exploitation minimal avec Node.js préinstallé
FROM node:20-alpine
#Pour indiquer où se trouvent les fichiers de l'application à l'intérieur du conteneur
#Avec ça, on crée et on se place dans le dossier /app dans le conteneur
WORKDIR /app
#Avec ça, on copie les fichiers de l'ordinateur (dossier actuel .) vers le conteneur (dossier /app)
COPY . .
#Ici avec yarn, on installe et on télécharge toutes les bibliothèques et dépendances nécessaires pour le projet. yarn est un gestionnaire de paquets comme npm, utilisé avec Node.js
RUN yarn install
#Le CMD indique à Docker quoi lancer au démarrage du conteneur
CMD ["node", "run", "dev"]
#Là bahh on indique sur quel port l'application doit écouter, dans notre cas le port 3000
EXPOSE 3000

#Pour la faire courte, Docker c'est comme une machine virtuelle qui sert à donner la recette ou encore la liste des choses à faire utils pour le déploiement de l'application
#et Jenkins c'est pour l'automatisation des tâches, bien que ça puisse se faire manuellement, Jenkins est préférable en cas de répétitions pour automatiser les processus et autres.