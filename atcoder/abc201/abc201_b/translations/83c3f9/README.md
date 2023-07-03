---
title: "ABC201_B_translation.md"
tags: []
author: ""
created: ""
---

## 题意

有 $N$ 座山，第 $i$ 座山名称为 $S_i$，高度为 $T_i$。      
输出第二高的山峰的名称。

## 数据范围

$1\le N\le 1000$。    
$1\le \mid S_i\mid \le 15$。    
$1\le T_i\le 10^5$。     
$S_i,T_i$ 互不相同。     
$S_i$ 只包含大小写英文字母和数字。     
$N,T_i$ 都是整数。    

## 输入格式

第一行一个整数 $N$。
接下来 $N$ 行，每行一个字符串，然后一个整数，表示 $S_i,T_i$。
          
## 输出格式

一行，第二高峰的名称。

## 样例

### 样例输入1
```
3
Everest 8849
K2 8611
Kangchenjunga 8586

```

### 样例输出1
```
K2
```

### 样例输入2
```
4
Kita 3193
Aino 3189
Fuji 3776
Okuhotaka 3190
```

### 样例输出2
```
Kita
```

### 样例输入3
```
4
QCFium 2846
chokudai 2992
kyoprofriends 2432
penguinman 2390
```

### 样例输出3
```
QCFium
```

