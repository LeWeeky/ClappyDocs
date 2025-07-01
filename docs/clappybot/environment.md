---
sidebar_position: 5
---
# 📝 Environment configuration

You need to create your own `.env` in the `data` folder, to do this, you can use one of these template files : `data/template.sqlite.env`, `data/template.mysql.env` according to the type of database you want (sqlite for local, mysql for remote).

`SERVICE_ID` is a custom unique identifier for your bot (useful if you want to manage a large number of bots using containers).

`DB_DRIVER` can be set to `mysql` (for remote db) or `sqlite` (for local db) IP or domain of your database

`DB_HOST` (only if `DB_DRIVER=mysql`) IP or domain of your database

`DB_USER` (only if `DB_DRIVER=mysql`) user for your database

`DB_PASSWORD` (only if `DB_DRIVER=mysql`) is the password of user in your database

`DB_PATH` (only if `DB_DRIVER=sqlite`) the path to your local database for example : `DB_PATH=data/main.sqlite`

`TOKEN` is the token of your [discord application](https://discord.com/developers/applications) (bot)

`API_URI` is an optional parameter if you wish to communicate with your api for certain reasons

`AUTHOR` your name or nickname or discord username

`AUTHOR_ID` id of your discord account

`AUTHOR_URL` your website, guild, youtube channel or other

`COMPANY` the name of your team of developers or project

`COMPANY_LOGO` a cute emoji for your team or project

`COMPANY_URL` team's website, guild, youtube channel or other

`MAIN_COMMAND` the main command of your bot for example : `MAIN_COMMAND=help`

Set your parameters and save them in the `data/.env` file.