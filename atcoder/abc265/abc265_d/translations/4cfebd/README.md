---
title: "ABC265_D_translation.md"
tags: []
author: ""
created: ""
---

## 题意

有一个长度为 $N$ 的数列$ A=(A_0,\ldots,A_{N-1})
$。

现在请求你判断是否存在一个四元组 $(x,y,z,w)$ 满足以下条件:

- $0 \leq x < y < z < w \leq N$
- $A_x + A_{x+1} + \ldots + A_{y-1} = P$
- $A_y + A_{y+1} + \ldots + A_{z-1} = Q$
- $A_z + A_{z+1} + \ldots + A_{w-1} = R$

## 数据范围

- $3≤N≤2×10^5$
- $1 \leq A_i \leq 10^9$
- $1 \leq P,Q,R \leq 10^{15}$
- 所有读入的数值都是整数。

