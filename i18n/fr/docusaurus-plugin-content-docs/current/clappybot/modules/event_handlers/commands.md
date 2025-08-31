---
sidebar_position: 1
---
# 🖲️ Commandes

Une commande commence par un préfixe (par défaut : +) ou par un / (pour les slash commands).

Nous allons créer une simple commande qui donne des informations à propos d'elle même.
Pour commencer, il faudra créer la commande dans ` ./sources/modules/<module_name>/commands `
(remplacez ` <module_name> ` par le nom de votre module). Dans cet exemple, on va appeler la commande ` itself `
donc créons le fichier ` ./sources/modules/<module_name>/commands/itself.js ` et ajoutons ce code :
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

La méthode ` parse ` est exécutée par le système quand un message est envoyé et qu'il commence par
le préfixe du bot (par défaut +) ou quand une slash command est exécutée.
```js
async function parse(interaction, cmd, args)
```
Comme vous pouvez le voir, on a 3 arguments :
- ` interaction ` → correpondant à l'[évènement](https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files) (` MessageCreate `, or ` InteractionCommand `) 
- ` cmd ` → nom de la commande
- ` args ` → correspond à tous les éléments qui suivent le nom de la commande dans les commandes
classiques (voir exemple ci-dessous).

⎯ **exemple d'arguments**
```bash
+itself arg1 arg2
```

⎯ **Exportation**

En bas du fichier, nous avons l'exportation (exports), qui inclu plusieurs éléments importants.
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

- ` parse ` → méthode qui gère la commande
- ` name ` → nom de la commande
- ` permissions ` → liste des méthodes pour vérifier si ` interaction.member ` a les bonnes permissions
- ` builder ` → un [` SlashCommandBuilder `](https://discordjs.guide/creating-your-bot/slash-commands.html#before-you-continue)
- ` any_guild ` →  si false, la commande ne pourra être exécutée que sur le serveur principal
- ` dm ` →  si true, vous pourrez utiliser la commande même en messages privés
