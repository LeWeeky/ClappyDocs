---
sidebar_position: 6
---
# 💬 Message

## 🎊 Multi events

Ici, on retrouve 3 types d'évènements:
- [` MessageCreate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageCreate) → quand un message est envoyé
- [` MessageDelete `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageDelete) → quand un message est supprimé
- [` MessageUpdate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageUpdate) → quand un message est mis à jour (modifié)

Étant donné qu'on retrouve 3 types d'évènements, on ne peut pas simpltement créer des fichiers dans ` ./sources/modules/<module_name>/messages `,
on doit spécifier quel est le type d'évènement correspondant. Pour ce faire on ajoute une  *extension* à la fin du fichier : 
- ` create ` → pour gérer [` MessageCreate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageCreate)
- ` delete ` → pour gérer [` MessageDelete `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageDelete)
- ` update ` → pour gérer [` MessageUpdate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageUpdate)

⎯ **Exemple pour chaque évènement**
*remplace ` <module_name> ` par le nom de ton module*
- ` create ` → ` ./sources/modules/<module_name>/messages/create.js `
- ` delete ` → ` ./sources/modules/<module_name>/messages/delete.js `
- ` update ` → ` ./sources/modules/<module_name>/messages/update.js `

## 🤔 "Message"

[` Message `](https://discord.js.org/docs/packages/discord.js/14.19.3/Message:Class) est un object avec un grand nombre de méthodes et de données, pensez à lire la 
[documentation discord.js](https://discord.js.org/docs/) pour comprendre comment bien utiliser [` Message `](https://discord.js.org/docs/packages/discord.js/14.19.3/Message:Class).

- https://discord.js.org/docs/packages/discord.js/main/Message:Class

## ➕ MessageCreate

Possède un argument ` message ` qui est une instance de [` Message `](https://discord.js.org/docs/packages/discord.js/14.19.3/Message:Class).
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
	allow_bots: false
}
```

## ➖ MessageDelete

Possède un argument ` message ` qui est une instance de [` Message `](https://discord.js.org/docs/packages/discord.js/14.19.3/Message:Class).
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
	allow_bots: false
}
```

## 🆙 MessageUpdate

Possède deux arguments  ` old_message ` et ` new_message ` qui sont des instances de [` Message `](https://discord.js.org/docs/packages/discord.js/14.19.3/Message:Class).

⚠️ **Attention:** ` old_message ` représente l'était du message avant la mise à jour et ` new_message ` après la mise à jour.
```js
async function parse(old_message, new_message)
{
	console.log("message from:", old_message.author.username, "has been updated")
	console.log("old_content:", old_message.content)
	console.log("new_message:", new_message.content)
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

Soyez prudent [` MessageCreate `](#-messagecreate) et [` MessageDelete `](#-messagedelete) ont
tous deux uniquement 1 argument comme ci-dessous :
```js
async function parse(message)
```
Alors que [` MessageUpdate `](#-messageupdate) possède 2 arguments
```js
async function parse(old_message, new_message)
```

⎯ **Exportation**

En bas du fichier, nous avons l'exportation (exports), qui inclu plusieurs éléments importants.
```js
module.exports = {
	parse,
	conditions: [],
	any_guild: false,
	dm: false,
	allow_bots: false
}
```

- ` parse ` → la méthode qui gère la sélection / la réponse
- ` conditions ` → liste des méthodes pour vérifier si ` message.member ` répond aux conditions
- ` any_guild ` →  si false, la commande ne pourra être exécutée que sur le serveur principal
- ` dm ` →  si true, vous pourrez utiliser la commande même en messages privés
- ` allow_bots ` →  si fasle, l'évènement sera ignoré quand il sera provoqué par un bot