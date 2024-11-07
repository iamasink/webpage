---
title: stuff.
description: in which i put **stuff** for **reasons**
aliases: 
tags: 
draft: false
---
[Keyoxide is a decentralized tool to create and verify decentralized online identities.](https://keyoxide.org/)


signing github commits with ssh 
1. Edit the gitConfig file using the command `git config --global --edit`.
2. Add the following line: `[gpg "ssh"] sshCommand = C:/Windows/System32/OpenSSH/ssh.exe`.
3. Run the following commands: 
	1. `git config --global gpg.format ssh`, 
	2. `git config --global user.signingkey C:/Users/<USER>/.ssh/id_ed25519.pub` 
	3. and `git config --global commit.gpgsign true`.