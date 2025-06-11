---
title: Troubleshooting my PC freezing
description: 
aliases: 
tags: []
draft: false
date: 2024-09-19
---
This is pretty much just a log as I slowly lose my sanity to troubleshooting this crash..
My memory sucks so it helps to have all the information here


I updated to `2024-09 Cumulative Update for Windows 11 Version 23H2 for x64-based Systems (KB5043076)` on 2024-09-11 with no issues. Until..
##### 2024-09-19 ~17:30
Unresponsive after being afk, left on desktop
(i don't think I had any issue before this but I might have? im not really sure)
##### ~21:30
Froze while watching youtube - audio had minor glitches then kept playing but could not pause it or otherwise interact. I have to hold down the power button to reboot, nothing else works.
The last error in Event Viewer (after is info for system start):
> Log Name:      System
> Source:        nvlddmkm
> Date:          19/09/2024 21:27:56
> Event ID:      153
> Task Category: None
> Level:         Error
> Keywords:      Classic
> User:          N/A
> Computer:      DESKTOP-QO05OVK
> Description:
> The description for Event ID 153 from source nvlddmkm cannot be found. Either the component that raises this event is not installed on your local computer or the installation is corrupted. You can install or repair the component on the local computer.
> 
> If the event originated on another computer, the display information had to be saved with the event.
> 
> The following information was included with the event: 
> 
> \Device\000000fb
> Error occurred on GPUID: 100
> 
> The message resource is present but the message was not found in the message table

A previous warning says
> Log Name:      System
> Source:        Display
> Date:          19/09/2024 21:27:21
> Event ID:      4101
> Task Category: None
> Level:         Warning
> Keywords:      Classic
> User:          N/A
> Computer:      DESKTOP-QO05OVK
> Description:
> Display driver nvlddmkm stopped responding and has successfully recovered.

I am using Nvidia Game Ready Driver 560.94. I will now update to 561.09 so hopefully this fixes it.

I used to have this (or a similar) issue before, many years ago. It would usually occur with more demanding games - specifically I remember it often happening on vrchat. I know it happened after at least Feb 2022
I'm not too sure what fixed it eventually, possibly after changing some hardware or a full windows reset?

##### 22:12:30
Froze again while watching youtube, audio did the same glitch thing.
Audio played for about a minute before stopping (I don't think i waited this long previously)
A discord message that was unread on my pc immediately went through to notify my phone.
From 22:06 to 22:14 there was no system information in Event Viewer, the only indication something happened is the Kernel-General boot information. (at 22:14:12)
There were however many Application errors, the latest before boot was 22:13:09, but I don't think its particularly relevant as it has been occurring continuously for a long while, even before this issue started happening. 

Heres the error anyway
> Log Name:      Application
> Source:        .NET Runtime
> Date:          19/09/2024 22:13:09
> Event ID:      1000
> Task Category: None
> Level:         Error
> Keywords:      Classic
> User:          N/A
> Computer:      DESKTOP-QO05OVK
> Description:
> Category: YUR.Fit.Windows.WindowsBtLeHrmProvider
> EventId: 0
> 
> Exception starting scan for devices
> 
> Exception: 
> System.Exception: The device is not ready for use. (Exception from HRESULT: 0x800710DF)
>    at Windows.Devices.Bluetooth.Advertisement.BluetoothLEAdvertisementWatcher.Start()
>    at YUR.Fit.Windows.WindowsBtLeHrmProvider.StartDeviceWatcher()
>    at YUR.Fit.Windows.WindowsBtLeHrmProvider.\<StartDeviceScan>d__35.MoveNext()

It might be seeming like its time for a Windows reset...
I also created a page with my [[2024-09-19-1_full-pc-specs|Full PC specs]]
but also here:
> [!NOTE]- PC Specs
> PCPartPicker Part List: https://uk.pcpartpicker.com/list/gLfbFs
> 
> CPU: Intel Core i7-9700K 3.6 GHz 8-Core Processor  (£153.99 @ Overclockers.co.uk) 
> CPU Cooler: Deepcool GAMMAXX 400 74.34 CFM CPU Cooler 
> Motherboard: Gigabyte Z390 M GAMING Micro ATX LGA1151 Motherboard  (£125.59 @ Amazon UK) 
> Memory: Corsair Vengeance RGB Pro SL 32 GB (2 x 16 GB) DDR4-3600 CL18 Memory  (£73.98 @ Amazon UK) 
> Storage: Western Digital Blue 2 TB 2.5" Solid State Drive  (£250.60 @ Amazon UK) 
> Storage: Western Digital WD_Black SN850X 2 TB M.2-2280 PCIe 4.0 X4 NVME Solid State Drive  (£134.99 @ Amazon UK) 
> Storage: Seagate BarraCuda 1 TB 3.5" 7200 RPM Internal Hard Drive  (£49.98 @ EE Store) 
> Video Card: MSI VENTUS OC GeForce RTX 2070 SUPER 8 GB Video Card 
> Case: Corsair 5000D AIRFLOW ATX Mid Tower Case  (£138.99 @ AWD-IT) 
> Power Supply: RIOTORO ENIGMA G2 650 W 80+ Gold Certified Fully Modular ATX Power Supply 
> Monitor: Samsung Odyssey G7 27.0" 2560 x 1440 240 Hz Curved Monitor 
> Monitor: BenQ MOBIUZ EX2710U 27.0" 3840 x 2160 144 Hz Monitor  (£493.97 @ Amazon UK) 
> Keyboard: Wooting Two HE RGB Wired Gaming Keyboard 
> Mouse: Logitech G502 LIGHTSPEED Wireless Optical Mouse 
> Headphones: SteelSeries Arctis 9  Headset  (£488.41 @ Amazon UK) 
> Total: £1910.50
> Prices include shipping, taxes, and discounts when available
> Generated by PCPartPicker 2024-09-19 23:10 BST+0100


##### 23:34
No issues since last crash. I am thinking of some dodgy software and drivers I installed for a very old USB device on the 17th. I will use system restore point (for the first time ever!!) to before this was installed, even though I uninstalled it, it could be causing some issue idk. I hope this fixes it.
I only remembered restore points exist after i looked at my files with wiztree and saw like 50gigs being used by them lol

![Pasted image 20240919235015.png](Attachments/Pasted%20image%2020240919235015.png)

##### 00:59
Well that took like an hour but my PC booted fine so we'll see if the issue persists.
I got some windows 8 style popups saying "This app cant open" for Twinkle Tray, Eartrumpet and something called Dev diagnostics? I seem to be able to open them fine, maybe just some startup issue.
I remember back years ago when I had a similar issue, I think my fans would ramp up to full speed and that's how I'd know it crashed. I don't think that's happening here, but it could be different because I have different fans and use FanControl now which I don't think I did back then.

note that the restore also reverted my nvidia driver upgrade so like idk just saying

moving my cursor in a circle it would look like its hitching and just moving it felt off in general
it feels fine after a restart.


##### 2024-09-21
well my pc hasn't crashed since i did the restore. yay!!!


##### 20:04
i shouldn't have said anything..
I opened Satisfactory and it was fine but then after it being open for a few minutes just on the menu screen the game crashed then a few seconds later my monitors turned off* but I was still in discord call and then a while later the audio went quiet but like i couldnt be heard from earlier than that
\* which is a slightly different issue to before, where my displays would freeze and that would also happen on low performance stuff even when idle.

##### 2024-09-22
game froze then screens turned off for a moment
happened again almost immediately after restarting
no audio quickly and mic bugged
ran ddu, still happens
tried driver update

##### 2024-09-28
i have no idea what the issue is. some days its fine sometimes i crash once or twice then its fine i have actually no idea. i think it could be some power related thing??? maybe temperature or overclock unstableness/??? i hate this.

##### 2024-10-20
Well it hasn't happened in a while so hopefully its fixed ¯\\\_(ツ)\_/¯
I *think* its something to do with power, it seemed to happen if I had my fan running..
Which might make sense because I have like too much stuff on one plug socket

##### 2024-11-03
Happened while playing satisfactory and watching a youtube video on my other monitor. Sigh.

##### 2025-01-01
great way to start off the year, crashed playing a random unity game from itch 


##### 2025-01-17
crashed on fortnite lobby lol



##### 2025-05-27
crashed playing planet crafter

actually doing testing for once..
running OCCT Power stbility test, i get lots of gpu errors
```
00:01:05 3D Adaptive - 785808 error(s) found ( GPU #0 - NVIDIA GeForce RTX 2070 SUPER )
00:01:06 3D Adaptive - 785808 error(s) found ( GPU #0 - NVIDIA GeForce RTX 2070 SUPER )
```
idk


##### 2025-06-05
i finally bought a new power supply (CORSAIR RM850e 2025)
which i now realise became £15 cheaper immediately after i bought it lol
but anyway as of 2025-06-11, i haven't had any crashes like previously (touch wood)
but of course my pc still has issues- 
my monitors don't like waking up from sleep
and sometimes windows just wont start and itll get stuck on the post screen
¯\\\_(ツ)\_/¯