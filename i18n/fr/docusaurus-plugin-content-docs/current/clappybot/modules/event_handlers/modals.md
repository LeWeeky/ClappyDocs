---
sidebar_position: 4
---
# 📝 Formulaires


## ⚠️ Prérequis

Si c'est votre premier gestionnaire de formulaire, vous n'avez peut-être pas encore de  [` Modal `](https://discordjs.guide/interactions/modals.html#building-and-responding-with-modals). Vous
pouvez en créer un grâce à cet exemple :
```js
import {  ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, SlashCommandBuilder } from "discord.js";

export async function parse(interaction)
{
	const modal = new ModalBuilder()
		// remplacez "doc" par le nom de votre module
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

export const name = "modal";
export const permissions = [];
export const builder = new SlashCommandBuilder()
       .setName("modal")
       .setDescription("A simple test modal.");
export const any_guild = false;
export const dm = false;
```

Ici on va répondre au bouton *who-are-you*  qui provient du module *doc*. La syntaxe du customId du formulaire est plutôt simple :
*module_name* + *-* + *button_name* (e.g: ` doc-who-are-you `).

⎯ **Pourquoi utiliser la syntaxe clappybot ?**

Parce que désormais, si vous désactivez le module *doc* et que vous cliquez sur un formulaire de ce module, le système vous dira que ce formulaire ne fonctionne pas car **le module a été désactivité**
(au lieu de vous dire que ce formulaire ne fonctionne juste pas à cause d'un bug ou fichier manquant) et c'est plus facile pour le débogage.

## 👍 Répondre au formulaire

La première chose à faire est de créer le fichier dans ` ./sources/modules/<module_name>/modals `
(remplacez ` <module_name> ` par le nom du module). Dans cet exemple, nous avons appelé le formulaire ` who-are-you ` donc il faut créer le fichier ` ./sources/modules/<module_name>/modals/who-are-you.js ` et y coller ce code :
```js
const { MessageFlags } = require("discord.js");

export async function parse(interaction)
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
	// remplace "doc" par le nom de ton module
	customId: "doc-who-are-you",
	permissions: [],
	any_guild: false,
	dm: false
}
```

La méthode ` parse ` est exécutée par le système quand le formulaire est soumis.
```js
export async function parse(interaction)
```

Comme vous pouvez le voir, on a un seul argument :
- ` interaction ` → correspondant à l'[évènement](https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files) (` ModalSubmitInteraction `) 

⎯ **Exportation**

En bas du fichier, nous avons l'exportation (exports), qui inclu plusieurs éléments importants.
```js
// remplacez "doc" par le nom de votre module
export const customId = "doc-who-are-you";
export const permissions = [];
export const any_guild = false;
export const dm false;
```

- ` parse ` → la méthode qui gère le clique / la réponse
- ` customId ` → customId l'identifiant du bouton que l'on veut gérer
- ` permissions ` → liste des méthodes pour vérifier si ` interaction.member ` a les bonnes permissions
- ` any_guild ` →  si false, la commande ne pourra être exécutée que sur le serveur principal
- ` dm ` →  si true, vous pourrez utiliser la commande même en messages privés