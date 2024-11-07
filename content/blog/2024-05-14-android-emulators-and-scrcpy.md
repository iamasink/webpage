---
title: Android Emulators & scrcpy
description: phone → pc
aliases: 
tags:
  - android
  - vm
  - emulation
draft: false
date: 2024-05-14
---
There are plenty of emulators for android, but they all seem to run terribly. Bluestacks, and similar apps also are riddled with ads. Why is there no way to decently emulate Android!?
It's likely that scrcpy is the best way to run it, especially with a higher end phone.
# Android-x86
[Android-x86 - Porting Android to x86](https://www.android-x86.org/) seems useful, but only goes up to Android 8.1, but if it works well would still be very nice.
There is a guide to getting it to work on VirtualBox [VirtualBox HowTo | Android-x86](https://www.android-x86.org/documentation/virtualbox.html)

I left the Video Memory at 33mb and left 3D Acceleration off.

and.. yay! 
![[Pasted image 20240512165720.png]]
Though, I doubt the performance will be great without 3D Acceleration. 
It worked fine setting the Video Memory to 128mb, but 3D Acceleration seemingly can't be enabled with the VboxSVGA adaptor.

This is cool, but probably not the best option? 
I wanted to try running minecraft but it wouldn't like it.
## Performance
UI feels pretty slow.
Geekbench 6:
Single-Core: 913
Multi-Core: 2451

comparison to my phone:
Snapdragon 888 @ 1.8GHz
Geekbench 6:
Single-Core: 1494
Multi-Core: 3556

# Scrcpy
The only issue I had with scrcpy was that my phone is 1080x2400, so theres a lot of wasted space when viewing on a standard 16:9 screen. However!
## Adjusting the screen resolution with adb
Using `adb shell wm size WxH` you can change the resolution on a device. Apparently this may cause issues on some devices, but on mine it works just fine, even changing it to above the device's native resolution.
For my device, running `adb shell wm size 1350x2400` seems to be good. It has to be ran before scrcpy is started, or it won't realise the resolution has changed (understandably). Interestingly, this allows you to see some sort of overscan?
Here is my homepage when set to 1080x1081, note the navbar
![[Pasted image 20240512185655.png]]
