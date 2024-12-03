---
title: Source 2 mapping stuff
description: 
aliases: 
tags: 
draft: false
date: 2024-06-13
---
# Manually editing a VMAP file
.VMAP files is the uncompiled map which Hammer 2 can edit. These are "DMX file\[s] under binary encoding version 4" - [VMAP - Valve Developer Community](https://developer.valvesoftware.com/wiki/VMAP). 
The ASCII encoding version can be exported easily from Hammer by using "Save Copy As Text". This exports a Really Really long text file (4.7 Million lines, 95 Million characters).

For my use case, I just wanted to change all the models I accidently specified as `.mdl` to `.vmdl`, I didn't realise they were different, and it displayed fine in editor, but in the properties had a "N/A" icon, and didn't allow the game to load on compile. 
I did this just by opening it in vscode and find and replace-ing all .mdl to .vmdl
There was some additional reference information at the top of the file, I changed this too and it seemed to work fine.

This text file can then be converted back into a editable VMAP using [DMXconvert](https://developer.valvesoftware.com/wiki/Dmxconvert), it's included in `Counter Strike: Global Offensive/game/bin/win64`.
The command to run is 
```bash
dmxconvert -i <in file> -o <out file> -oe binary -of vmap
```


# minimap
[Counter-Strike 2 Adding a minimap (Read Desc) - YouTube](https://youtu.be/vGItC8HAznk?si=4-Uao9FZWM0y_sSu)
I believe this can be done AFTER full compile, without re-compiling the map.

or:
just ignore "Create minimap" use [Radgen](https://developer.valvesoftware.com/wiki/RadGen) [Radgen minimap creation - CS2 Mapping Academy #11 (Counter Strike 2) - YouTube](https://www.youtube.com/watch?v=vDhUOtkXiOM)


# console commands 
commands to quickly test ingame
```
sv_cheats 1; sv_warmup_to_freezetime_delay 0; mp_freezetime 0; mp_team_intro_time 0; bot_kick; mp_roundtime_defuse 60; mp_roundtime 60; mp_roundtime_hostage 60; mp_round_restart_delay 0; endround; sv_infinite_ammo 2
```


commands to toggle hud
off
```
cl_hud_telemetry_frametime_show 0; cl_hud_telemetry_ping_show 0; cl_hud_telemetry_net_misdelivery_show 0; cl_drawhud 0; cl_drawhud_force_deathnotices 0; cl_drawhud_force_radar 0; cl_drawhud_force_teamid_overhead 0; r_drawviewmodel 0; r_show_build_info false
```
on
```
cl_hud_telemetry_frametime_show 2; cl_hud_telemetry_ping_show 2; cl_hud_telemetry_net_misdelivery_show 2; cl_drawhud 1;  r_drawviewmodel 1; r_show_build_info true
```
---


# Decompilation
light_spot -> light_barn
light_omni -> light_omni2



A lot of materials and models and stuff used in maps are from the base game, and aren't available in CS2.
They can be extracted from `Counter-Strike Global Offensive\csgo\pak01_dir.vpk` using [Source2Viewer](https://github.com/ValveResourceFormat/ValveResourceFormat) (which is using [ValvePak](https://github.com/ValveResourceFormat/ValvePak), you can just use that too)
most of these should be handled by the source 2 importer, but some textures don't like it 
\¯\\\_(ツ)\_/¯ i think its mostly materals/dev/ that i've had to fix manually
I modified import_map_community.py to work better and not hard fail if it messed up with a model
[modified version of valve's import\_map\_community.py for CS2 · GitHub](https://gist.github.com/iamasink/6a663421a0ef51fadd34dd4c3b5b6fea)


# Porting maps
useful command thank you [u/FFox398](https://reddit.com/user/FFox398/)

5 points · [8 months ago](https://www.reddit.com/r/hammer/comments/1ahamgu/comment/komobtz/?utm_source=reddit&utm_medium=web2x&context=3)
> 
> You can but it is a bit tedious. I'll leave you a tutorial on how I did it but except to find problems and a lot.
> 
> The compiler goes and converts anything you want but it'll crash if it encounters an error or a material/model it cannot convert to Source 2. This wouldnt be a problem if it wasn't because THE WHOLE OPERATION CANCELS. GG Valve. Yes, if the tool finds a problem instead of ignoring it, decides to cancel the whole process.
> 
> Also the tool will also crash if if there is a custom model present in the map but not present in the origin folder. Same outcome it crashes and you have to start over.
> 
> [https://youtu.be/j20MivATR5w](https://youtu.be/j20MivATR5w)
> 
> Be patient with it. But once you get it done the result is near 1:1 to the original Source 1 map.
> 
> Also tip, do not use the map the tool converts itself from .vmf to .vmap because it'll mess up your geometry, instead launch Hammer Editor and open the VMF as you would in Source 1, it'll preserve everything and it'll convert itself to .vmap without messing up the geometry.