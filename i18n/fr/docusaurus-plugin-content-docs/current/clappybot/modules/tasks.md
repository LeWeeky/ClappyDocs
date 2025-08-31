---
sidebar_position: 4
---
# ⏰ Tasks

Cela peut-être un message automatique dans un salon qui va présenter la météo du jour tous les matins à une heure précise, un vérificateur de mise à jour qui va redémarrer le bot en cas de nouvelle version de clappybot disponible ou n'importe quoi de répétitif.

Toutes les tâches appartenant à un module doivent être installée dans le dossier tâches. Par exemple : si mon module s'appelle `monmodule`, les tâches devront être localisées dans le dossier `./sources/modules/monmodules/tasks`.

Voici un exemple de tâche qui vous dira "bon réveil" tous les matins à 8h :
```js
const {CronJob} = require('cron')

const job = new CronJob(
	'0 8 * * *',
	function () {
		console.log('Bon réveil!');
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

## 🚨 Obligatoire

Une tâche doit avoir une méthode ` start ` et une méthode ` stop `, celles-ci doivent être exportées de la façon suivante :
```js
module.exports = {
	start,
	stop
}
```

` start ` est executée par le système lors du démarrage ou lors d'un rechargement.
` stop ` est executée avant ` start ` lors d'un rechargement pour redémarrer les tâches proprement.