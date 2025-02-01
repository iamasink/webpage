---
title: Setting up a private Wow server
description: World of Warcraft but lonelier
aliases:
  - Setting up a private Wow server with modules - AzerothCore in docker
tags:
  - docker
  - server
draft: false
date: 2024-10-25
---
# Prerequisites
Ensure you have docker and docker compose installed. You also need some way to edit the SQL, I suggest [HeidiSQL](github.com/HeidiSQL/HeidiSQL)

# Download and build AzerothCore
Create a folder somewhere, eg called `wowserver`
Clone [AzerothCore](https://github.com/azerothcore/azerothcore-wotlk) using git,:
```bash
git clone https://github.com/azerothcore/azerothcore-wotlk.git --depth 1
```
To add modules, use git clone in the `azerothcore-wotlk/modules` folder
eg: 
```bash
cd azerothcore-wotlk/modules
git clone https://github.com/azerothcore/mod-aoe-loot
```

Once you have the modules you want cloned, build the server with
```bash
docker compose build
```

You shouldn't need to edit the docker-compose.yml, but you may if you want to change the port it runs on. By default it uses `8085` and `3724` for world and auth respectively. These both need to be port forwarded and/or allowed through firewalls for others to join. 
For easier editing, you can change the docker volumes to be mounted files, but it isn't necessary.

Then you can start the servers with
```bash
docker compose up
```
or add -d for detached
# Using the console / adding an account
To interface with the server, eg to add an account, run
```bash
docker attach ac-worldserver
```
then you can run 
```bash
account create <user> <password>
```

# Setting the realmlist for the server
Using a MySQL browser, for example [HeidiSQL](github.com/HeidiSQL/HeidiSQL), navigate to `acore_auth` then the table `realmlist`. Set `address` to your Public IP / domain name.
If you're using cloudflare, create a DNS only (grey cloud) "A" record to your IP, you can use something such as [Cloudflare DDNS](https://github.com/favonia/cloudflare-ddns) to automatically update the address in cloudflare if you have a dynamic IP address.

# Setting the realmlist for the client(s)
Everyone needs to adjust their `./WTF/Config.wtf` in their Wow game folder and set the realmList to the IP/domain you use.
You might also need to change `./Data/enGB/realmlist.wtf` (or whatever language?)
These files might need to be set to Read-only if it keeps resetting.
If you host it locally, you can just use localhost (127.0.0.1) as the ip

# Configuration
You can configure the worldserver.conf and authserver.conf in `./env/dist/etc` by default. If they don't exist, copy and rename the `.conf.dist` files to just be `.conf`.
You shouldn't need to touch anything here. Don't change the Bind IP or port in these .conf files, if you wish to change it you should change it in the docker-compose.yml.
There are some fun things to change in the worldserver.conf, like XP rates, crit chances, allow profanity, etc.
Some modules need to be configured to work. Often they will be disabled by default.
Check in `./env/dist/etc/modules` for each module config, the server just needs to be restarted (not re-built) for them to apply. 