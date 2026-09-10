---
sidebar_position: 4
---
# ⏰ Tasks

It could be an automatic message in a channel with the day's weather and forecast that will appearevery day at 7am,
or an update checker every Monday at 3am that will restart the bot in case of a new update or anything else you
do on a regular basis.

All tasks belonging to a module must be located in the module's tasks folder. For example, if my module is `mymodule`,
the tasks will be located in `./sources/modules/mymodules/tasks`.

Here is an example of task to tell you good morning each day at 8 am:
```js
import { CronJob } from "cron"

const job = new CronJob(
	'0 8 * * *',
	function () {
		console.log('Good morning!');
	}
);

export function start() {
	job.start();
}

export function stop() {
	job.stop();
}
```

` start ` is called by the system at startup and during a reload, ` stop ` is called before ` start `
during the reload to stop tasks and restart it correctly.