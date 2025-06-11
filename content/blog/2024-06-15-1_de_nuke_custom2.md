---
title: de_nuke_custom2
description: i fixed nuke :)
aliases: 
tags: 
draft: false
date: 2024-06-15
---
de_nuke_custom ported to CS2 and significantly changed

---





vis bugs
- [ ] ![Pasted image 20240620075720.png](Attachments/Pasted%20image%2020240620075720.png)
- [ ] 


# creating garage doors
for doors that will be visible if they open fully in one func_door
seperate into multiple parts
![Pasted image 20240615053738.png](Attachments/Pasted%20image%2020240615053738.png)
give all the same name like `garage_door_01`, on the bottom one append the name to have `-bottom`
change the prop bottom bit to `prop_dynamic` and parent it to the bottom door part
set the top part's lip to `0`, then subtract the total from each, so the next might be `-16` and so on
the bottom one, add to the lip so it will poke out from the top. use ~`16`

set all parts to be `Toggle` True, `Use Opens` False, `Touch Opens` False
move direction to `-90, 0, 0` (for up)

create a `func_button` out of nodraw (so it is invisible)
create Two outputs: one for the bottom part of the door and one for the rest (as they have the same name, only one is needed.)
set buttons to be speed 100 or something, 

# door ajar angles
~~angles should follow the hammer rotational system
to make a door ajar on spawn:
set `Spawn Position` to Ajar
set Ajar angle to negative whatever on the left (?) or whatever
and positive on the other door if its double doors okey
leave rotation distance
set `Ajar shouldn't always open` to True for doors that are actually fully open~~
ajar doors are weird, unused


# door open sides
afaik
the door rotating Positively, is "Open Backward Only" and vice versa



# skybox stuff
in `addonname/map`
![Pasted image 20240615205433.png](Attachments/Pasted%20image%2020240615205433.png)
for skybox stuff goes as such
`prefabs/de_nuke/de_nuke_skybox02/worldnodes`
NOT `prefabs/maps/prefabs/maps/de_nuke/de_nuke_skybox02/`

![Attachments/Pasted image 20240615215020.png](Attachments/Attachments%2FPasted%20image%2020240615215020.png)
???
Error
Failed to load file (invalid)!
This seems to be some weird thing with importing. No idea!
But I fixed this error by (again) renaming `Counter-Strike Global Offensive/game/bin/win64/vpk.signatures` to `vpk.signatures.old` or .bak or whatever
Though, after an update, I get the issue again and have to repeat the above step. I believe this may be caused by the skybox being named the same as an existing skybox (de_nuke_skybox02). I renamed it to de_nuke_custom_skybox02 and hopefully this resolves the issue.

old position of sky_camera -40, -308 192
moved the skybox map such that the sky_camera is at 0 0 0
(did this matter? dont think so, but that's what is suggested on valve developer wiki so)


# other
Final compile took 5h40
is there no longer any way to modify bot behaviour?? the nav_ commands don't seem to work, and I can't figure much out in the editor..