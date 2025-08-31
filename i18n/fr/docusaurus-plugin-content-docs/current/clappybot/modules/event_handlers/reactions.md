---
sidebar_position: 8
---
# 🎭 Réactions

## 🎊 Multi évènements

Ici, on retrouve 2 types d'évènements:
- [` MessageReactionAdd `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageReactionAdd) → quand une réaction est ajoutée à un message
- [` MessageReactionDelete `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageReactionDelete) → quand une réaction est retirée d'un message

Étant donné qu'on retrouve 3 types d'évènements, on ne peut pas simpltement créer des fichiers dans ` ./sources/modules/<module_name>/channels `,
on doit spécifier quel est le type d'évènement correspondant. Pour ce faire on ajoute une  *extension* à la fin du fichier : 
- ` add ` → pour gérer [` MessageReactionAdd `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageReactionAdd)
- ` remove ` → pour gérer [` MessageReactionDelete `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageReactionDelete)

⎯ **Exemple pour chaque évènement**
*remplace ` <module_name> ` par le nom de ton module*
- ` add ` → ` ./sources/modules/<module_name>/reactions/add.js `
- ` remove ` → ` ./sources/modules/<module_name>/channels/remove.js `

## 🤔 "MessageReaction"

[` MessageReaction `](https://discord.js.org/docs/packages/discord.js/14.19.3/MessageReaction:Class) est un object avec un grand nombre de méthodes et de données, pensez à lire la 
[discord.js documentation](https://discord.js.org/docs/) pour comprendre comment bien utiliser [` MessageReaction `](https://discord.js.org/docs/packages/discord.js/14.19.3/MessageReaction:Class).

- https://discord.js.org/docs/packages/discord.js/14.19.3/MessageReaction:Class

## ➕ MessageReactionAdd

Possède deux arguments ` reaction ` qui est une instance de [` MessageReaction `](https://discord.js.org/docs/packages/discord.js/14.19.3/MessageReaction:Class)
et ` user `  qui est une instance de [` User `](https://discord.js.org/docs/packages/discord.js/14.19.3/User:Class).
```js
async function parse(reaction, user)
{
	console.log(message.author.username, "reacted with", reaction)
}

module.exports = {
	parse,
	conditions: [],
	any_guild: false,
	dm: false,
	allow_bots: false
}
```

## ➖ MessageReactionRemove

Possède 2 arguments, ` reaction ` qui est une instance de [` MessageReaction `](https://discord.js.org/docs/packages/discord.js/14.19.3/MessageReaction:Class)
et ` user `  qui est une instance de [` User `](https://discord.js.org/docs/packages/discord.js/14.19.3/User:Class).
```js
async function parse(reaction, user)
{
	console.log("reaction of", message.author.username, "has been removed", reaction)
}

module.exports = {
	parse,
	conditions: [],
	any_guild: false,
	dm: false,
	allow_bots: false
}
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

- ` parse ` → la méthode qui gère le clique / la réponse
- ` conditions ` → liste des méthodes pour vérifier si ` reaction ` et ` user ` répond aux conditions
- ` customId ` → customId l'identifiant du bouton que l'on veut gérer
- ` any_guild ` →  si false, la commande ne pourra être exécutée que sur le serveur principal
- ` dm ` →  si true, vous pourrez utiliser la commande même en messages privés