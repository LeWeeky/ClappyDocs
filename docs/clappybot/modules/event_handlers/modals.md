---
sidebar_position: 4
---
# 📝 Modals


## ⚠️ Requirements 

If it's your first modal handler you may not have [` Modal `](https://discordjs.guide/interactions/modals.html#building-and-responding-with-modals). You can create one with this simple command template:
```js
const {  ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, SlashCommandBuilder } = require("discord.js");

async function parse(interaction)
{
	const modal = new ModalBuilder()
		// replace "doc" by the name of your module
		.setCustomId('doc-who-are-you')
		.setTitle('Who are you?');

	const name_input = new TextInputBuilder()
		.setCustomId('name')
		.setLabel("What is your name?")
		.setStyle(TextInputStyle.Short);

	const country_input = new TextInputBuilder()
		.setCustomId('country')
		.setLabel("Where do you comme from?")
		.setStyle(TextInputStyle.Short);

	const firstActionRow = new ActionRowBuilder().addComponents(name_input);
	const secondActionRow = new ActionRowBuilder().addComponents(country_input);

	modal.addComponents(firstActionRow, secondActionRow);

	await interaction.showModal(modal);
}

module.exports = {
	parse,
	name: "modal",
	permissions: [],
	builder: new SlashCommandBuilder()
		.setName("modal")
		.setDescription("A simple test modal."),
	any_guild: false,
	dm: false
}
```

Here we will handle modal *who-are-you* from module *doc*. The syntax for button customId is pretty simple :
*module_name* + *-* + *button_name* (e.g: ` doc-who-are-you `).

⎯ **Why you must use clappybot's syntax ?**

Because now, if you disable module *doc* and press "send" in any modal from this module, system will tell you
that the modal doesn't work because the **module is disabled** (instead of telling you that the modal doesn't work
because there is a bug or missing file).

## 👍 Handle a modal

The first thing to do it's create a file inside ` ./sources/modules/<module_name>/modals `
(replace ` <module_name> ` with the name of your module). In this example, we called the
modal ` who-are-you ` so let's create ` ./sources/modules/<module_name>/modals/who-are-you.js `
and paste this code :
```js
const { MessageFlags } = require("discord.js");

async function parse(interaction)
{
	const name = interaction.fields.getTextInputValue('name');
	const country = interaction.fields.getTextInputValue('country');

	interaction.reply({
		content: `Hi! I'm happy to meet you **${name}** from **${country}**!`,
		flags: [MessageFlags.Ephemeral]
	})
}

module.exports = {
	parse,
	// replace "doc" by the name of your module
	customId: "doc-who-are-you",
	permissions: [],
	any_guild: false,
	dm: false
}
```

The method ` parse ` is run by system when a modal is submited.
```js
async function parse(interaction)
```
As you can see we have only one argument:
- ` interaction ` → corresponding to the [event](https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files) (` ModalSubmitInteraction `) 

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

- ` parse ` → method to handle the submit
- ` customId ` → customId of the button we want to handle
- ` permissions ` → list of methods to check if` interaction.member ` has the right permissions
- ` any_guild ` → if false, the command can be executed only on the main guild
- ` dm ` → if true, we can use this interaction in direct messages
