---
sidebar_position: 5
---
# 🧑‍🧑‍🧒‍🧒 Members

## ℹ️ Magic tips 

If you want to create "fake join" or "fake leave" to test you handlers, you can use builtin commands : ` join ` and ` leave `.

## 🎊 Multi events

There is 3 kinds of events here:
- [` MemberAdd `](https://discord.com/developers/docs/events/gateway-events#guild-member-add) → (we will call it ` MemberJoin `, it's easier to understand) when a user join a guild
- [` MemberRemove `](https://discord.com/developers/docs/events/gateway-events#guild-member-remove) → (we will call it ` MemberLeave `, it's easier to understand) when a user leave a guild
- [` MemberUpdate `](https://discord.com/developers/docs/events/gateway-events#guild-member-update) → when a member (user inside a guild) is updated (e.g: new role)

Since we have 3 kinds of events, we can no longer simply put them in ` ./sources/modules/<module_name>/members `,
we need to specify which of the 3 events is to be used. To do this, we add an *extension* to the end of the file: 
- ` join ` → to handle [` MemberAdd `](https://discord.com/developers/docs/events/gateway-events#guild-member-add)
- ` leave ` → to handle [` MemberRemove `](https://discord.com/developers/docs/events/gateway-events#guild-member-remove)
- ` update ` → to handle [` MemberUpdate `](https://discord.com/developers/docs/events/gateway-events#guild-member-update)

⎯ **Example for each classes**
*replace ` <module_name> ` by the name of your module*
- ` join ` → ` ./sources/modules/<module_name>/members/member_join.js `
- ` leave ` → ` ./sources/modules/<module_name>/members/member_leave.js `
- ` update ` → ` ./sources/modules/<module_name>/members/member_update.js `

## 🤔 "Member"

[` Member `](https://discord.js.org/docs/packages/discord.js/main/GuildMember:Class) is an object with several data and methods, you should read 
[discord.js documentation](https://discord.js.org/docs/) to see
how to work with [` Member `](https://discord.js.org/docs/packages/discord.js/main/GuildMember:Class).

- https://discord.js.org/docs/packages/discord.js/main/GuildMember:Class

## ➕ MemberJoin

Has one argument ` member ` who is an instance of [` Member `](https://discord.js.org/docs/packages/discord.js/main/GuildMember:Class).
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

```js
Has one argument ` member ` who is an instance of [` Member `](https://discord.js.org/docs/packages/discord.js/main/GuildMember:Class).
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

## 🖥️ Methods and settings

Be careful [` MemberJoin `](#-memberjoin) and [` MemberLeave `](#-memberleave) both has only one argument so as shown below: 
```js
async function parse(member)
```
While [` MemberUpdate `](#-memberupdate) has 2 arguments 
```js
async function parse(old_member, new_member)
```

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
- ` conditions ` → list of methods to check if ` member ` has the right conditions
- ` any_guild ` →  if false, the command can be executed only on the main guild
- ` dm ` →  if true, we can use this interaction in direct messages
- ` allow_bots ` →  if false, it will ignore events when the member is a bot