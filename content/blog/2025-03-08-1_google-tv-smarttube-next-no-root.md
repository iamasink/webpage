---
title: "Google TV: Installing the SmartTube bridge app without root"
description: 
aliases: 
tags: 
date: 2025-03-08T06:31:19+00:00
---
When using SmartTube (aka smarttubenext) to use: 
 - the recommended videos on the google tv home,   
 - use voice search,   
 - or use the YouTube button some remotes have,   

you need to uninstall the default youtube app and replace it with the smarttube bridge app.     
unfortunately you need root or adb to do this.  
adb can be done remotely on a pc if wireless debugging is enabled.  

1. just open the settings -> system -> developer options -> enable wireless debugging.
then you can connect to the ip on screen on a pc using
```a /<local ip address>/#red
adb connect <local ip address>
```
eg
```a /192.168.0.50/#yellow
adb connect 192.168.0.50
```
\
\
then uninstall the official app completely using:
- for root(?)
```
adb shell pm uninstall com.google.android.youtube.tv
```
 - on adb
```
adb uninstall com.google.android.youtube.tv
```
\
\
2. then you can install the bridge app on smarttube under 
- Settings -> About -> 'Enable global search'.

- Or you can install the bridge apk remotely by downloading it from here 
https://kutt.it/stn_bridge_atv and running 
```a /".\ATV_SYTV_Bridge.apk"/#yellow
adb install ".\ATV_SYTV_Bridge.apk"
```
(you probably have to change the path)

- or using a downloader app (eg *Downloader by AFTVnews*)
and entering 
```
kutt.it/atv_bridge_atv
```

