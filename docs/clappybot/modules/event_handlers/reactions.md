---
sidebar_position: 8
---
# 🎭 Reactions

## 🎊 Multi events

There is 2 kinds of events here:
- [` MessageReactionAdd `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageReactionAdd) → when a reaction is added to a message
- [` MessageReactionDelete `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageReactionDelete) → when a reaction is removed from a message

Since we have 2 kinds of events, we can no longer simply put them in ` ./sources/modules/<module_name>/channels `,
we need to specify which of the 2 events is to be used. To do this, we add an *extension* to the end of the file: 
- ` add ` → to handle [` MessageReactionAdd `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageReactionAdd)
- ` remove ` → to handle [` MessageReactionDelete `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#messageReactionDelete)

⎯ **Example for each event**
*replace ` <module_name> ` by the name of your module*
- ` add ` → ` ./sources/modules/<module_name>/reactions/add.js `
- ` remove ` → ` ./sources/modules/<module_name>/channels/remove.js `

## 🤔 "MessageReaction"

[` MessageReaction `](https://discord.js.org/docs/packages/discord.js/14.19.3/MessageReaction:Class) is an object with several data and methods, you should read 
[discord.js documentation](https://discord.js.org/docs/) to see
how to work with [` MessageReaction `](https://discord.js.org/docs/packages/discord.js/14.19.3/MessageReaction:Class).

- https://discord.js.org/docs/packages/discord.js/14.19.3/MessageReaction:Class

## ➕ MessageReactionAdd

Has two arguments ` reaction ` who is an instance of [` MessageReaction `](https://discord.js.org/docs/packages/discord.js/14.19.3/MessageReaction:Class)
and ` user ` who is an instance of [` User `](https://discord.js.org/docs/packages/discord.js/14.19.3/User:Class).
```js
export async function parse(reaction, user)
{
	console.log(message.author.username, "reacted with", reaction)
}

export const conditions = [];
export const any_guild = false;
export const dm = false;
export const allow_bots = false;
```

## ➖ MessageReactionRemove

Has two arguments ` reaction ` who is an instance of [` MessageReaction `](https://discord.js.org/docs/packages/discord.js/14.19.3/MessageReaction:Class)
and ` user ` who is an instance of [` User `](https://discord.js.org/docs/packages/discord.js/14.19.3/User:Class).
```js
export async function parse(reaction, user)
{
	console.log("reaction of", message.author.username, "has been removed", reaction)
}

export const conditions = [];
export const any_guild = false;
export const dm = false;
export const allow_bots = false;
```
## 🖥️ Methods and parameters

⎯ **Exports**

At the bottom of the file we have exports, which includes several important elements.
```js
export const conditions = [];
export const any_guild = false;
export const dm = false;
export const allow_bots = false;
```

- ` parse ` → method to handle the event
- ` conditions ` → list of methods to check if ` reaction ` and ` user ` has the right conditions
- ` any_guild ` →  if false, the command can be executed only on the main guild
- ` dm ` →  if true, we can use this command in direct messages
- ` allow_bots ` →  if false, it will ignore events when the user is a bot