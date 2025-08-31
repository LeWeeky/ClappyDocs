---
sidebar_position: 7
---
# 🪑 Salons

## 🎊 Multi évènements

Ici, on retrouve 3 types d'évènements:
- [` ChannelCreate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#channelCreate) → quand un salon est créé
- [` ChannelDelete `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#channelDelete) → quand un salon est supprimé
- [` ChannelUpdate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#channelUpdate) → quand un salon est mis à jour

Étant donné qu'on retrouve 3 types d'évènements, on ne peut pas simpltement créer des fichiers dans ` ./sources/modules/<module_name>/channels `,
on doit spécifier quel est le type d'évènement correspondant. Pour ce faire on ajoute une  *extension* à la fin du fichier : 
- ` create ` → pour gérer [` ChannelCreate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#channelCreate)
- ` delete ` → pour gérer [` ChannelDelete `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#channelDelete)
- ` update ` → pour gérer [` ChannelUpdate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#channelUpdate)

⎯ **Exemple pour chaque évènement**
*remplace ` <module_name> ` par le nom de ton module*
- ` create ` → ` ./sources/modules/<module_name>/channels/create.js `
- ` delete ` → ` ./sources/modules/<module_name>/channels/delete.js `
- ` update ` → ` ./sources/modules/<module_name>/channels/update.js `

## 🤔 "Channel"

[` Channel `](https://discord.js.org/docs/packages/discord.js/14.19.3/BaseChannel:Class) est un object avec un grand nombre de méthodes et de données, pensez à lire la
[documentation discord.js ](https://discord.js.org/docs/) pour comprendre comment bien utiliser [` Channel `](https://discord.js.org/docs/packages/discord.js/14.19.3/BaseChannel:Class).

- https://discord.js.org/docs/packages/discord.js/main/BaseChannel:Class

## ➕ ChannelCreate

Possède un argument ` channel ` qui est une instance de [` Channel `](https://discord.js.org/docs/packages/discord.js/14.19.3/BaseChannel:Class).
```js
async function parse(message)
{
	console.log("new message from:", message.author.username)
	console.log("content:", message.content)
}

module.exports = {
	parse,
	conditions: [],
	any_guild: false,
	dm: false,
}
```

## ➖ ChannelDelete

Possède un argument ` channel ` qui est une instance de [` Channel `](https://discord.js.org/docs/packages/discord.js/14.19.3/BaseChannel:Class).
```js
async function parse(message)
{
	console.log("message from:", message.author.username, "has been deleted")
	console.log("content:", message.content)
}

module.exports = {
	parse,
	conditions: [],
	any_guild: false,
	dm: false,
}
```

## 🆙 ChannelUpdate

Possède deux arguments ` old_channel ` et ` new_channel ` qui sont des instances de [` Channel `](https://discord.js.org/docs/packages/discord.js/14.19.3/BaseChannel:Class).

⚠️ **Attention:** ` old_channel ` représente l'état du salon avant la mise à jour et ` new_channel ` après la mise à jour.
```js
async function parse(old_channel, new_channel)
{
	console.log("channel:", old_channel.name, "has been updated")
	console.log("old_channel:", old_channel)
	console.log("new_channel:", new_channel)
}

module.exports = {
	parse,
	conditions: [],
	any_guild: false,
	dm: false,
	allow_bots: false
}
```

## 🖥️ Méthodes et paramètres

Soyez prudent [` ChannelCreate `](#-channelcreate) et [` ChannelDelete `](#-channeldelete) ont
tous deux uniquement 1 argument comme ci-dessous : 
```js
async function parse(channel)
```
Alors que [` ChannelUpdate `](#-channelupdate) possède 2 arguments
```js
async function parse(old_channel, new_channel)
```

⎯ **Exportation**

En bas du fichier, nous avons l'exportation (exports), qui inclu plusieurs éléments importants.
```js
module.exports = {
	parse,
	conditions: [],
	any_guild: false,
	dm: false,
}
```

- ` parse ` → la méthode qui gère le clique / la réponse
- ` customId ` → customId l'identifiant du bouton que l'on veut gérer
- ` any_guild ` →  si false, la commande ne pourra être exécutée que sur le serveur principal
- ` dm ` →  si true, vous pourrez utiliser la commande même en messages privés