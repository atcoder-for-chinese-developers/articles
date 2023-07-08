---
title: "AGC001_F_translation.md"
tags: []
author: ""
created: ""
---

## 题意

给定一个 $1\sim N$ 的排列 $P$，你可以执行如下操作任意次：
- 选择两个下标 $i,j$，满足 $i < j$， $j-i \ge K$ 并且 $|P_i-P_j|=1$，然后交换 $P_i,P_j$。

求出执行若干次操作后，能得到的字典序最小的排列。

## 数据范围

- $2\le N\le 5\times 10^5$；
- $1\le K\le N-1$；
- 保证 $P$ 是 $1\sim N$ 的排列。
- 输入的数均为整数。


