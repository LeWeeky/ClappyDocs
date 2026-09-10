---
sidebar_position: 2
---
# 🔎 Have a see inside

There is a lot of files inside ` sources/modules/templates ` but let's see what it all adds up to.

## 👊 Handlers

The purpose of these files is to manage interactions, events, database elements and tasks.

### Buttons

`buttons` → for your buttons

```mermaid
flowchart LR
	folder[buttons]
	folder-->ceate_ticket.js
	folder-->close_ticket.js
```

### Channels 

`channels` → 3 types of files are possible :
- those ending with `create.js` will be automatically launched when a channel is created
- those ending with `delete.js` will be automatically launched when a channel is deleted
- those ending with `update.js` will be automatically launched when a channel is updated

```mermaid
flowchart LR
	folder[channels]
	folder-->fix_permissions_on_create.js
	folder-->log_changes_on_update.js
	folder-->send_warning_on_delete.js
```

### Commands

`commands` → for your commands


```mermaid
flowchart LR
	folder[commands]
	folder-->settings.js
	folder-->ban.js
	folder-->kick.js
```

### Members

`members` → 3 types of files are possible :
- those ending with `join.js` will be automatically launched when a member joins a guild
- those ending with `leave.js` will be automatically launched when a member leaves a guild
- those ending with `update.js` will be automatically launched when a member is updated on a guild


```mermaid
flowchart LR
	folder[members]
	folder-->add_role_on_join.js
	folder-->send_welcome_message_on_join.js
	folder-->send_goodby_message_on_leave.js
	folder-->log_members_changes_on_update.js
```

### Menus

`menus` → for your select menus

```mermaid
flowchart LR
	folder[menus]
	folder-->help.js
	folder-->roles.js
```

### Messages

`messages` → 3 types of files are possible :
- those ending with `create.js` will be automatically launched when a message is created
- those ending with `delete.js` will be automatically launched when a message is deleted
- those ending with `update.js` will be automatically launched when a message is updated

```mermaid
flowchart LR
	folder[messages]
	folder-->react_on_create.js
	folder-->snip_on_delete.js
	folder-->log_on_delete.js
```

### Modals

`modals` → for your modals (forms)

```mermaid
flowchart LR
	folder[modals]
	folder-->post.js
	folder-->report.js
```

### Models

`models` → models are a quick and easy way of creating objects linked to your database; [please read the documentation](/clappybot/modules/models)

```mermaid
flowchart LR
	folder[models]
	folder-->User.js
	folder-->Settings.js
```

### Presences

`presences` → to check presences updates (status & activities of users and bots)

```mermaid
flowchart LR
	folder[presences]
	folder-->detect_links.js
	folder-->who_is_playing.js
```

### Reactions

`reactions` → 2 types of files are possible :
- those ending with `add.js` will be automatically launched when a reaction is added to a message
- those ending with `remove.js` will be automatically launched when a reaction is removed from a message

```mermaid
flowchart LR
	folder[reactions]
	folder-->add.js
	folder-->remove.js
```

### Tasks

`tasks` → define recurring tasks such as an automatic message or checking for updates


```mermaid
flowchart LR
	folder[tasks]
	folder-->auto_update.js
	folder-->birthdays.js
```

### ℹ️ Reminder
Each folder can contain as many files as necessary, please take care for folders that manage several
events (for example: create, update and delete events) to add the extension corresponding to the event
in question (channel_**create**.js, channel_**update**.js, channel_**delete**.js)

### 🧰 Utils
`utils` → You will notice that there is a `utils` folder, which is not automatically imported by the system, it is a totally optional folder which can have any other name (it doesn't matter) in which you save functions, classes or anything else that can be used in your module