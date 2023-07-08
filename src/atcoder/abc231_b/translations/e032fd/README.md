---
title: "ABC231_B_translation.md"
tags: []
author: ""
created: ""
---

## 题意

$N$ 个人投票，第 $i$ 个人投给 $S_i$，求得票最多的人的名字（输入保证有且仅有一个人得票最多）。

## 数据范围

- $1 \le N \le 100$
- $S_i$ 为一个仅由小写字母组成的长度为 $1$ 到 $10$（包含 $1$ 和 $10$）的字符串。
- $N$ 为整数。
- 保证有且仅有一个人得票最多。 

## 输入格式

第一行一个正整数 $N$ 表示投票人数。  
接下来 $N$ 行每行一个字符串 $S_i$ 表示第 $i$ 个人投给谁。

## 输出格式

输出一行一个字符串表示得票最多的人的名字。

## 样例

### 样例输入1

```plain
5
snuke
snuke
takahashi
takahashi
takahashi
```

### 样例输出1

```plain
takahashi
```

### 样例解释1

`takahashi` 获得 $3$ 票，`snuke` 获得 $2$ 票，所以应该输出 `takahashi`。

### 样例输入2

```plain
5
takahashi
takahashi
aoki
takahashi
snuke
```

### 样例输出2

```plain
takahashi
```

### 样例输入3

```plain
1
a
```

### 样例输出3

```plain
a
```

