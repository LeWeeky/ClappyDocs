---
sidebar_position: 3
---
# 📖 Menus

## ⚠️ Prérequis 

Si c'est votre premier gestionnaire de menu, vous n'avez peut-être pas encore de [` Menu `](https://discordjs.guide/message-components/select-menus.html#building-string-select-menus). Vous
pouvez en créer un grâce à cet exemple :
```js
import { ActionRowBuilder, SlashCommandBuilder, StringSelectMenuBuilder } from "discord.js";

export async function parse(interaction)
{
	const row = new ActionRowBuilder()
	.setComponents(
		new StringSelectMenuBuilder()
		// remplacez "doc" par le nom de votre module
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

export const name = "menu";
export const permissions: [];
export const builder = new SlashCommandBuilder()
		.setName("menu")
+               .setDescription("A simple test menu.");
+export const any_guild = false;
+export const dm = false;
```

Ici on va répondre au menu *test* qui provient du module *doc*. La syntaxe du customId du menu est plutôt simple :
*module_name* + *-* + *menu_name* (ex: ` doc-test `).

⎯ **Pourquoi utiliser la syntaxe clappybot ?**

Parce que désormais, si vous désactivez le module *doc* et que vous cliquez sur un menu de ce
module, le système vous dira que ce menu ne fonctionne pas car **le module a été désactivité**
(au lieu de vous dire que ce menu ne fonctionne juste pas à cause d'un bug ou fichier manquant) et c'est plus facile pour le débogage.

## 👍 Répondre au menu

La première chose à faire est de créer le fichier dans  ` ./sources/modules/<module_name>/menus `
(remplacez ` <module_name> ` par le nom du module). Dans cet exemple, nous avons appelé le menu ` test ` donc il faut créer le fichier ` ./sources/modules/<module_name>/menus/test.js ` et y coller ce code :
```js
import { MessageFlags } from "discord.js";

export async function parse(interaction)
{
	const animal = interaction.values[0]

	interaction.reply({
		content: `I love **${animal}** too!`,
		flags: [MessageFlags.Ephemeral]
	})
}

// remplacez "doc" par le nom de votre module
export const customId = "doc-test";
export const permissions = [];
export const any_guild: false;
export const dm = false;
```

La méthode ` pase ` est exécutée par le système quand une option du menu est sélectionnée.
```js
export async function parse(interaction)
```
Comme vous pouvez le voir, on a un seul argument :
- ` interaction ` → correspondant à l'[évènement](https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files) (` InteractionMenu `) 

⎯ **Exportation**

En bas du fichier, nous avons l'exportation (exports), qui inclu plusieurs éléments importants.
```js
export const customId = "doc-test";
export const permissions = [];
export const any_guild: false;
export const dm = false;
```

- ` parse ` → la méthode qui gère la sélection / la réponse
- ` customId ` → customId l'identifiant du bouton que l'on veut gérer
- ` permissions ` → liste des méthodes pour vérifier si ` interaction.member ` a les bonnes permissions
- ` any_guild ` →  si false, la commande ne pourra être exécutée que sur le serveur principal
- ` dm ` →  si true, vous pourrez utiliser la commande même en messages privés