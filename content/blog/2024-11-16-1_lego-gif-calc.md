---
title: lego gif calc
description: really big lego brick
aliases: 
tags: 
date: 2024-11-16T23:21:29+00:00
---
![[Attachments/lego.gif]]
I think it's 9 bricks high on the main wall, a Lego brick is 9.6mm high (excluding studs).
Therefore on each loop, the new "brick" is 9x as high, starting at 9.6mm
So `height = 9.6*9^n`, where n is the number of times it loops.

The gif is 51 frames long, each frame has a "delay" of 6, the "delay" is 1/100th of a second
so each frame is 60ms long, so the full gif loops once every 3060ms or 3.06 seconds
in 15 minutes, this will loop 900000/3060 times = ~294 times = 
so `9.6*9^294`
`338508055594017441094756692154797964164152375705921641266824230420374689281245766351807168590497715128027784165184573903103191590136897398614972942785291493882661403040286849592835728392778574302132343693647310147312978433083418532949035401074849407931316974299738767693582823393545` mm high, or 

`~3.526 × 10^280` bricks.
or
`~3.73 × 10^261` lightyears
which is an inconceivably large number.