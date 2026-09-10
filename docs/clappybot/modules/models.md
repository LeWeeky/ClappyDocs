---
sidebar_position: 6
---
# 📀 Models
If you're familiar with object-oriented, this is nothing more or less than a system of linking
to the database in the form of objects.

Otherwise, imagine you can create a user, an animal or something else that we will call *object*
and save it into the database. In classic SQL system you have to send hard requests to insert, select,
update, drop, etc in your database. Here we have **Models**, an easy way to manipulate data from database,
thank's to *objects* saved in your variables.

Let's create a ` User ` *object* in ` ./sources/modules/<module_name>/models/ ` with ` username `, ` email `
and `created_at ` as fields (dont forget to replace ` <module_name> ` by your module's name).
```js
import { AModel } from "clappybot";

export default class User extends AModel
{
	static table = 'users';
	static fields = {
		username: 'string',
		email: 'string',
		created_at: 'datetime'
	};
}
```

## 🆕 Create new Model

By convention, you should create your models inside the ` models ` folder of the module :
` ./sources/modules/<module_name>/models/ ` (dont forget to replace ` <module_name> ` by your module's name).
Like this :
```js
import { AModel } from "clappybot";

export default class User extends AModel
{
	static table = 'users';
	static fields = {
		username: 'string',
		email: 'string',
		created_at: 'datetime'
	};
}

```

At first, import the abstract class ' AModels ' which our model will inherit
```js
import { AModel } from "clappybot";
```

Create your model as follows (replace ` <ModelName> ` by the name of your model) and don't forget to use ` export default ` so you can import it from other files:
```js
export default class <ModelName> extends AModel
```

Set a table name (replace ` <table_name> ` with the name you want for your table):
```js
static table = '<table_name>';
```

Define fields (you will see below the possible kinds of fields):
```js
static fields = {
	example: "text"
}
```

## 📝 Fields

⎯ ℹ️ **Field type**	→	**SQL Type**

` integer `		→	` INT DEFAULT 0 ` a classic number (` INT32 `), that can be a negative.

` size `		→	` UNSIGNED INT ` ⚠️ only supported by mariadb/mysql, it's a number  (` INT32 `)
but that can't be negative.

` bigint `		→	` UNSIGNED BIGINT ` ⚠️ only supported by mariadb/mysql, it's a very big int (` INT64 `)
and that can't be negative.

` datetime `	→	` DATETIME DEFAULT CURRENT_TIMESTAMP ` you can store date, it will be set at the creation
date with hours (e.g: 2025-12-06 20:09:35) if you don't speficic one when you create a new instance.

` string `		→	` VARCHAR(255) ` this is a tiny text field of up to 256 characters.

` text `		→	` TEXT ` a large text (the maximum size depends on whether you are using PostgeSQL,
MySQL/Mariadb or SQLite).

` boolean `		→	` BOOLEAN ` simple true / false element.

` timestamp ` → ` VARCHAR(20) ` used as timestamp (useful for database migrations)

⎯ 🥷 **And a secret field**

You don't have to set it (and don't do it!) but there is a secret and default field inside every **Model**: ` id `.
This allows you to have a **unique identifier** for each instance of a **Model**. For example, each time you will create
a user, it will come with a **unique identifier** ` id `, so you can find easily the user from its ` id `.
```js
const user = await User.create({username: "Goya"});
console.log(user.id)
// Print "1" if it's the first user

const user_by_id = await User.firstBy({id: user.id})
console.log(user.username == user_by_id.username)
// True
```


## 🛠️ Methods
This methods are inherited from ` AModel `.

⎯ 🧱 **Constructor**

*Declaration*:
```js
/**
 * Create an instance of the model
 * with the fields provided 
 * @param {{}} fields
*/
constructor(fields)
```
*Example*:
```js
// Create a new instance (you must use user.save())
// if you want to save it in the database
const user = new User({username: "Goya", email: "goya@clappycrew.com"});
```

⎯ 💾 **To define database**

*Declaration*:
```js
/**
 * Defines database to be used
 * @param {ADriver} db
 */
static use(db)
```
*Example*:
```js
// Define the database to be used by your model, the framework
// will set clappybot.database by default so use this method
// only if you want to use an other database
User.use(clappybot.database);
```

⎯ ⚙️ **To initialise database**

*Declaration*:
```js
/**
 * Initialise the model's table,
 * you should
*/
static async init()
```
*Example*:
```js
// Initialise the table (the framework do it for you but
// if for some reason you need it, it's available)
await User.init()
```

⎯ ✅ **To save instance to the database**

*Declaration*:
```js
/**
 * Save current instance in database
*/
async save()
```
*Example*:
```js
// Create a new instance (not saved)
const user = new User({username: "Goya", email: "goya@clappycrew.com"});
// Save it to the database
await user.save();
```

⎯ ♻️ **Create and save at the same time**

*Declaration*:
```js
/**
 * Create new instance of this model
 * and save it in the database
 * @param {{}} data 
 * @returns {Promise<AModel>}
*/
static async create(data = {})
```
*Example*:
```js
// The "create" method creates the new element and saves it directly
const user = await User.create({username: "LeWeeky", email: "leweeky@clappycrew.com"});
```

⎯ 🗑️ **Delete instance**

*Declaration*:
```js
/**
 * Delete current instance from database
*/
async delete()
```
*Example*:
```js
// The "create" method creates the new element and saves it directly
const user = User.create({username: "LeWeeky", email: "leweeky@clappycrew.com"});
// Delete user thank's to the instance
await user.delete();
```

⎯ 🧹 **Delete by fields**

*Declaration*:
```js
/**
 * Deletes all elements that corresponding
 * to the requested fields
 * @param {{}} fields
*/
static async deleteBy(fields)
```
*Example*:
```js
// All user with "LeWeeky" as their username AND "leweeky@clappycrew.com" as
// their email will be deleted
await User.deleteBy({username: "LeWeeky", email: "leweeky@clappycrew.com"});
```

⎯ 🗃️ **Get all instances**

*Declaration*:
```js
/**
 * Returns all elements of this table
 * as new instances
 */
static async all()
```
*Example*:
```js
// Get all users
const users = await User.all()
// Print all users in the console
for (let i = 0; i < users.length; i++)
{
	const user = users[i];
	console.log(user.username, user)
}
```

⎯ 🔎 **Get all instances by fields**

*Declaration*:
```js
/**
 * Returns all elements that corresponding
 * to the requested fields as new instances
 * @param {{}} fields
 * @param {number} limit
 * @returns {Promise<new() AModel[] | never[]>}
*/
static async findBy(fields, limit = 0)
```
*Example*:
```js
// Get all users with "LeWeeky" as their username
const some_users = await User.findBy({username: "LeWeeky"});
// Get 5 firsts users with "LeWeeky" as their username
const some_users = await User.findBy({username: "LeWeeky"}, 5);
```

⎯ 🔎 **Get first instance by fields**

*Declaration*:
```js
/**
 * Returns first element that corresponding
 * to the requested fields as new instance
 * @param {{}} fields
 * @returns {Promise<AModel | null>}
*/
static async firstBy(fields)
```
*Example*:
```js
// Get the first user from users with one or more specific fields
const leweeky = await User.firstBy({username: "LeWeeky"});
```

⎯ 🪄 **First or Create**

*Declaration*:
```js
/**
 * Returns first element that corresponding
 * to the requested fields as new instance
 * or create a new one if not found
 * @param {{}} fields
 * @returns {Promise<AModel>}
 */
static async firstByOrCreate(fields)
```
*Example*:
```js
// Get the first user corresponding
// or create one if there are none
const leweeky = await User.firstBy({username: "LeWeeky"});
```

⎯ 🥇 **First**

*Declaration*:
```js
/**
 * Returns first element as new instance
 * @returns {Promise<AModel | null>}
 */
static async first()
```
*Example*:
```js
// Get the first user
const user = await User.first();
```

## 🆙 Update instance fields

Maybe you want to change ` username ` of a specific ` user `, you can do so as follow:
```js
const user = await User.firstBy({id: 1});

user.username = "New username";
// Dont forget to save if you want to update it
// in your database
await user.save();
```