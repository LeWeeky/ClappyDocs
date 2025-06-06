---
sidebar_position: 1
---
# 🖲️ Commands

A command starts with a prefix (by default: +) or with / (for slash commands).

We are going to create a simple command that will give information about itself.
The first thing to do it's create a file inside ` ./sources/modules/<module_name>/commands `
(replace ` <module_name> ` with the name of your module). In this example, we can call the
command ` itself ` so let's create  ` ./sources/modules/<module_name>/commands/itself.js `
and paste this code :
```js
const { SlashCommandBuilder } = require("discord.js");

async function parse(interaction, cmd, args)
{
	if (interaction.options)
	{
		// Slash command (/itselt)
		await interaction.reply(
			"🖲️ **Command type:**\n- slash command\n"+
			`📇 **Command Name:**\n- ${cmd}\n`+
			`🔢 **Number of arguments:**\n- ${args.length}\n`+
			`✍️ **Requested by:**\n- ${interaction.member.user.username}\n`
		);
	}
	else
	{
		// Classic command (+itselt)
		await interaction.channel.send(
			"🖲️ **Command type:**\n- classic command"+
			`📇 **Command Name:**\n- ${cmd}\n`+
			`🔢 **Number of arguments:**\n- ${args.length}\n`+
			`✍️ **Requested by:**\n- ${interaction.member.user.username}\n`
		);
	}
}

module.exports = {
	parse,
	name: "itself",
	permissions: [],
	builder: new SlashCommandBuilder()
		.setName("itself")
		.setDescription("I give informations about myselft."),
	any_guild: false,
	dm: false
}
```

The method ` parse ` is run by system when a message is sent and starts with bot's prefix (+ by default)
or when a slash command is executed.
```js
async function parse(interaction, cmd, args)
```
As you can see we have tree arguments:
- ` interaction ` → corresponding to the [event](https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files) (` MessageCreate `, or ` InteractionCommand `) 
- ` cmd ` → name of the command 
- ` args ` →  corresponds to all the elements that follow the command name in a classic command

⎯ **e.g of args**
```bash
+itself arg1 arg2
```

⎯ **Exports**

At the bottom of the file we have exports, which includes several important elements.
```js
module.exports = {
	parse,
	name: "itself",
	permissions: [],
	builder: new SlashCommandBuilder()
		.setName("itself")
		.setDescription("I give informations about myselft."),
	any_guild: false,
	dm: false
}
```

- ` parse ` → method to handle the command
- ` name ` → name of the command
- ` permissions ` → list of methods to check if` interaction.member ` has the right permissions
- ` builder ` → a [` SlashCommandBuilder `](https://discordjs.guide/creating-your-bot/slash-commands.html#before-you-continue)
- ` any_guild ` →  if false, the command can be executed only on the main guild
- ` dm ` →  if true, we can use this command in direct messages