---
title: "ABC211_C_translation.md"
tags: []
author: ""
created: ""
---

## 题意

给定一个字符串 $S$。

其中有多少个子序列为 `chokudai`？

输出答案 $\bmod (10^9+7)$ 的值。

## 数据范围

$8\le \mid S\mid \le 10^5$，且 $S$ 只包含小写英文字母。

## 输入格式

一行一个字符串 $S$。

## 输出格式

一行，一个整数，表示答案 $\bmod (10^9+7)$ 后的答案。

## 样例

### 样例输入 1

```
chchokudai
```

### 样例输出 1

```
3
```

### 样例输入 2

```
atcoderrr
```

### 样例输出 2

```
0
```

### 样例输入 3

```
chokudaichokudaichokudai
```

### 样例输出 3

```
45
```

## 样例解释

对于样例 1，合法的方案：

- <u>ch</u>ch<u>okudai</u> 
- <u>c</u>hc<u>hokudai</u>
- ch<u>chokudai</u>


