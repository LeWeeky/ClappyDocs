---
sidebar_position: 3
---
# 🔔 Events

Grâce à [discord.js](https://discordjs.guide/#before-you-begin) on supporte un grand nombre d'[**évènements**](https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files),
par exemple on peut envoyer un message de bienvenue quand quelqu'un rejoint un serveur, réagir quand quelqu'un écrit un message, clique sur un bouton et plein d'autres choses.

Quand vous créés un module, vous pouvez facilement gérer tous ces évènements simplement en les mettant dans un dossier. En 
effet, si vous un dossier ` buttons `, chaque fichier que vous créerez dedans sera importé en tant que gestionnaire
de bouton discord mais on en reparlera un peu plus tard. Pour l'heure parlons des **tasks**, du fichier ` init.js ` et des 
**models**.