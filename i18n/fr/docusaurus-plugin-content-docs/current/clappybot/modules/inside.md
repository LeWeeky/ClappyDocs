---
sidebar_position: 2
---
# 🔎 Un coup d'œil

Il y a beaucoup de fichiers dans ` sources/modules/templates ` mais voyons à quoi tout ça peu servir.

Le seul fichier obligatoire pour qu'un module soit considéré comme "valid" est `data.json`, tous les autres sont complètement optionels (si vous n'en avez pas besoin vous pouvez les supprimer). C'est ici que vous pourrez définir le nom du module, son émoji et sa description comme ci-dessous :
```json
{
	"title":
		"Template",
	"emoji":
		"👤",
	"description":
		"A module that serves as an example!"
}
```

`buttons` → pour vos boutons

`channels` → 3 types de fichiers possibles :
- ceux finissant par `create.js` seront automatiquement démarrés quand un salon est créé
- ceux finissant par `delete.js` seront automatiquement démarrés quand un salon est supprimé
- ceux finissant par `update.js` seront automatiquement démarrés quand un salon est mis à jour 

`commands` → pour vos commandes

`members` → 3 types de fichiers possibles :
- ceux finissant par `join.js` seront automatiquement démarrés quand un membre rejoint un serveur
- ceux finissant par `leave.js` seront automatiquement démarrés quand un membre quitte un serveur
- ceux finissant par `update.js` seront automatiquement démarrés quand un membre est mis à jour sur un serveur

`menus` → pour vos menus

`messages` → 3 types de fichiers possibles :
- ceux finissant par `create.js` seront automatiquement démarrés quand un message est créé
- ceux finissant par `delete.js` seront automatiquement démarrés quand un message est supprimé
- ceux finissant par `update.js` seront automatiquement démarrés quand un message est édité ou mis à jour

`modals` → pour vos formulaires

`models` → les modèles sont un moyen simple et rapide de créer des objects liés à votre base de données; pensez à lire les exemples fournis par la commande /models pour comprendre leur fonctionnement

`presences` → pour vérifier les mises à jours de statuts et activités des utilisateurs et bots

`reactions` → 2 types de fichiers possibles :
- ceux finissant par `add.js` seront automatiquement démarrés quand une réaction est ajoutée à un message
- ceux finissant par `remove.js` seront automatiquement démarrés quand une réaction est retirée d'un message

`tasks` → défini des tâches récurrentes comme des messages automatiques ou vérifications de mise à jours

`data.json` → nom, émoji, et description du module

`init.js` → toutes les fonction qui devront être démarrées au lancement du bot pour initialiser le module

`utils` → vous remarquerez qu'il y a un dossier `utiles`, celui-ci n'est pas automatiquement importé par le système, c'est un dossier totalement optionel (il peut même avoir le nom de votre choix), dedans vous pourrez installer vos fonctions, classes et tout ce dont vous aurez besoin plusieurs fois (dans plusieurs fichiers) dans votre module

Chaque dossier peut contenir autant de fichiers que nécessaire, faites attention aux dossiers qui peuvent gérer plusieurs events (par exemple : create, update et delete) et ajoutez les extensions correspondantes (exemple : channel_**create**.js, channel_**update**.js, channel_**delete**.js)

Dans le prochain poste, vous verrez comment ce système va vous simplifier la vie quand il sera temps de créer vos fonctionnalités et gérer une ou plusieurs base de données.