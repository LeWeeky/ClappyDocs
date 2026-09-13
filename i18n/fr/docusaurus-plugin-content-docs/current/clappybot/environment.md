---
sidebar_position: 5
---
# 📝 Configuration de l'environnement

Vous avez besoin de créer votre propre `.env` à la racine du projet, pour le faire vous pouvez utiliser l'une des références fournies dans [le dépôt](https://github.com/LeWeeky/clappybot) en fonction du type de base de données dont vous avez besoin (sqlite pour du local / développement, mysql/mariadb ou postgres pour une solution à distance / production).

`SERVICE_ID` un identifiant unique pour votre bot (très utile si vous voulez gérer un grand nombre de bots en utilisant des conteneurs)

`DB_DRIVER` votre type de base de données parmis celles supportées : `mysql` ou `postgres` (pour une db à distance) ou `sqlite` (pour une db locale)

`DB_NAME` nom de la base de données 

`DB_HOST` (pas besoin si `DB_DRIVER=sqlite`) IP ou domaine de la base de données

`DB_USER` (pas besoin si `DB_DRIVER=sqlite`) utilisateur pour de la base de données

`DB_PASSWORD` (pas besoin si `DB_DRIVER=sqlite`) mot de passe de la base de données

`DB_FOLDER_PATH` le dossier dans lequel ranger les bases de données, par exemple : `DB_FOLDER_PATH=./data/`

`TOKEN` le token de votre [application discord](https://discord.com/developers/applications) (de votre bot en gros)

`API_URI` c'est un paramètre optionel dans le cas où vous avez besoin de communiquer avec votre propre api

`AUTHOR` Vous nom ou pseudo discord

`AUTHOR_ID` id de votre compte discord (important pour les permissions)

`AUTHOR_URL` votre site, chaîne youtube, réseaux sociaux ou autre

`COMPANY` le nom de votre équipe de développeurs ou marque

`COMPANY_LOGO` un emoji qui représente votre équipe ou marque

`COMPANY_URL` le site, serveur, chaîne ou réseaux sociaux de votre équipe ou marque

`MAIN_COMMAND` le nom de la commande principale du bot : `MAIN_COMMAND=help`

Définissez vos propres paramètres et enregistrez tout ça dans le fichier `.env`.