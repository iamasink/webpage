---
title: Source 2 decompilation
description: 
aliases: 
tags: 
draft: false
date: 2024-05-07
---
[How to decompile vpk map? Getting errors · ValveResourceFormat/ValveResourceFormat · Discussion #619 · GitHub](https://github.com/ValveResourceFormat/ValveResourceFormat/discussions/619)


https://new.reddit.com/r/hammer/comments/17vjqbs/decompile_cs2_maps/
> but now I have MORE problems. Everything is made of worldnodes. I figured out how to separate the mesh worldnodes back to meshes pretty easily but when I do all these red lines pop up.

> As you said ctrl shift t to convert nodes to mesh and then in faces mode with all faces selected press "remove bad faces". For other issues there is not more you can do, that is the state of the decompiler right now.

this is pretty annoying but maybe i'll do it, i think this is what i established as the best option previously but couldn't be bothered.
i also kinda don't wanna have to wait to compile this map cuz i'm sure it'll take a few days, considering de_nuke in csgo took me like 3 days.

there are some other maps that seem to have decompiled it, but this might just be worldnodes too, i don't think it'd be to difficult to just mirror a map like that [Steam Workshop::Nuke (Mirror)](https://steamcommunity.com/sharedfiles/filedetails/?id=3145028641&searchtext=valveresourceformat)
maybe most of the map can stay as worldnodes?
theres so little information on this, it's annoying!! i even found my own 8 month old (unhelpful) reddit comment while looking for this again


# update 2024-06-15
Source2Viewer aka ValveResourceFormat [released 10.0](https://github.com/ValveResourceFormat/ValveResourceFormat/releases/tag/10.0), which improves the vmap decomplication significantly. It's still not perfect and suffers from much the same issues as bspsource, which the combined brushes/meshes and models. Maybe one day I'll decompile and fix them, (and release them publicly if I did) but that would be quite a big effort!!
