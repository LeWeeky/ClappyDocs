---
sidebar_position: 4
---
# ⏰ Tasks

It could be an automatic message in a channel with the day's weather and forecast that will appearevery day at 7am,
or an update checker every Monday at 3am that will restart the bot in case of a new version or anything else you
do on a regular basis.

All tasks belonging to a module must be located in the module's tasks folder. for example, if my module is ‘mymodule’,
the tasks will be located in `./sources/modules/mymodules/tasks`.

Here is an example of task to tell you good morning each day at 8 am :
```js
const {CronJob} = require('cron')

const job = new CronJob(
	'0 8 * * *',
	function () {
		console.log('Good morning!');
	}
);

function start()
{
	job.start();
}

function stop()
{
	job.stop();
}
module.exports = {
	start,
	stop
}
```

## 🚨 Mandatory

A task must have ` start ` and ` stop ` methods and they sould be exported like this: 
```js
module.exports = {
	start,
	stop
}
```

` start ` is called by the system at startup and during a reload, ` stop ` is called before ` start `
during the reload to stop tasks and restart it correctly.