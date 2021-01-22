
DESCRIPTION DU PROJET

Ce mini projet permet d'afficher à la suite différentes photos présentent dans une répertoire en local.
Les informations liées aux photos (id, titre, description, path) sont stockées dans une base de données 
PostgreSQL. Le programme côté client est développé en React. Côté serveur on utilise ExpressJS.

ACTIONS A EFFECTUEES AU PREALABLE

1. Créer un dossier "photos" dans "client/public/static"

2. Ajouter des photos dans ce dossier

3. Installer PostgreSQL

3. Changer le mot de passe dans le champ "password" du fichier "server/db.js" par le mot de passe du compte utilsateur postgres local défini par l'utilisateur.
Le fichier "db.js" permet de crééer un "pool" pour connecter le serveur à la base de données PostgreSQL

4. Exécuter le contenu du fichier "database.sql" pour créer la base de donnée et la table dédiée aux photos (NB : le nom de la BDD ici est "galerie")

5. Alimenter la base de données en renseignant un champ "title" pour le titre, "description" pour la description et "path" pour le chemin d'accès de la photo

Exemple de requête POST sur la BDD au format JSON (http://localhost:5000/galerie) :
{
    "title" : "titre 1",
    "description" : "description 1",
    "path" : "/static/photos/photo_1.jpg"
}
NB : le nom de fichier de la photo ici est "photo_1"


6. Exécution des processus côté client et serveur pour tester le bon fonctionnement de l'application

Pour exécuter le processus node côté client (http://localhost:3000) :
- lancer "npm install" pour installer toutes les dépendances du projet (côté client)
- lancer ensuite "npm start" pour exécuter le processus (ouverture de la page web sur navigateur)

Pour exécuter le processus node côté server http://localhost:5000) :
- lancer "npm install" pour installer toutes les dépendances du projet (côté server)
- lancer ensuite "npm start" pour exécuter le processus (ouverture de la page web sur navigateur)


