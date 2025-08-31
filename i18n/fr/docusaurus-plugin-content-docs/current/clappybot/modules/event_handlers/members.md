---
sidebar_position: 5
---
# 🧑‍🧑‍🧒‍🧒 Membres 

## ℹ️ Astuces magiques

Si vous voulez créer de fausses action de nouveau membre ou de membre qui quitte le serveur
pour tester vos gestionnaires, vous pouvez utiliser les commandes pré-installées : ` join ` and ` leave `.

## 🎊 Multi évènements

Ici, on retrouve 3 types d'évènements:
- [` MemberAdd `](https://discord.com/developers/docs/events/gateway-events#guild-member-add) → (on va l'appeler ` MemberJoin `, c'est plus logique / simple à comprendre) quand un membre rejoint le serveur
- [` MemberRemove `](https://discord.com/developers/docs/events/gateway-events#guild-member-remove) → (on va l'appeler ` MemberLeave `, c'est plus logique / simple à comprendre) quand un membre quitte le serveur
- [` MemberUpdate `](https://discord.com/developers/docs/events/gateway-events#guild-member-update) → quand un membre (donc un utilisateur au sein du serveur) est mis à jour (ex: nouveau rôle)

Étant donné qu'on retrouve 3 types d'évènements, on ne peut pas simpltement créer des fichiers dans ` ./sources/modules/<module_name>/members `, on doit spécifier quel est le type d'évènement correspondant. Pour ce faire on ajoute une  *extension* à la fin du fichier : 
- ` join ` → pour gérer [` MemberAdd `](https://discord.com/developers/docs/events/gateway-events#guild-member-add)
- ` leave ` → pour gérer [` MemberRemove `](https://discord.com/developers/docs/events/gateway-events#guild-member-remove)
- ` update ` → pour gérer [` MemberUpdate `](https://discord.com/developers/docs/events/gateway-events#guild-member-update)

⎯ **Exemple pour chaque évènement**
*remplace ` <module_name> ` par le nom de ton module*
- ` join ` → ` ./sources/modules/<module_name>/members/member_join.js `
- ` leave ` → ` ./sources/modules/<module_name>/members/member_leave.js `
- ` update ` → ` ./sources/modules/<module_name>/members/member_update.js `

## 🤔 "Member"

[` Member `](https://discord.js.org/docs/packages/discord.js/main/GuildMember:Class)  est un object avec un grand nombre de méthodes et de données, pensez à lire la
[documentation discord.js](https://discord.js.org/docs/)  pour comprendre comment
bien utiliser [` Member `](https://discord.js.org/docs/packages/discord.js/main/GuildMember:Class).

- https://discord.js.org/docs/packages/discord.js/main/GuildMember:Class

## ➕ MemberJoin

Possède un argument ` member ` qui est une instance de [` Member `](https://discord.js.org/docs/packages/discord.js/main/GuildMember:Class).
```js
async function parse(member)
{
	console.log("new member:", member.user.username)
}

module.exports = {
	parse,
	conditions: [],
	any_guild: false,
	dm: false,
	allow_bots: false
}
```

## ➖ MemberLeave

Has one argument ` member ` who is an instance of [` Member `](https://discord.js.org/docs/packages/discord.js/main/GuildMember:Class).
```js
async function parse(member)
{
	console.log("a member left:", member.user.username)
}

module.exports = {
	parse,
	conditions: [],
	any_guild: false,
	dm: false,
	allow_bots: false
}
```

## 🆙 MemberUpdate

Has two arguments ` old_member ` and ` new_member ` who are instances of [` Member `](https://discord.js.org/docs/packages/discord.js/main/GuildMember:Class).

⚠️ **Warning:** ` old_member ` is the member state before the update and ` new_member ` after the update.
```js
async function parse(old_member, new_member)
{
	console.log("member: ", old_member.user.username, " has been updated")
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

Soyez prudent [` MemberJoin `](#-memberjoin) et [` MemberLeave `](#-memberleave) ont
tous deux uniquement 1 argument comme ci-dessous :
```js
async function parse(member)
```
Alors que [` MemberUpdate `](#-memberupdate) possède 2 arguments
```js
async function parse(old_member, new_member)
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
- ` customId ` → customId l'identifiant du bouton que l'on veut gérer
- ` any_guild ` →  si false, la commande ne pourra être exécutée que sur le serveur principal
- ` dm ` →  si true, vous pourrez utiliser la commande même en messages privés
- ` allow_bots ` →  si fasle, l'évènement sera ignoré quand il sera provoqué par un bot