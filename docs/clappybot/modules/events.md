---
sidebar_position: 3
---
# 🔔 Events

Via [discord.js](https://discordjs.guide/#before-you-begin) we can handle a lot of [**events**](https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files)), for example we can send
a welcome message when someone joins a guild, when someone writes a message, clicks on a boton or whatever.

When you create a module, you can easly handle this events with a simple folder. In fact, it you create a ` buttons `
folder, each file created inside will be imported as a handler for a discord button but we will see it in few minutes
but before it we have to talk about **tasks**, ` init.js ` ands **models**.