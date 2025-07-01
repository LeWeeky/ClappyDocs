---
sidebar_position: 2
---
# 🚀 Quick Start

Let's create your first bot! The first step is creating your project and go inside.

```
npm create clappybot
```
```
cd <Name of you project>
```
```
npm install
```

*⚠️ If you forgot or gave wrong information during the environment configuration
please refer to this page: [📝 Environment configuration](/clappybot/environment)*


Now we need a first module for the settigns, don't worry we can clone this one : 
```
git clone https://github.com/LeWeeky/settings-module-for-clappybot.git sources/modules/mybotsettings
```

This is an option, but you'll probably want to create your own module to add your functionalities. That's why there's a module template that will be a great help in developing your bot (don't forget to read the [README.md](https://github.com/LeWeeky/Module-template-for-clappybot)):
```
git clone https://github.com/LeWeeky/Module-template-for-clappybot.git sources/modules/template
```

Before the first run, make sure all intents are enabled in your [discord application](https://discord.com/developers/applications). Then you can check for updates and install dependencies by running this command :
```
npm run update
```

Once done, you can start as follows:

for 🐧 **Linux** and 🍎 **MacOS** users
```
npm run dev
```

for 🪟 **Windows** users
```
node index.js
```

If you are a 🪟 **Windows** user it is recommended that you define the debug logs you want in your `.env` file like this:
```
DEBUG_INFO=true
DEBUG_TRACE=true
DEBUG_ERROR=true
DEBUG_WARING=true
```

Now your bot should be online, congratulations 🎉 ! For the time being, you'll need to define a "main guild", which you can do using `/setguild` command, supplied with the module settings. Once this is done, you can set up a channel for announcements (updates, changes) with this command `/setsupport`.