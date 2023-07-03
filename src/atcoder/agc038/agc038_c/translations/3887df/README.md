---
title: "AGC038_C_translation.md"
tags: []
author: ""
created: ""
---

## 题意

给定一个长度为 $N$ 的数列 $A_i$，下标从 $0$ 开始，求：

$$
\sum_{i=0}^{N-2}\sum_{j=i+1}^{N-1} \text{lcm}(A_i,A_j)
$$

对 $998244353$ 取模的值。

## 数据范围

- $1\le N\le 2\times 10^5$；
- $1\le A_i\le 10^6$；
- 所有输入均为正整数。

