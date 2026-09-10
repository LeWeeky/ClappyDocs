---
sidebar_position: 6
---
# 💬 Message

## 🎊 Multi events

There is 3 kinds of events here:
- [` MessageCreate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageCreate) → when a message is sent
- [` MessageDelete `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageDelete) → when a message is deleted
- [` MessageUpdate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageUpdate) → when a message is updated

Since we have 3 kinds of events, we can no longer simply put them in ` ./sources/modules/<module_name>/messages `,
we need to specify which of the 3 events is to be used. To do this, we add an *extension* to the end of the file: 
- ` create ` → to handle [` MessageCreate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageCreate)
- ` delete ` → to handle [` MessageDelete `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageDelete)
- ` update ` → to handle [` MessageUpdate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageUpdate)

⎯ **Example for each event**
*replace ` <module_name> ` by the name of your module*
- ` create ` → ` ./sources/modules/<module_name>/messages/create.js `
- ` delete ` → ` ./sources/modules/<module_name>/messages/delete.js `
- ` update ` → ` ./sources/modules/<module_name>/messages/update.js `

## 🤔 "Message"

[` Message `](https://discord.js.org/docs/packages/discord.js/14.19.3/Message:Class) is an object with several data and methods, you should read 
[discord.js documentation](https://discord.js.org/docs/) to see
how to work with [` Message `](https://discord.js.org/docs/packages/discord.js/14.19.3/Message:Class).

- https://discord.js.org/docs/packages/discord.js/main/Message:Class

## ➕ MessageCreate

Has one argument ` message ` who is an instance of [` Message `](https://discord.js.org/docs/packages/discord.js/14.19.3/Message:Class).
```js
export async function parse(message)
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
export const conditions = [];
export const any_guild = false;
export const dm = false;
export const allow_bots = false;
```

## ➖ MessageDelete

Has one argument ` message ` who is an instance of [` Message `](https://discord.js.org/docs/packages/discord.js/14.19.3/Message:Class).
```js
export async function parse(message)
{
	console.log("message from:", message.author.username, "has been deleted")
	console.log("content:", message.content)
}

export const conditions = [];
export const any_guild = false;
export const dm = false;
export const allow_bots = false;
```

## 🆙 MessageUpdate

Has two arguments ` old_message ` and ` new_message ` who are instances of [` Message `](https://discord.js.org/docs/packages/discord.js/14.19.3/Message:Class).

⚠️ **Warning:** ` old_message ` is the message state before the update and ` new_message ` after the update.
```js
export async function parse(old_message, new_message)
{
	console.log("message from:", old_message.author.username, "has been updated")
	console.log("old_content:", old_message.content)
	console.log("new_message:", new_message.content)
}

export const conditions = [];
export const any_guild = false;
export const dm = false;
export const allow_bots = false;
```

## 🖥️ Methods and parameters

Be careful [` MessageCreate `](#-messagecreate) and [` MessageDelete `](#-messagedelete) both has only one argument so as shown below: 
```js
export async function parse(message)
```
While [` MessageUpdate `](#-messageupdate) has 2 arguments 
```js
export async function parse(old_message, new_message)
```

⎯ **Exports**

At the bottom of the file we have exports, which includes several important elements.
```js
export const conditions = [];
export const any_guild = false;
export const dm = false;
export const allow_bots = false;
```

- ` parse ` → method to handle the event
- ` conditions ` → list of methods to check if ` message.member ` has the right conditions
- ` any_guild ` → if false, the command can be executed only on the main guild
- ` dm ` → if true, we can use this interaction in direct messages
- ` allow_bots ` → if false, it will ignore events when the member is a bot