---
sidebar_position: 5
---
# ⚙️ Initilisation

For our modules, we sometimes need to ensure that certain data, parameters, classes and other elements have been initialized.
` init.js ` is run at when the bot is started up to ensure that everyting is initialized before handling an event.

Let's open ` ./sources/modules/template/init.js `:
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

Here we importe ` clappybot `, it's the main object of our system, we can use it to access to ` clappybot.database `,
we importe both ` Template `, ` User ` which are **Models**. As you will see in the next page, a **Model** need a **database**
and to be initialized it's why they should be initialized inside ` init.js `.

*So don't forget to initialise everythink you need here.*

## 🚨 Mandatory
` init.js ` must have ` init_module ` method and it should be exported as below:
```js
module.exports = {
	init_module
}
```
