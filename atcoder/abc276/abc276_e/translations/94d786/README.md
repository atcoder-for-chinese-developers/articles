---
title: "ABC276_E_translation"
tags: []
author: "_Life_"
created: "2022.11.13"
---

### 题意

给定一个 $H$ 行 $W$ 列的网格。定义 $(i,j)(1\leq i \leq H)(1\leq j \leq W)$ 表示第 $i$ 行第 $j$ 列的格子。

每个格子都是以下三种类型之一：起点，道路或障碍。

格子 $(i,j)$ 一个字母 $C_{i,j}$ 表示。

- 如果一个格子是起点，$C_{i,j}$ 为 `S`
- 如果一个格子是道路，$C_{i,j}$ 为 `.`
- 如果一个格子是障碍，$C_{i,j}$ 为 `#`

保证有且只有一个起点。

判定是否有一条路径满足以下条件：

- 从起点出发，到起点结束
- 长度大于等于 $4$ 
- 每次水平或竖直移动到相邻的格子上
- 不经过障碍
- 不重复经过同一个格子（除了起点与终点）

更形式化的说，判定是否存在一个整数 $n$ 和格子序列 $(x_0,y_0),(x_1,y_1),\dots,(x_n,y_n)$ 满足以下条件：

- $n \leq 4$
- $C_{x_0,x_0}=C_{x_n,y_n}=$ `S`
- $\forall \ 1\leq i \leq n-1,C_{x_i,y_i}=$ `.`
- $\forall \ 1\leq i < j \leq n-1,(x_i,y_i)\neq (x_j,y_j)$
- $\forall \ 0 \leq i \leq n-1,(x_i,y_i)$ 与 $(x_{i+1},y_{i+1})$ 水平或竖直相邻。

### 数据范围

- $4\leq H \times W \leq 10^6$
- $H,W \geq 2$
- $C_{i,j} \in \{ \texttt{S} , \texttt{.} ,\texttt{\#} \}$
- 有且只有一组 $(i,j)$ 满足 $C_{i,j}=$ `S`

---

### 输入格式

第一行两个整数 $H,W$。

接下来 $H$ 行，每行 $W$ 个字符，表示 $C_{i,j}$。

### 输出格式

如果存在满足题意的路径，输出 `Yes`。否则输出 `No`。

---

### 样例输入1

```
4 4
....
#.#.
.S..
.##.
```

### 样例输出1

```
Yes
```

### 样例解释1

路径 $(3,2)\rightarrow(2,2)\rightarrow(1,2)\rightarrow(1,3)\rightarrow(1,4)\rightarrow(2,4)\rightarrow(3,4)\rightarrow(3,3)\rightarrow(3,2)$ 满足题意。

---

### 样例输入2

```
2 2
S.
.#
```

### 样例输出2

```
No
```

---

### 样例输入3

```
5 7
.#...#.
..#.#..
...S...
..#.#..
.#...#.
```

### 样例输出3

```
No
```

---