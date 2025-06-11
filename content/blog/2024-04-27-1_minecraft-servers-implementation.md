---
title: Minecraft servers implementation
description: what i've learned from running over 70 minecraft servers
aliases:
  - docker-minecraft-server
tags:
  - linux
  - minecraft
  - server
  - docker
draft: false
date: 2024-04-27
---
I often host Minecraft servers for friends. it's really useful to have someone who can do this for those few weeks per year when we're playing minecraft. it is so much better than using aternos or paying for a dedicated server.

at this point, i've created around 70 separate servers and i'd like to say i've gotten it down to an art and these days can get a server running in a few minutes, often before people's games have loaded if its a heavily modded version

Before i had my own ""server"" (old pc), i hosted everything on my main pc, and sometimes still host stuff there - usually things that would benefit from more than 8gb of ram. as of writing i'm hosting a modded minecraft server on my main pc.

# external stuff
I use cloudflare as both my registrar and for dns stuff. Clients connect to one of my addresses (mc. mc2. mc3..) depending on the server (as i sometimes host multiple). On cloudflare. these are dns-only (non "orange cloud'ed") SRV and A records. The SRV records are \_minecraft.\_tcp.mc which targets mc.iamas.ink, duplicated with "mc" changed to "mc2"/"mc3".
these target the A record, which points to my IP address, which is being updated (when it rarely changes) ~~using [timothymiller/cloudflare-ddns](https://github.com/timothymiller/cloudflare-ddns)~~ 
(update 2025-02-01: i suggest using this instead [favonia/cloudflare-ddns](https://github.com/favonia/cloudflare-ddns))
# internal stuff
after cloudflare, the requests come to my ip, which has 25565 port forwarded to my server machine, which runs [itzg/mc-router](https://github.com/itzg/mc-router) in docker, alongside a minecraft server using [itzg/docker-minecraft-server](https://github.com/itzg/docker-minecraft-server). 
mc-router then routes the connection to either that server in docker, or the local ip for my main pc. the reason i need to use mc-router here is because these domains all use the same port, and i don't think theres any easy way to do this otherwise.

here's my docker-compose.yml
```yml
---
services:
  mcserver:
    stop_grace_period: 2m
    container_name: mcserver
    image: itzg/minecraft-server
    environment:
      - EULA=TRUE
      - TYPE=FABRIC

      - MODRINTH_PROJECTS=styled-chat,styled-nicknames,dynres,anti-xray,luckperms,chunky,spark,minimotd,carpet,itemrename,lithium,krypton,ferrite-core,noisium,adaptiveview,fabric-api
      - MODRINTH_ALLOWED_VERSION_TYPE=release
      - MODRINTH_DOWNLOAD_DEPENDENCIES=required
      - REMOVE_OLD_MODS=false
      
      - DIFFICULTY=normal
      - TZ=Europe/London
      - USE_AIKAR_FLAGS=true
      - MEMORY=4G
      - SNOOPER_ENABLED=false
      - RCON_PASSWORD=password
      - ENABLE_COMMAND_BLOCK=true
      - ENFORCE_SECURE_PROFILE=false
      - SEED=seed
      - STOP_SERVER_ANNOUNCE_DELAY=30
      - ENABLE_WHITELIST=true
      - ENFORCE_WHITELIST=true
      - WHITELIST=lilyl
  

      - USE_SIMD_FLAGS=true
      - MAX_TICK_TIME=-1 # DISABLE THIS (-1) if autopause is enabled. otherwise 120000

      - JVM_DD_OPTS=disable.watchdog:true,paper.playerconnection.keepalive:120
      - SPAWN_PROTECTION=0
      - ENABLE_AUTOPAUSE=FALSE
      - AUTOPAUSE_TIMEOUT_EST=1200 # default 3600 describes the time between the last client disconnect and the pausing of the process
      - AUTOPAUSE_TIMEOUT_INIT=120 # default 600 describes the time between server start and the pausing of the process, when no client connects inbetween
      - AUTOPAUSE_TIMEOUT_KN=60 # default 120 describes the time between knocking of the port (e.g. by the main menu ping) and the pausing of the process, when no client connects inbetween
      - AUTOPAUSE_PERIOD=10 # default 10 describes period of the daemonized state machine, that handles the pausing of the process
      - DEBUG_AUTOPAUSE=FALSE

    healthcheck:
      test: mc-health
      start_period: 1m
      interval: 5s
      retries: 20
    tty: true
    stdin_open: true
    restart: unless-stopped
    volumes:
      - ~/app/minecraftserver:/data
    deploy:
      resources:
        limits:
          cpus: "3"
          memory: 7G
  mc-router:
    container_name: mc-router
    image: itzg/mc-router
    depends_on:
      mcserver13:
        condition: service_healthy
    environment:
      MAPPING: |
	    mc.iamas.ink=mcserver:25565
        mc2.iamas.ink=192.168.0.3:25565
      CLOUDFLARE_SRV: true
      TZ: Europe/London
    ports:
      - "25565:25565"
```

also, this is one of few occasions where i actually moved some other stuff from my other docker-compose file. it annoyed me too much, i guess.

# changing ip
if i ever change an ip or port, i can add a warning for people still using the old one using [lazymc](https://github.com/timvisee/lazymc). it's meant to be used to wake up a server when someone connects, but it works well here too. there's probably some better software to do this, but i have used lazymc before so was inclined to use it. 
Once the server is moved over, i can setup lazymc to run on the old address, and add a warning to the motd and kick message.
here is everything i modified in the lazymc.toml file

```toml
[public]
# Public address. IP and port users connect to.
# Shows sleeping status, starts server on connect, and proxies to server.
address = "0.0.0.0:25565"

# Server version & protocol hint.
# Sent to clients until actual server version is known.
# See: https://git.io/J1Fvx
## Setting the protocol to 0 means some very old version, so will show "Wrong IP!" as the version.
version = "Wrong IP!"
protocol = 0

[server]
# Command to start the server.
## to do nothing, just set the command as ""
command = ""

# Server start/stop timeout in seconds. Force kill server process if it takes too long.
## disable this, as nothing is actually happening
start_timeout = 0
stop_timeout = 0

[motd]
# MOTD, shown in server browser.
## not all of these is necessary, but whatever.
sleeping = "§5§lThis server has moved!§r§d\nThe new IP is §2§omc.example.com§r§d, no colon / port"
starting = "§5§lThis server has moved!§r§d\nThe new IP is §2§omc.example.com§r§d, no colon / port"
stopping = "§5§lThis server has moved!§r§d\nThe new IP is §2§omc.example.com§r§d, no colon / port"

[join]
## only use the kick method, to kick and warn the user immediately on join.
methods = ["kick"]

[join.kick]
# Kick occupation method.
# Instantly kicks a client with a message.

# Message shown when client is kicked while server is starting/stopping.
## again, probably not necessary but
starting = "§5§lThis server has moved!§r§d\nThe new IP is §2§omc.example.com§r§d, no colon / port"
stopping = "§5§lThis server has moved!§r§d\nThe new IP is §2§omc.example.com§r§d, no colon / port"
```

and here's how it looks in-game
![Pasted image 20240427090121.png](Attachments/Pasted%20image%2020240427090121.png)

# whitelist
this may seem obvious, but you should whitelist your private minecraft servers. there are bots that scan for open servers and you may find unwanted visitors. IP addresses are not private information, and there's few enough IPv4's that you can scan every one in less than an hour.