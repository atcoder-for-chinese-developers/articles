---
title: "ABC216_B_translation.md"
tags: []
author: ""
created: ""
---

### 题意

有 $N$ 个人，第 $i$ 个人的姓为 $S_i$ ，名为 $T_i$ 。

请你判断是否存在两个人使得他们的姓和名都相同，即是否存在一对 $(i,j)$ 使得 $S_i=S_j$ 且 $T_i=T_j$ 。

### 数据范围

- $2 \le N \le 1000$
- $N$ 是整数。
- 每一个 $S_i$ 或 $T_i$ 都是一个长度在 $1 \sim 10$ 之间（含）的由小写字母组成的字符串。

---

### 输入格式

输入第一行一个整数 $N$ 表示人数。

接下来 $N$ 行每行两个字符串 $S_i,T_i$ 表示第 $i$ 个人的姓氏和名字。

### 输出格式

如果存在两个同名同姓的人则输出 `Yes`，否则输出 `No`。

---

### 样例输入1

```
3
tanaka taro
sato hanako
tanaka taro

```



### 样例输出1

```
Yes

```



### 样例解释1

第 $1$ 和 $3$ 个人同名同姓。

---

### 样例输入2

```
3
saito ichiro
saito jiro
saito saburo

```



### 样例输出2

```
No

```



### 样例解释2

没有两个人同名同姓。



---

### 样例输入3

```
4
sypdgidop bkseq
bajsqz hh
ozjekw mcybmtt
qfeysvw dbo

```



### 样例输出3

```
No

```


