---
sidebar_position: 2
---
# 🚀 Quick Start

C'est parti pour la création de votre premier bot ! La première étape consiste à créer
votre projet et à entrer dedans.

```
npm create clappybot
```
```
cd <Nom de votre projet>
```
```
npm install
```

*⚠️ Si vous avez oublié ou donné de mauvaises informations pendant la configuration de l'environnement, référez vous à cette page [📝 Confiration de l'environnement](/clappybot/environment)*


Maintennat, nous avons besoin d'un premier module pour gérer les paramètres, pas de soucis
il on vac simplement cloner celui-ci :
```
git clone https://github.com/LeWeeky/settings-module-for-clappybot.git sources/modules/mybotsettings
```

C'est tout à fait optionel mais vous voudrez probablement créer votre propre module et ajouter vos
propres fonctionnalités. C'est pourquoi il existe un module "template" qui sert d'exemple et de
base pour ceux et celles qui veulent créer leur propre module. N'oubliez pas de lire le 
[README.md](https://github.com/LeWeeky/Module-template-for-clappybot)):
```
git clone https://github.com/LeWeeky/Module-template-for-clappybot.git sources/modules/template
```

Avant le premier démarrage, soyez certain d'avoir activé tous les ` intents ` dans votre
[application discord](https://discord.com/developers/applications). En suite, vérifiez les mise à
jour via  :
```
npm run update
```

Ceci étant fait, vous pouvez démarrer d'une des manières qui suit :

pour les utilisateurs/rices 🐧 **Linux** et 🍎 **MacOS**
```
npm run dev
```
pour les utilisateurs/rices 🪟 **Windows**
```
node index.js
```

Si vous êtes un(e) utilisateurs/rices 🪟 **Windows** il est recommandé d'activer les logs
via votre fichier `.env` comme ceci :
```
DEBUG_INFO=true
DEBUG_TRACE=true
DEBUG_ERROR=true
DEBUG_WARING=true
```

Maintenant votre bot devrait être en ligne, félicitations 🎉 ! Pour la suite vous devrez définir
votre "serveur principal", vous pouvez le faire grâce à la commande `/setguild`, fourni par le 
le module de règlages. Une fois fait, vous pourrez définir un salon pour les annonces de mise à jour et changements via cette commande : `/setsupport`.