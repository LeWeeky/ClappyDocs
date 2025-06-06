---
sidebar_position: 2
---
# 🔎 Have a see inside

There is a lot of files inside ` sources/modules/templates ` but let's see what it all adds up to.

The only mandatory file for your module to be considered valid is `data.json` all the others are
completely optional, if you don't need them you can delete them. This is where you define the name
of the module, the emoji and the description, as shown below :
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

`buttons` → for your buttons

`channels` → 3 types of files are possible :
- those ending with `create.js` will be automatically launched when a channel is created
- those ending with `delete.js` will be automatically launched when a channel is deleted
- those ending with `update.js` will be automatically launched when a channel is updated

`commands` → for your commands

`members` → 3 types of files are possible :
- those ending with `join.js` will be automatically launched when a member joins a guild
- those ending with `leave.js` will be automatically launched when a member leaves a guild
- those ending with `update.js` will be automatically launched when a member is updated on a guild

`menus` → for your select menus

`messages` → 3 types of files are possible :
- those ending with `create.js` will be automatically launched when a message is created
- those ending with `delete.js` will be automatically launched when a message is deleted
- those ending with `update.js` will be automatically launched when a message is updated

`modals` → for your modals (forms)

`models` → models are a quick and easy way of creating objects linked to your database; please read the example of the /models command to understand this

`presences` → to check presences updates (status & activities of users and bots)

`reactions` → 2 types of files are possible :
- those ending with `add.js` will be automatically launched when a reaction is added to a message
- those ending with `remove.js` will be automatically launched when a reaction is removed from a message

`tasks` → define recurring tasks such as an automatic message or checking for updates

`data.json` → name, emoji and description for the module

`init.js` → any functions to be started when the bot is launched to initialise the module

`utils` → You will notice that there is a `utils` folder, which is not automatically imported by the system, it is a totally optional folder which can have any other name (it doesn't matter) in which you save functions, classes or anything else that can be used in your module

Each folder can contain as many files as necessary, please take care for folders that manage several
events (for example: create, update and delete events) to add the extension corresponding to the event
in question (channel_**create**.js, channel_**update**.js, channel_**delete**.js)

In the next few sections, you'll find out how this system will simplify your life when it comes to
creating features and managing databases.