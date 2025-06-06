---
sidebar_position: 9
---
# 🙌 Persences
*Status & activities updates of users and bots*

## 🤔 "Presence"

[` Presence `](https://discord.js.org/docs/packages/discord.js/14.19.3/Presence:Class) is an object with several data and
methods, you should read [discord.js documentation](https://discord.js.org/docs/) to see
how to work with [` Presence `](https://discord.js.org/docs/packages/discord.js/14.19.3/Presence:Class).
- https://discord.js.org/docs/packages/discord.js/14.19.3/Presence:Class

We will handle [` PresenceUpdate `](https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#presenceUpdate) 
so you can also take a look at this page:
- https://discord.js.org/docs/packages/discord.js/14.19.3/Client:Class#presenceUpdate

## 🆙 PresenceUpdate

Has two arguments ` old_presence ` and ` new_presence ` who are instances of
[` Presence `](https://discord.js.org/docs/packages/discord.js/14.19.3/Presence:Class).

⚠️ **Warning:** ` old_presence ` is the user status before the update and ` new_presence ` after the update.
```js
async function parse(old_presence, new_presence)
{
	console.log(`${new_presence.member.user.username}'s status changed`)
}

module.exports = {
	parse
}
```

## 🖥️ Methods and settings

At the bottom of the file we have exports, which includes several important elements.
```js
module.exports = {
	parse,
	conditions: [],
	any_guild: false,
	dm: false,
	allow_bots: false
}
```

- ` parse ` → method to handle the event
- ` conditions ` → list of methods to check if ` reaction ` and ` user ` has the right conditions
- ` any_guild ` →  if false, the command can be executed only on the main guild
- ` dm ` →  if true, we can use this command in direct messages
- ` allow_bots ` →  if false, it will ignore events when the user is a bot