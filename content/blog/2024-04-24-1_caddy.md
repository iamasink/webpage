---
title: Caddy
draft: false
aliases: 
tags:
  - linux
  - server
date: 2024-04-24
---
# Redirect a path to a subdomain with path

```caddyfile
https://example.com {
	handle_path /quartz/* {
        redir https://q.example.com{uri}
    }
}
```
eg. this will redirect example.com/quartz/post to q.example.com/post