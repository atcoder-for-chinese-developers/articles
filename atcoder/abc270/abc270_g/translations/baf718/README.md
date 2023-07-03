---
title: "ABC270_G_translation.md"
tags: []
author: ""
created: ""
---

## 题意  

一个序列 $X$，满足 $X_0=S$。
而对于 $i\ge 1$，$X_i=(AX_{i-1}+B)\bmod P$。
求最小的 $i$ 使得 $X_i=G$，如果不存在，输出 $-1$。

## 数据范围

多组数据，$1\le T\le 100$。     
$2\le P\le 10^9$，且 $P$ 为质数。     
$0\le A,B,S,G \le P$。

