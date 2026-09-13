---
sidebar_position: 2
---
# 🔎 Un coup d'œil

Il y a beaucoup de fichiers dans ` sources/modules/templates ` mais voyons à quoi tout ça peu servir.

## 👊 Gestionnaires

L'objectif de ces fichers est de gérer les intérations, évènements, éléments de base de données et tâches.

### Buttons

`buttons` → pour vos boutons

```mermaid
flowchart LR
       folder[buttons]
       folder-->ceate_ticket.js
       folder-->close_ticket.js
```

# Channels

`channels` → 3 types de fichiers possibles :
- ceux finissant par `create.js` seront automatiquement démarrés quand un salon est créé
- ceux finissant par `delete.js` seront automatiquement démarrés quand un salon est supprimé
- ceux finissant par `update.js` seront automatiquement démarrés quand un salon est mis à jour 

```mermaid
flowchart LR
       folder[channels]
       folder-->fix_permissions_on_create.js
       folder-->log_changes_on_update.js
       folder-->send_warning_on_delete.js
```

### Commands

`commands` → pour vos commandes

```mermaid
flowchart LR
       folder[commands]
       folder-->settings.js
       folder-->ban.js
       folder-->kick.js
```

### Members

`members` → 3 types de fichiers possibles :
- ceux finissant par `join.js` seront automatiquement démarrés quand un membre rejoint un serveur
- ceux finissant par `leave.js` seront automatiquement démarrés quand un membre quitte un serveur
- ceux finissant par `update.js` seront automatiquement démarrés quand un membre est mis à jour sur un serveur

```mermaid
flowchart LR
       folder[members]
       folder-->add_role_on_join.js
       folder-->send_welcome_message_on_join.js
       folder-->send_goodby_message_on_leave.js
       folder-->log_members_changes_on_update.js
```

### Menus

`menus` → pour vos menus

```mermaid
flowchart LR
       folder[menus]
       folder-->help.js
       folder-->roles.js
```

### Messages

`messages` → 3 types de fichiers possibles :
- ceux finissant par `create.js` seront automatiquement démarrés quand un message est créé
- ceux finissant par `delete.js` seront automatiquement démarrés quand un message est supprimé
- ceux finissant par `update.js` seront automatiquement démarrés quand un message est édité ou mis à jour
 
```mermaid
flowchart LR
       folder[messages]
       folder-->react_on_create.js
       folder-->snip_on_delete.js
       folder-->log_on_delete.js
```

### Modals

`modals` → pour vos formulaires

```mermaid
flowchart LR
       folder[modals]
       folder-->post.js
       folder-->report.js
```

### Models

`models` → les modèles sont un moyen simple et rapide de créer des objects liés à votre base de données; pensez à [lire la documentation](/clappybot/modules/models)

```mermaid
flowchart LR
       folder[models]
       folder-->User.js
       folder-->Settings.js
```

### Presence

`presences` → pour vérifier les mises à jours de statuts et activités des utilisateurs et bots
 
```mermaid
flowchart LR
       folder[presences]
       folder-->detect_links.js
       folder-->who_is_playing.js
```

### Reactions

`reactions` → 2 types de fichiers possibles :
- ceux finissant par `add.js` seront automatiquement démarrés quand une réaction est ajoutée à un message
- ceux finissant par `remove.js` seront automatiquement démarrés quand une réaction est retirée d'un message

```mermaid
flowchart LR
       folder[reactions]
       folder-->add.js
       folder-->remove.js
```

### Tasks

`tasks` → défini des tâches récurrentes comme des messages automatiques ou vérifications de mise à jours

```mermaid
flowchart LR
       folder[tasks]
       folder-->auto_update.js
       folder-->birthdays.js
```

### ℹ️ Rappel

Chaque dossier peut contenir autant de fichiers que nécessaire, faites attention aux dossiers qui peuvent gérer plusieurs events (par exemple : create, update et delete) et ajoutez les extensions correspondantes (exemple : channel_**create**.js, channel_**update**.js, channel_**delete**.js)

### 🧰 Utils
Vous remarquerez qu'il y a un dossier `utiles`, celui-ci n'est pas automatiquement importé par le système, c'est un dossier totalement optionel (il peut même avoir le nom de votre choix), dedans vous pourrez installer vos fonctions, classes et tout ce dont vous aurez besoin plusieurs fois (dans plusieurs fichiers) dans votre module