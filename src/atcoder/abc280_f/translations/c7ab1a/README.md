---
title: "ABC280F"
tags: []
author: "reechee"
created: "2022-12-07 09:21:10"
---

## 题意

有 $N$ 个从 $1$ 到 $N$ 编号的点和 $M$ 条边。

第 $i$ 条边连接着 $A_i$ 和 $B_i$，对于边权有以下规定：

- 若从 $A_i$ 走向 $B_i$，则边权为 $C_i$，若从 $B_i$ 走向 $A_i$，则边权为 $-C_i$。

有 $Q$ 次询问，每次询问给出两个参数 $X_i,Y_i$，求出从 $X_i$ 走到 $Y_i$ 的最长路。

若无法从 $X_i$ 走到 $Y_i$ 则输出 `nan`，若结果可以无限大则输出 `inf`。

## 数据范围

- $2 \leq N \leq 10^5$

- $0 \leq M \leq 10^5$

- $1 \leq Q \leq 10^5$

- $1 \leq A_i,B_i,X_i,Y_i \leq N$

- $0 \leq C_i \leq 10^9$

- 所有输入均为整数。

## 输入格式

第一行输入三个整数 $N,M,Q$。

在接下来的 $M$ 行中每行三个整数 $A_i,B_i,C_i$。

再在接下来的 $Q$ 行中每行两个正整数 $X_i,Y_i$。

## 输出格式

对于每次询问输出结果。

## 样例

### 输入样例 #1

```
5 5 3
1 2 1
1 2 2
3 4 1
4 5 1
3 5 2
5 3
1 2
3 1
```

### 输出样例 #1

```
-2
inf
nan
```

### 样例解释 #1

对于第一次询问，可以使用第 $5$ 条路从 $5$ 走向 $3$，结果为 $-2$，不存在比其更优的答案。

对于第二次询问，可以使用第 $2$ 条路从 $1$ 走向 $2$，当前结果为 $2$，再使用第 $1$ 条路从 $2$ 走向 $1$，当前结果为 $1$……以此类推，可以使结果无限大。

对于第三次询问，无法从 $3$ 走向 $1$。

### 输入样例 #2

```
2 1 1
1 1 1
1 1
```

### 输出样例 #2

```
inf
```

### 输入样例 #3

```
9 7 5
3 1 4
1 5 9
2 6 5
3 5 8
9 7 9
3 2 3
8 4 6
2 6
4 3
3 8
3 2
7 9
```

### 输出样例 #3

```
inf
nan
nan
inf
-9
```