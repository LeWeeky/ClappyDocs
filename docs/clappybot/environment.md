---
sidebar_position: 5
---
# 📝 Environment configuration

You need to create your own `.env` at the root of your project, to do this, you can use one provided in the [repository](https://github.com/LeWeeky/clappybot) according to the type of database you want (sqlite for local / development, mysql/mariadb or postgres for remote / production).

`SERVICE_ID` is a custom unique identifier for your bot (useful if you want to manage a large number of bots using containers).

`DB_DRIVER` can be set to `mysql` (remote db), `postgres` (remote db) or `sqlite` (local / auto generated db)

`DB_NAME` name of the database

`DB_HOST` (not needed if `DB_DRIVER=sqlite`) IP or domain of your database

`DB_USER` (not needed if `DB_DRIVER=sqlite`) user for your database

`DB_PASSWORD` (not needed if `DB_DRIVER=sqlite`) is the password of user in your database

`DB_FOLDER_PATH` the path to your local database for example : `DB_FOLDER_PATH=./data/`

`TOKEN` is the token of your [discord application](https://discord.com/developers/applications) (bot)

`API_URI` is an optional parameter if you wish to communicate with your api for certain reasons

`AUTHOR` your name or nickname or discord username

`AUTHOR_ID` id of your discord account

`AUTHOR_URL` your website, guild, youtube channel or other

`COMPANY` the name of your team of developers or project

`COMPANY_LOGO` a cute emoji for your team or project

`COMPANY_URL` team's website, guild, youtube channel or other

`MAIN_COMMAND` the main command of your bot for example : `MAIN_COMMAND=help`

Set your parameters and save them inside the `.env` file.