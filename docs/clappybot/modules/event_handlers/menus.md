---
sidebar_position: 3
---
# 📖 Menus

## ⚠️ Requirements 

If it's your first menu handler you may not have [` Menu `](https://discordjs.guide/message-components/select-menus.html#building-string-select-menus). You can create one with this simple command template:
```js
const { ActionRowBuilder, SlashCommandBuilder, StringSelectMenuBuilder } = require("discord.js")

async function parse(interaction)
{
	const row = new ActionRowBuilder()
	.setComponents(
		new StringSelectMenuBuilder()
		// Replace "doc" by the name of your module
		.setCustomId("doc-test")
		.setOptions(
			{
				label: "Cat",
				emoji: "🐱",
				description: "If your favorite animal is cat",
				value: "cat"
			},
			{
				label: "Dog",
				emoji: "🐶",
				description: "If your favorite animal is dog",
				value: "dog"
			},
		)
	)
	interaction.reply({
		content: "Test Menu below.",
		components: [row]
	})
}

module.exports = {
	parse,
	name: "menu",
	permissions: [],
	builder: new SlashCommandBuilder()
		.setName("menu")
		.setDescription("A simple test menu."),
	any_guild: false,
	dm: false
}
```

Here we will handle menu *test* from module *doc*. The syntax for menu customId is pretty simple :
*module_name* + *-* + *menu_name* (e.g: ` doc-test `).

⎯ **Why you must use clappybot's syntax ?**

Because now, if you disable module *doc* and click on any menu from this module, system will tell you
that the menu doesn't work because the **module is disabled** (instead of telling you that the menu doesn't work
because there is a bug or missing file).

## 👍 Handle a menu

The first thing to do it's create a file inside ` ./sources/modules/<module_name>/menus `
(replace ` <module_name> ` with the name of your module). In this example, we called the
menu ` test ` so let's create  ` ./sources/modules/<module_name>/menus/test.js `
and paste this code :
```js
const { MessageFlags } = require("discord.js");

async function parse(interaction)
{
	const animal = interaction.values[0]

	interaction.reply({
		content: `I love **${animal}** too!`,
		flags: [MessageFlags.Ephemeral]
	})
}

module.exports = {
	parse,
	// replace "doc" by the name of your module
	customId: "doc-test",
	permissions: [],
	any_guild: false,
	dm: false
}
```

The method ` parse ` is run by system when a menu option is selected.
```js
async function parse(interaction)
```
As you can see we have only one argument:
- ` interaction ` → corresponding to the [event](https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files) (` InteractionMenu `) 

⎯ **Exports**

At the bottom of the file we have exports, which includes several important elements.
```js
module.exports = {
	parse,
	customId: "doc-test",
	permissions: [],
	any_guild: false,
	dm: false
}
```

- ` parse ` → method to handle the selection
- ` customId ` → customId of the menu we want to handle
- ` permissions ` → list of methods to check if` interaction.member ` has the right permissions
- ` any_guild `	→ if false, the command can be executed only on the main guild
- ` dm ` → if true, we can use this interaction in direct messages