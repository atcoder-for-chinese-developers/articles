---
title: "ABC216_E_translation.md"
tags: []
author: ""
created: ""
---

### 题意
有 $n$ 个游乐场，每个游乐场有个初始欢乐值 $a_i$，每游玩一次会获得 $a_i$ 的满意度，但是游玩后这个游乐场的欢乐值会减少 $1$。你现在可以去玩最多 $k$ 次游乐场，问获得的最大满意度是多少。
### 数据范围
$1\le n\le10^5$  
$1\le k,a_i\le2\times10^9$

---
### 输入格式
第一行 $2$ 个整数 $n,k$。  
第二行 $n$ 个整数 $a_i$。  
### 输出格式
一个整数表示获得的最大满意度。

---
### 样例输入1
```
3 5
100 50 102
```
### 样例输出1
```
502
```
### 样例解释1
$1$ 号游乐场玩 $2$ 次，$3$ 号游乐场玩 $3$ 次可以获得 $(100+99)+(102+101+100)=502$ 的满意度。没有获得大于等于 $503$ 满意度的方案，所以答案是 $502$。


---
### 样例输入2
```
2 2021
2 3
```
### 样例输出2
```
9
```
### 样例解释2
游玩次数可以少于 $k$ 次。
