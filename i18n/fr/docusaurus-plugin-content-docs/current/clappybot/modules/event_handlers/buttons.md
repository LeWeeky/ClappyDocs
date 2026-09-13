---
sidebar_position: 2
---
# 🆑 Boutons

## ⚠️ Prérequis

Si c'est votre premier gestionnaire de bouton, vous n'avez peut-être pas encore de 
[` Button `](https://discordjs.guide/message-components/buttons.html#sending-buttons). Vous
pouvez en créer un grâce à cet exemple :
```js
import { ButtonBuilder, ActionRowBuilder, SlashCommandBuilder, ButtonStyle } from "discord.js";

export async function parse(interaction)
{
	const row = new ActionRowBuilder()
	.setComponents(
		new ButtonBuilder()
		// remplacez "doc" par le nom de votre module
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
export const builder = new SlashCommandBuilder()
		.setName("button")
		.setDescription("A simple test button."),
export const any_guild: false;
export const dm = false;
```

Ici on va répondre au bouton *test*  qui provient du module *doc*. La syntaxe du customId du bouton est plutôt simple :
*module_name* + *-* + *button_name* (ex: ` doc-test `).

⎯ **Pourquoi utiliser la syntaxe clappybot ?**

Parce que désormais, si vous désactivez le module *doc* et que vous cliquez sur un bouton de ce module, le système vous dira que ce bouton ne fonctionne pas car **le module a été désactivité**
(au lieu de vous dire que ce bouton ne fonctionne juste pas à cause d'un bug ou fichier manquant) et c'est plus facile pour le débogage.

## 👍 Répondre au bouton

La première chose à faire est de créer le fichier dans ` ./sources/modules/<module_name>/buttons `
(remplacez ` <module_name> ` par le nom du module). Dans cet exemple, nous avons appelé le bouton
` test ` donc il faut créer le fichier ` ./sources/modules/<module_name>/buttons/test.js ` et y coller ce code :
```js
import { MessageFlags } from "discord.js";

export async function parse(interaction)
{
	interaction.reply({content: "Yes, this simple button works!", flags: [MessageFlags.Ephemeral]})
}

// remplacez "doc" par le nom de votre module
export const customId = "doc-test";
export const permissions: [];
export const any_guild: false;
export const dm = false;
```

La méthode ` parse ` est exécutée par le système quand le bouton est clique.
```js
export async function parse(interaction)
```

Comme vous pouvez le voir, on a un seul argument :
- ` interaction ` → correspondant à l'[évènement](https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files) (` InteractionButton `) 

⎯ **Exportation**

En bas du fichier, nous avons l'exportation (exports), qui inclu plusieurs éléments importants.
```js
export const customId = "doc-test";
export const permissions: [];
export const any_guild: false;
export const dm = false;
```

- ` parse ` → la méthode qui gère le clique / la réponse
- ` customId ` → customId l'identifiant du bouton que l'on veut gérer
- ` permissions ` → liste des méthodes pour vérifier si ` interaction.member ` a les bonnes permissions
- ` any_guild ` →  si false, la commande ne pourra être exécutée que sur le serveur principal
- ` dm ` →  si true, vous pourrez utiliser la commande même en messages privés