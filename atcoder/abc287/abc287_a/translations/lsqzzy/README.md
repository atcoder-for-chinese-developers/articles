---
title: "abc287翻译"
tags: [ "模拟" ]
author: "Irena LSQ"
created: "2023-01-28"
---

## 题意  

有 $1$ 个建议， $N$ 个人。他们每个人都同意或不同意这个建议。这里， $N$ 是奇数。

第 $i$ 个( $i=1,2,\dots,N$ )人的意见用字符串 $S_i$ 表示：如果 $S_i=$ `For` 则这个人同意，如果 $S_i=$ `Against` 则这个人不同意。

请确定多数人是否同意该提案。


## 数据范围

$N$ 为 $1$ 到 $99$ 之间的奇数。

要么 $S_i=$ `For`，要么 $S_i=$ `Against`

## 输入格式
第一行一个整数 $N$。

接下来 $N$ 行，每行一个字符串，第 $i$ 行表示 $S_i$。

## 输出格式
一行一个整数，如果多数人同意输出 `Yes`，否则输出 `No`

## 样例输入 1
```
3
For
Against
For
```

## 样例输出 1
```
Yes
```

## 样例输入 2
```
5
Against
Against
For
Against
For

```

## 样例输出 2
```
No
```

## 样例输入 3
```
1
For
```

## 样例输出 3
```
Yes
```
