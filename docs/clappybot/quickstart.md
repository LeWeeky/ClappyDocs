---
sidebar_position: 2
---
# 🚀 Quick Start

Let's create your first bot! The first step is cloning this repository and go inside.

```
git clone https://github.com/LeWeeky/clappybot.git
```
```
cd clappybot
```

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

Now we need a first module for the settigns, don't worry we can clone this one : 
```
git clone https://github.com/LeWeeky/settings-module-for-clappybot.git sources/modules/mybotsettings
```

This is an option, but you'll probably want to create your own module to add your functionalities. That's why there's a module template that will be a great help in developing your bot (don't forget to read the [README.md](https://github.com/LeWeeky/Module-template-for-clappybot)):
```
git clone https://github.com/LeWeeky/Module-template-for-clappybot.git sources/modules/template
```

Before the first run, make sure all intents are enabled in your [discord application](https://discord.com/developers/applications). Then you can check for updates and install dependencies by running this command :
```
npm run update
```

Once done, you can start as follows:

for 🐧 **Linux** and 🍎 **MacOS** users
```
npm run dev
```

for 🪟 **Windows** users
```
node index.js
```

If you are a 🪟 **Windows** user it is recommended that you define the debug logs you want in your `.env` file like this:
```
DEBUG_INFO=true
DEBUG_TRACE=true
DEBUG_ERROR=true
DEBUG_WARING=true
```

Now your bot should be online, congratulations 🎉 ! For the time being, you'll need to define a "main guild", which you can do using `/setguild` command, supplied with the module settings. Once this is done, you can set up a channel for announcements (updates, changes) with this command `/setsupport`.