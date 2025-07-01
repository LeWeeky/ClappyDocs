---
sidebar_position: 6
---
# ⏬️ Include in an existing project

If you already have a project (without clappybot), you can easily add this framework.

## 0️⃣ Requirement

Before you can really get started, you'll need to download the framework:
```bash
npm install clappybot@latest
```

You will also need to provide the environment file, for this look at [📝 Environment configuration](/clappybot/environment)

## 1️⃣ Index

First, you need to include clappybot in your index file (the main file of your project) like this :
```js
const { clappybot, modules } = require('clappybot');
```

Now, let's initialise the modules and the framework.
```js
modules.init();
clappybot.init(bot);
```

Here ` bot ` should be the instance of your discord client, in general it is called ` bot ` or ` client `
by convention but you could have called it something else, the important thing is that this variable
corresponds to ` new Client(YOUR_PARAMETERS_HERE) `.

## 2️⃣ Modules

Now you just have to create your modules in ` sources/modules `, learn how thank's to this page : [📦 Modules](/category/-modules)