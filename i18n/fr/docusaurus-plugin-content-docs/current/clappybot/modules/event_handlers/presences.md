---
sidebar_position: 9
---
# 🙌 Statut
*Mise à jours du statut & des activitiés d'un utilisateur ou d'un bot*

## 🤔 "Presence"

[` Presence `](https://discord.js.org/docs/packages/discord.js/14.19.3/Presence:Class) est un object avec un grand nombre de méthodes et de données, pensez à lire la [documentation discord.js](https://discord.js.org/docs/) pour comprendre comment bien utiliser [` Presence `](https://discord.js.org/docs/packages/discord.js/14.19.3/Presence:Class).
- https://discord.js.org/docs/packages/discord.js/14.19.3/Presence:Class

On va gérer l'évènement [` PresenceUpdate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#presenceUpdate) 
donc pensez également à jeter un œil ici :
- https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#presenceUpdate

## 🆙 PresenceUpdate

Possède 2 arguments ` old_presence ` et ` new_presence ` qui sont des instances de 
[` Presence `](https://discord.js.org/docs/packages/discord.js/14.19.3/Presence:Class).

⚠️ **Attention:** ` old_presence ` représente l'état statut et de l'activitée avant la mise à jour et ` new_presence ` après la mise à jour.
```js
async function parse(old_presence, new_presence)
{
	console.log(`${new_presence.member.user.username}'s status changed`)
}

module.exports = {
	parse
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

- ` parse ` → la méthode qui gère la sélection / la réponse
- ` any_guild ` →  si false, la commande ne pourra être exécutée que sur le serveur principal
- ` dm ` →  si true, vous pourrez utiliser la commande même en messages privés
- ` allow_bots ` →  si fasle, l'évènement sera ignoré quand il sera provoqué par un bot