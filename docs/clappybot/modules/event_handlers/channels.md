---
sidebar_position: 7
---
# 🪑 Channels

## 🎊 Multi events

There is 3 kinds of events here:
- [` ChannelCreate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#channelCreate) → when a channel is created
- [` ChannelDelete `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#channelDelete) → when a channel is deleted
- [` ChannelUpdate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#channelUpdate) → when a channel is updated

Since we have 3 kinds of events, we can no longer simply put them in ` ./sources/modules/<module_name>/channels `,
we need to specify which of the 3 events is to be used. To do this, we add an *extension* to the end of the file: 
- ` create ` → to handle [` ChannelCreate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#channelCreate)
- ` delete ` → to handle [` ChannelDelete `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#channelDelete)
- ` update ` → to handle [` ChannelUpdate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#channelUpdate)

⎯ **Example for each classes**
*replace ` <module_name> ` by the name of your module*
- ` create ` → ` ./sources/modules/<module_name>/channels/create.js `
- ` delete ` → ` ./sources/modules/<module_name>/channels/delete.js `
- ` update ` → ` ./sources/modules/<module_name>/channels/update.js `

## 🤔 "Channel"

[` Channel `](https://discord.js.org/docs/packages/discord.js/14.19.3/BaseChannel:Class) is an object with several data and methods, you should read 
[discord.js documentation](https://discord.js.org/docs/) to see
how to work with [` Channel `](https://discord.js.org/docs/packages/discord.js/14.19.3/BaseChannel:Class).

- https://discord.js.org/docs/packages/discord.js/main/BaseChannel:Class

## ➕ ChannelCreate

Has one argument ` channel ` who is an instance of [` Channel `](https://discord.js.org/docs/packages/discord.js/14.19.3/BaseChannel:Class).
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
}
```

## ➖ ChannelDelete

Has one argument ` channel ` who is an instance of [` Channel `](https://discord.js.org/docs/packages/discord.js/14.19.3/BaseChannel:Class).
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
}
```

## 🆙 ChannelUpdate

Has two arguments ` old_channel ` and ` new_channel ` who are instances of [` Channel `](https://discord.js.org/docs/packages/discord.js/14.19.3/BaseChannel:Class).

⚠️ **Warning:** ` old_channel ` is the channel state before the update and ` new_channel ` after the update.
```js
async function parse(old_channel, new_channel)
{
	console.log("channel:", old_channel.name, "has been updated")
	console.log("old_channel:", old_channel)
	console.log("new_channel:", new_channel)
}

module.exports = {
	parse,
	conditions: [],
	any_guild: false,
	dm: false,
	allow_bots: false
}
```

## 🖥️ Methods and settings

Be careful [` ChannelCreate `](#-channelcreate) and [` ChannelDelete `](#-channeldelete) both has only one argument so as shown below: 
```js
async function parse(message)
```
While [` ChannelUpdate `](#-channelupdate) has 2 arguments 
```js
async function parse(old_channel, new_channel)
```

At the bottom of the file we have exports, which includes several important elements.
```js
module.exports = {
	parse,
	conditions: [],
	any_guild: false,
	dm: false,
}
```

- ` parse ` → method to handle the event
- ` conditions ` → list of methods to check if ` channel ` has the right conditions
- ` any_guild ` →  if false, the command can be executed only on the main guild
- ` dm ` → if true, we can use this interaction in direct messages