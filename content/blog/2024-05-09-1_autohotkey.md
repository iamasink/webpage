---
title: Autohotkey
description: 
aliases:
  - autohotkey
  - ahk
tags:
  - ahk
draft: false
date: 2024-05-09
---
# An issue where AHK thinks a modifier key is down, even when its not
I have this code:
```ahk
Shift & CapsLock:: Send("{Blind}{Shift Up}{Delete}")
```
when Shift and CapsLock is pressed (like a modifier for capslock), it should send Delete. But! I don't want it to send the held shift too. Blind fixes this and does, kind of.
The issue is that sometimes, this hotkey gets triggered when shift *isn't* being pressed, logically (to the system at least?) nor physically.
I don't know what causes it to get stuck, it seems random?
let's try  `Shift & CapsLock:: Send("{Shift Up}{Delete}")`??
no, this doesn't release shift and sends Shift + Delete
maybe this??
`+CapsLock:: Send("{Delete}")` 
sends Shift + Delete too!!!!
so does `+CapsLock:: Send("{Blind}{Delete}")`
how?!?!?
`+CapsLock:: Send("{Blind}{Shift Up}{Delete}")`??
this seems to correctly send Delete, time will tell if it gets stuck.


I *Think* it is an issue because it is in a larger script with other things bound to capslock?
like, when using only 
```
Shift & CapsLock:: Send("{Blind}{Shift Up}{Delete}")

CapsLock::BackSpace
```
it pressing shift+capslock sends immediately, while in the main script it waits for shift to be released..

this is just really annoying and weird..
im gonna try this
and if it doesnt work then i have no idea
```
Shift & CapsLock:: {
	Send("{Blind}{Shift Up}")
	Send("{Delete}")
	Sleep(10)
	Send("{Shift Up}") ; sometimes, shift gets stuck? my hope is that this fixes that.
}
```
this doesn't even make sense though, does Shift Up even do anything??? pressing it again still does it
im so confusewd gahkdfkgjhadg

this previous thing doesn't work.

i will try changing the last send to SendInput, but i doubt that'll do anything as they should be synonymous



## **Update, solved!! solution:**
All above is wrong! It's other hotkeys that can affect this. 
example
```ahk
Send("!+{F1}")
; change to:..
Send("{Shift Down}{Alt Down}{F1}{Shift Down}{Alt Down}")
```
this should fix the issue with hotkeys like Shift & CapsLock::Delete


# multi monitor stuff
I wanted a way to be able to switch the currently enabled monitors. This seems like it should be really easy to achieve with autohotkey or even some software out there. 
Apparently im weird (wow, news to me!! /j) and this is some really obscure thing?!?!
admittedly, i came across [nirsoft multi monitor tool](http://www.nirsoft.net/utils/multi_monitor_tool.html) but REFUSED to use it because its not open source, and i just didn't wanna okay? (ok, this seems stupid to avoid but look.. i wanted foss)
after some digging i found [Monitor Profile Switcher](https://sourceforge.net/projects/monitorswitcher/) which isn't *exactly* what  I wanted, but it would work. maybe with less effort since i just have to setup the profiles i want.







# different coloured ahk icons
i created these a while ago so might as well put them somewhere :3


![[ahkocean 1.svg]]
![[ahkocean 1.ico]]

---

![[ahkorange 1.svg]]
![[ahkorange 1.ico]]

---

![[ahkred 1.svg]]
![[ahkred 1.ico]]

---

![[ahkargon 1.svg]]
![[ahkargon 1.ico]]

---

![[ahkblue 1.svg]]
![[ahkblue 1.ico]]

---

![[ahkpurple 1.svg]]
![[ahkpurple 1.ico]]

---
