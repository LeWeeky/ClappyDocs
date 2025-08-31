---
sidebar_position: 5
---
# ⚙️ Initialisation

Pour nos modules, nous devrons parfois nous assurer que certaines données, paramètres, classes et d'autres éléments ont été initialisés.
` init.js ` est excécuté au lancement du bot pour s'assurer que tout a été initialisé avant de gérer le moindre évènement.

Ouvrons ` ./sources/modules/template/init.js `:
```js
const { clappybot } = require("../../main")
const { Template } = require("./models/Template")
const { User } = require("./models/User")

async function init_module(connection)
{
	Template.use(clappybot.database)
	Template.init()

	User.use(clappybot.database)
	User.init()
}

module.exports = {
	init_module
}
```

Ici on importe ` clappybot `, il s'agit de l'object principal du système, on peut l'utiliser pour accéder à ` clappybot.database `, on importe ` Template `, ` User ` qui sont deux  **Models**. Comme vous le découvrirez dans le prochain post, un **Model** a besoin d'une **base de données** (database) et doit être initialisée, ce pourquoi on doit l'initialisé dans dans ` init.js `.

*N'oubliez pas d'initialiser tout ce dont vous avez besoin ici.*

## 🚨 Obligatoire
` init.js ` doit avoir une méthode ` init_module `, celle-ci doit-être exportée comme ceci:
```js
module.exports = {
	init_module
}
```