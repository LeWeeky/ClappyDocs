---
sidebar_position: 2
---
# 🆑 Buttons

## ⚠️ Requirements 

If it's your first button handler you may not have [` Button `](https://discordjs.guide/message-components/buttons.html#sending-buttons). You can create one with this simple command template:
```js
import { ButtonBuilder, ActionRowBuilder, SlashCommandBuilder, ButtonStyle } from "discord.js";

export async function parse(interaction)
{
	const row = new ActionRowBuilder()
	.setComponents(
		new ButtonBuilder()
		// Replace "doc" by the name of your module
		.setCustomId("doc-test")
		.setEmoji("🚨")
		.setLabel("Test")
		.setStyle(ButtonStyle.Secondary)
	)
	interaction.reply({
		content: "Test button below.",
		components: [row]
	})
}

export const name = "button";
export const permissions: [];
export const builder = new SlashCommandBuilder();
		.setName("button")
		.setDescription("A simple test button."),
export const any_guild: false;
export const dm = false;
```

Here we will handle button *test* from module *doc*. The syntax for button customId is pretty simple :
*module_name* + *-* + *button_name* (e.g: ` doc-test `).

⎯ **Why you must use clappybot's syntax ?**

Because now, if you disable module *doc* and click on any button from this module, system will tell you
that the button doesn't work because the **module is disabled** (instead of telling you that the button doesn't work
because there is a bug or missing file) and it's easier for debugging.

## 👍 Handle a button

The first thing to do it's create a file inside ` ./sources/modules/<module_name>/buttons `
(replace ` <module_name> ` with the name of your module). In this example, we'll call the
button ` test ` so let's create ` ./sources/modules/<module_name>/buttons/test.js `
and paste this code :
```js
import { MessageFlags } from "discord.js";

export async function parse(interaction)
{
	interaction.reply({content: "Yes, this simple button works!", flags: [MessageFlags.Ephemeral]})
}

// replace "doc" by the name of your module
export const customId = "doc-test";
export const permissions: [];
export const any_guild: false;
export const dm = false;
```

The method ` parse ` is run by system when a button is clicked.
```js
export async function parse(interaction)
```
As you can see we only have one argument:
- ` interaction ` → corresponding to the [event](https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files) (` InteractionButton `) 

⎯ **Exports**

At the bottom of the file we have exports, which includes several important elements.
```js
export const customId = "doc-test";
export const permissions: [];
export const any_guild: false;
export const dm = false;
```

- ` parse ` → method to handle the click
- ` customId ` → customId of the button we want to handle
- ` permissions ` → list of methods to check if ` interaction.member ` has the right permissions
- ` any_guild ` →  if false, the command can be executed only on the main guild
- ` dm ` →  if true, we can use this command in direct messages