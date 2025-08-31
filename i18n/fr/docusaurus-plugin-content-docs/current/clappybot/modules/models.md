---
sidebar_position: 6
---
# 📀 Models
Si vous avez l'habitude de l'orienté object, ce n'est ni plus ni moins qu'un système de liaison avec la base de données sous forme d'objects.

Sinon, imaginez que vous pouvez créer un utilisateur, un animal ou autre qu'on va appelé *object* et sauvegarder dans la base de donnée. Avec un système SQL classique il faudrait envoyer des requêtes compliquées pour insérer, mettre à jour, sélectionner, supprimer, etc l'élément dans la base de données. Ici on a des **Models**, une façon bien plus facile de manipuler des données depuis la base de données, grâce à des *objects* sauvegardés dans vos variables.

Créons un *object* ` User ` dans ` ./sources/modules/<module_name>/models/ ` avec comme champs ` username `, ` email ` et `created_at ` (n'oubliez pas de remplacer ` <module_name> ` par le nom de votre module).

```js
class User extends AModel
{
	static table = 'users';
	static fields = {
		username: 'string',
		email: 'string',
		created_at: 'datetime'
	};
}
```

On doit impérativement assigner une **base de donnée** pour notre  **Models** ` User `, on peut le faire grâce à la méthode ` use `, de préférence dans le fichier ` init.js `. Par la même occasion, nous devons initialiser la base de données via la méthode  ` init `.

```js
const { clappybot } = require("clappybot")
const { User } = require("./models/User")

async function init_module(connection)
{
	// Défini la base de donnée à utiliser pour ce modèle
	User.use(clappybot.database);

	// Initialise la table users
	User.init()
}

module.exports = {
	init_module
}
```

## 🆕 Créer un nouveau modèle

Par convention, vous devriez créer vos modèles dans le dossier ` models ` :
` ./sources/modules/<module_name>/models/ ` (n'oubliez pas de remplacer ` <module_name> ` par le nom de votre module).
Comme ceci :
```js
const { AModel } = require("clappybot");

class User extends AModel
{
	static table = 'users';
	static fields = {
		username: 'string',
		email: 'string',
		created_at: 'datetime'
	};
}

module.exports = {
	User
}
```

Premièrement, importez la classe abstraire ' AModels ' dont va hériter notre modèle
```js
const { AModel } = require("clappybot");
```

Créez votre modèle comme ci-dessous (remplacez ` <ModelName> `par le nom de votre modèle) :
```js
class <ModelName> extends AModel
```

Définissez le nom de la table (remplacez ` <table_name> ` par le nom de votre table) :
```js
static table = '<table_name>';
```

Définissez les champs (options/paramètres), on parlera des differents types de champs plus bas :
```js
static fields = {
	example: "text"
}
```

N'oubliez pas d'exporter votre modèle pour pouvoir l'importer dans un autre fichier
(remplacez ` <ModelName> ` par le nom de votre modèle) :
```js
module.exports = {
	<ModelName>
}
```

## 📝 Champs

⎯ ℹ️ **Type de champs**	→	**Type SQL**

` integer `		→	` INT DEFAULT 0 ` un nombre classique (` INT32 `), peut être négatif.

` size `		→	` UNSIGNED INT ` ⚠️ seulement supporté par mariadb/mysql, il s'agit d'un (` INT32 `) mais qui ne peut pas être négatif.

` bigint `		→	` UNSIGNED BIGINT ` ⚠️ seulement supporté par mariadb/mysql, c'est un gros nombre (` INT64 `) et ne peut pas être négatif.

` datetime `	→	` DATETIME DEFAULT CURRENT_TIMESTAMP ` permet d'enregistrer une date (la date d'insertion sera mise par défaut si aucune n'est donnée, ex: 2025-12-06 20:09:35).

` string `		→	` VARCHAR(255) ` petit champ de texte.

` text `		→	` TEXT ` grand champ de texte (la taille maximum dépend de si vous utilisez PostgeSQL, MySQL/Mariadb ou SQLite).

` boolean `		→	` BOOLEAN ` un simple true / false.

⎯ 🥷 **Et un champ secret**

Vous n'avez pas besoin de le définir (et ne le faite pas !) mais il existe un "champ" secret et par défaut à l'intérieur de chaque modèle : ` id `.

Ceci vous permet d'avoir un **identifiant unique** pour chaque instance de votre modèle. Par exemple, chaque fois que vous en créerait un nouvel utilisateur, un nouveau **identifiant unique** lui sera attribué, par conséquent vous pourez facilement rechercher un utilisateur via son ` id `.
```js
const user = await User.create({username: "Goya"});
console.log(user.id)
// Affichera "1" s'il s'agit du premier utilisateur

const user_by_id = await User.firstBy({id: user.id})
console.log(user.username == user_by_id.username)
// True
```


## 🛠️ Methods
Ces méthodes sont héritées de la classe ` AModel `.

⎯ 🧱 **Constructor**

*Déclaration*:
```js
/**
 * Crée une instance du modèle
 * avec les champs fournis
 * @param {{}} fields
*/
constructor(fields)
```
*Exemple*:
```js
// Crée une nouvelle instance, vous devrez utiliser user.save 
// pour la sauvegarder dans la base de donnée
const user = new User({username: "Goya", email: "goya@clappycrew.com"});
```

⎯ 💾 **Définir la base de données**

*Déclaration*:
```js
/**
 * Base de donnée à utiliser
 * @param {ADriver} db
 */
static use(db)
```
*Exemple*:
```js
// Défini la base de donnée à utiliser pour ce modèle
User.use(clappybot.database);
```

⎯ ⚙️ **To initialise database**

*Déclaration*:
```js
/**
 * Initialise la table dans la base de données
*/
static async init()
```
*Exemple*:
```js
// Initialise la table (vous devriez le faire dans le init.js)
User.init()
```

⎯ ✅ **Sauvegarder l'instance dans la base de données**

*Déclaration*:
```js
/**
 * Sauvegarde l'instance dans la base de données
*/
async save()
```
*Example*:
```js
// Crée une nouvelle instance (non sauvegardée)
const user = new User({username: "Goya", email: "goya@clappycrew.com"});
// La sauvegarde dans la base de données
user.save();
```

⎯ ♻️ **Crée et sauvegarde au même moment**

*Declaration*:
```js
/**
 * Crée une nouvelle instance du modèle
 * et la sauvegarde directement
 * @param {{}} data 
 * @returns {Promise<AModel>}
*/
static async create(data = {})
```
*Example*:
```js
// La méthode "create" crée l'instance et la sauvegarde directement
const user = User.create({username: "LeWeeky", email: "leweeky@clappycrew.com"});
```

⎯ 🗑️ **Supprimer une instance**

*Déclaration*:
```js
/**
 * Supprime l'instance actuelle de la base de données
*/
async delete()
```
*Exemple*:
```js
// La méthode "create" crée l'instance et la sauvegarde directement
const user = User.create({username: "LeWeeky", email: "leweeky@clappycrew.com"});
// Supprime l'utilisateur de la base de données via son instance
await user.delete();
```

⎯ 🧹 **Supprimer par champ**

*Declaration*:
```js
/**
 * Supprime tous les éléments qui correspondent
 * aux champs fournis
 * @param {{}} fields
*/
static async deleteBy(fields)
```
*Exemple*:
```js
// Tous les utilisateurs dont le username correspond à
// "LeWeeky" et dont l'email correspond à "test@mail.com"
// seront supprimés
await User.deleteBy({username: "LeWeeky", email: "test@mail.com"});
```

⎯ 🗃️ **Récupérer toutes les instances**

*Déclaration*:
```js
/**
 * Retourne tous les éléments de cette table
 * en tant qu'instances
 */
static async all()
```
*Example*:
```js
// Récupère tous les utilisateurs
const users = User.all()
// Affiche tous les utilisateurs dans la console
// un par un
for (let i = 0; i < users.length; i++)
{
	const user = users[i];
	console.log(user.username, user)
}
```

⎯ 🔎 **Récupérer des instances par champ**

*Déclaration*:
```js
/**
 * Retourne tous les éléments correspondant
 * aux champs en tant qu'instances
 * @param {{}} fields
 * @param {number} limit
 * @returns {Promise<new() AModel[] | never[]>}
*/
static async findBy(fields, limit = 0)
```
*Example*:
```js
// Récupère tous les utilisateurs dont le username
// est "LeWeeky"
const some_users = User.findBy({username: "LeWeeky"});
// Récupère les 5 permiers utilisateurs dont le username
// est "LeWeeky"
const some_users = User.findBy({username: "LeWeeky"}, 5);
```

⎯ 🔎 **Récupère la première instance par champ**

*Déclaration*:
```js
/**
 * Retourne le premier élément correspondant
 * aux champs en tant qu'instance
 * @param {{}} fields
 * @returns {Promise<AModel | null>}
*/
static async firstBy(fields)
```
*Exemple*:
```js
// recupère le premier utilisateur dont le username
// est "LeWeeky"
const leweeky = User.firstBy({username: "LeWeeky"});
```

⎯ 🪄 **First or Create**

*Déclaration*:
```js
/**
 * Retourne le premier élément correspondant
 * aux champs en tant qu'instance ou crée une
 * nouvelle instance avec les champs fournis
 * si aucun élément n'est trouvé
 * @param {{}} fields
 * @returns {Promise<AModel>}
 */
static async firstByOrCreate(fields)
```
*Example*:
```js
// Récupère le premier utilisateur dont le username est
// "LeWeeky" ou crée un nouvel utilisateur si aucun n'a
// été trouvé
const leweeky = User.firstBy({username: "LeWeeky"});
```

⎯ 🥇 **Premier**

*Déclaration*:
```js
/**
 * Retourne le premier élément
 * @returns {Promise<AModel | null>}
 */
static async first()
```
*Example*:
```js
// Récupère le premier utilisateur
const user = User.first();
```

## 🆙 Mise à jour des champs

Peut-être que vous voulez changer le ` username ` d'un ` user ` spécifique ? Vous pouvez le faire comme ceci :
```js
const user = await User.firstBy({id: 1});

user.username = "New username";
// N'oubliez pas de le mettre à jour au niveau de la base de données 
// via la méthode save() !
await user.save();
```