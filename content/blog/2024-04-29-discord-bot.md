---
title: Discord bot
description: wiwwie!!!
aliases: 
tags:
  - discord
draft: false
date: 2024-04-29
---
[GitHub - iamasink/lilysbot: my discord bot :3](https://github.com/iamasink/lilysbot)
i created my discord bot, also known as Wiwwie, because i own a discord server, and i wanted it to do some specific things. 
the code is a mess, and this bot has existed since September 2022 (!!!). originally i wrote it in JavaScript but eventually rewrote a lot of stuff with TypeScript, after some convincing.
i'd say that this is why i use (and like) typescript, it's basically what got me to learn it.

it's not my first discord bot though. back in 2020 i wrote a discord bot, mostly for fun and to learn. i knew very little javascript going into it and used resources such as [discordjs.guide](https://discordjs.guide) to learn discordjs, and javascript. 


# Wiwwie
i think someone just called the bot Wiwwie when i first added openai apis so it could talk, and it stuck as the name for the bot.
some features i really like and that no other bot (that i know) satisfies me/my requirements:
## user info
this command allows me to get as much info as discord gives about a user. it allows me to target a user using the discord commands feature, which supports tags, usernames, ids. there are also options to show different information, originally it was just different images (avatar, local guild avatar and banner) but later i added a way to retrieve known username history from the database.
![[Pasted image 20240427194713.png]]


additionally: whenever a user joins, she shows their information in a staff channel. 
![[Pasted image 20240427200227.png]]

i'm quite proud of the way this is implemented, as the bot runs a command on its own:
```ts
log.log(guild, `${member.id}, \`${member.username}\` has joined guild ${guild}. They were invited by \`${inviterUser.tag}\` (${inviter.id})`)
	.then(async msg => {
		if (!msg) return
		let interaction = await commands.run(msg, "slash", "info", null, "user", [
			{
				name: 'target',
				type: 6,
				value: member.id,
				user: await client.users.fetch(member.id),
				member: await guild.members.fetch(member.id)
			}
		])
	})
```

## invites tracking
nowadays, i think there's a better way to do this properly through discord, but i have yet to update to the new system, and this still works fine.
how it works, is it caches the invites state in the database, and every time someone joins, it checks which invite increased the `uses`, then updates the cache. i haven't had any issues with it and it seems to be perfectly accurate. maybe it wouldn't function as well on a big server.
once the invite link has been determined, it adds that to the user's information in the database, which can be retrieved with [[#user info]]. this is useful to see who invited a user, especially if they are trolling/breaking rules.

i also created a `/invite create` command, which allows me to generate new invites, and record the name in the database. this is useful to track which invite users used to join, further than just Who invited them. these invites are created by the bot and it prevents duplicates. at some point, i will change the "Invited By" section of user info to show the name of the invite, if the user was invited by Wiwwie.
![[Pasted image 20240427202231.png]]


# older bots
in 2020 i first started learning to use discordjs. i created a bot and later rewrote it because, understandably, my code was terrible as i was just learning. it mostly just had fun little commands as i created it for a small server with no real needs in mind.
i basically learned javascript just through creating these. i think i much prefer learning stuff in this way, by trying to create something. and it seems to have worked, i quite like writing with javascript/typescript