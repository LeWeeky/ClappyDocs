---
sidebar_position: 6
---
# ⏬️ Inclure dans un projet existant

Si vous avez déjà un projet (sans clappybot), vous pouvez facilement ajouter ce framework.

## 0️⃣ Prérequis

Avant de pouvoir commencer, vous devrez installer le framework :
```bash
npm install clappybot@latest
```

Il vous faudra également fournir un fichier d'environment, pour cela prennez un instant pour lire ceci [📝 Configuration de l'environment](/clappybot/environment)

## 1️⃣ Index

Dans un premier temps, vous devez inclure clappybot dans votre fichier index
(le fichier principal de votre projet) comme ceci :
```js
const { clappybot, modules } = require('clappybot');
```

Maintenant, initialisez les modules et le framework.
```js
modules.init();
clappybot.init(bot);
```

Ici ` bot ` doit être l'instance de votre client discord, en général il est nommé par 
convention ` bot ` ou `client ` mais vous pourriez l'avoir appelé autrement, l'important est
que cette variable passée en paramètre doit correspondre à ` new Client(YOUR_PARAMETERS_HERE) `.

## 2️⃣ Modules

Désormais vous avez juste à créer vos modules dans ` sources/modules `, apprenez comment grâce à 
cette page : [📦 Modules](/category/-modules).