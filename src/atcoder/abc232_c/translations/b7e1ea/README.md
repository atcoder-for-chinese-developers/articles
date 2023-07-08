---
title: "ABC232_C_translation.md"
tags: []
author: ""
created: ""
---

## 题意

给你两张无重边无自环的由 $N$ 个点 $M$ 条边组成的无向图，问他们是否同构。

这里同构定义为：  
- 存在一个由 $1 \sim N$ 组成的排列 $P$。
- 第一张图中 $i,j$ 之间有边当且仅当第二张图中 $P_i,P_j$ 有边。

如果两张图同构则输出 `Yes`，否则输出 `No`。

## 数据范围

设第一张图中第 $i$ 条边为 $(A_i,B_i)$，第二张图中第 $i$ 条边为 $(C_i,D_i)$。

- $1 \le N \le 8$
- $0 \le M \le \dfrac{N(N-1)}{2}$
- $1 \le A_i < B_i \le N (1 \le i \le M)$
- $(A_i,B_i) \not= (A_j,B_j) (i \not= j)$
- $1 \le C_i < D_i \le N (1 \le i \le M)$
- $(C_i,D_i) \not= (C_j,D_j) (i \not= j)$

## 输入格式

第一行两个整数 $N,M$ 表示图的点数和边数。  
接下来 $M$ 行每行两个正整数 $A_i,B_i$ 表示第一张图中的一条边。  
接下来 $M$ 行每行两个正整数 $C_i,D_i$ 表示第二张图中的一条边。

## 输出格式

如果两张图同构则输出 `Yes`，否则输出 `No`。

## 样例

### 样例输入1

```plain
4 4
1 2
1 3
1 4
3 4
1 3
1 4
2 3
3 4

```

### 样例输出1

```plain
Yes

```

### 样例解释1

两张图分别长这样：
![](https://img.atcoder.jp/ghi/abc232c_yes2.jpg)

### 样例输入2

```plain
5 6
1 2
1 3
1 4
3 4
3 5
4 5
1 2
1 3
1 4
1 5
3 5
4 5

```

### 样例输出2

```plain
No

```

### 样例解释2

两张图分别长这样：
![](https://img.atcoder.jp/ghi/abc232c_no.jpg)

### 样例输入3

```plain
8 0

```

### 样例输出3

```plain
Yes

```

