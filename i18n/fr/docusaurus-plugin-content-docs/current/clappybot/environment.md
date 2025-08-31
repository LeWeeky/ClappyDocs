---
sidebar_position: 5
---
# 📝 Configuration de l'environnement

Vous avez besoin de créer votre propre `.env` dans le dossier `data`, pour le faire vous pouvez utiliser un de ces références : `data/template.sqlite.env`, `data/template.mysql.env` according to the type of database you want (sqlite for local, mysql for remote).

`SERVICE_ID` un identifiant unique pour votre bot (très utile si vous voulez gérer un grand nombre de bots en utilisant des conteneurs)

`DB_DRIVER` peut-être défini comme `mysql` (pour une db à distance) ou `sqlite` (pour une db locale)

`DB_HOST` (seulement si `DB_DRIVER=mysql`) IP ou domaine de la base de données

`DB_USER` (seulement si `DB_DRIVER=mysql`) utilisateur pour de la base de données

`DB_PASSWORD` (seulement si `DB_DRIVER=mysql`) mot de passe de la base de données

`DB_PATH` (seulement si `DB_DRIVER=sqlite`)  le chemin d'accès vers la base de données, par exemple : `DB_PATH=data/main.sqlite`

`TOKEN` le token de votre [application discord](https://discord.com/developers/applications) (de votre bot en gros)

`API_URI` c'est un paramètre optionel dans le cas où vous avez besoin de communiquer avec votre propre api

`AUTHOR` Vous nom ou pseudo discord

`AUTHOR_ID` id de votre compte discord (important pour les permissions)

`AUTHOR_URL` votre site, chaîne youtube, réseaux sociaux ou autre

`COMPANY` le nom de votre équipe de développeurs ou marque

`COMPANY_LOGO` un emoji qui représente votre équipe ou marque

`COMPANY_URL` le site, serveur, chaîne ou réseaux sociaux de votre équipe ou marque

`MAIN_COMMAND` le nom de la commande principale du bot : `MAIN_COMMAND=help`

Définissez vos propres paramètres et enregistrez tout ça dans le fichier `data/.env`.