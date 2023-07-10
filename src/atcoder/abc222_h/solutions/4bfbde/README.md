---
title: "ABC222_H_solution.md"
tags: []
author: ""
created: ""
---

首先可以把题目的条件转化一下：

- 根和叶子必须是 $1$。
-  总共写了 $n$ 个 $1$。
- 对于每个非根的写着 $1$ 的节点，离它最近的写着 $1$ 的祖先里它的距离不超过 $2$，也就是不能有两个相邻的 $0$。

证明也比较简单，每次必须把两个非 $0$ 节点合并才可以使得操作次数为 $n-1$，因此每次把一个叶子合并上去即可，只能合并到它的父亲或者父亲的父亲。

考虑一个 dp，设

- $a_i$ 表示 $n=i$ 时的美丽二叉树的个数。
- $b_i$ 表示根为 $0$，其余条件满足的，$n=i$ 的二叉树数量。

考虑转移，容易发现

$$
b_i=2a_{i-1}+\sum_{j=1}^{i-1}a_{j}a_{i-1-j}
$$

可以发现一个 $0$ 下面不能放 $0$ 了，因此要么只有一个儿子，要么两个儿子合并。

$$
a_i=2(a_{i-1}+b_{i-1})+\sum_{j=1}^{i-1}(a_{j}+b_j)(a_{i-1-j}+b_{i-1-j})
$$

也和上面的类似，这样可以得到一个 $O(n^2)$ 的暴力了，如果会多项式的可以优化到 $O(n\log^2 n)$。

## 生成函数

为了优化上面的过程，下面引入生成函数，生成函数是一个表示一个序列的形式幂级数。

- 形式幂级数是多项式的扩展，可以拥有无限项。

对于序列 $a$，它的生成函数是

$$
A(x)=\sum_{i=0}^{\infty} a_ix^i
$$

我们定义 $[x^n]$ 表示 $x^n$ 的系数，上面的例子中，$[x^n]A(x)=a_n$。

这样定义生成函数，可以发现生成函数的乘积：

$$
A(x)B(x)=\sum_{n=0}^{\infty} x^n \sum_{i+j=n}a_ib_j
$$

回到原题，假设 $A(x),B(x)$ 表示 $a,b$ 的生成函数，容易得到：

$$
\begin{aligned}
B(x)=&2xA(x)+xA^2(x)\\
A(x)=&2x(A(x)+B(x))+x(A(x)+B(x))^2=x(1+3A(x)+A^2(x))^2
\end{aligned}
$$

这个式子本质上是枚举根的左右子树怎么放，得到这个式子后可以用多项式牛顿迭代优化到 $O(n\log n)$，但是对本题来说不重要因此不展开。

## 拉格朗日反演

拉格朗日反演是利用生成函数解决树计数问题的有力武器。

> 对于两个多项式 $F,G$，满足 $F(G(x))=x$，并且 $[x^0]F(x)=0,[x^1]F(x)\ne 0,[x^0]G(x)=0,[x^1]G(x)\ne 0$，那么
> 
> $$
 [x^n]F(x)=\frac{1}{n}[x^{n-1}] (\frac{x}{G(x)})^n
 $$

证明：先来一个引理：对于满足上述条件的 $F$，都有：

$$
[x^{-1}]F'(x)F^k(x)=[k=-1]
$$

如果 $k\ne -1$，那么 $F'(x)F^k(x)=\frac{1}{k+1}(F^{k+1}(x))'$，所以当然是 $0$。

如果 $k=1$，那么

$$
\frac{F'(x)}{F(x)}=\frac{\sum_{i=0}^{\infty} \frac{a_{i+1}}{i+1}x^i}{\sum_{i=1}^{\infty} a_ix^i}=x^{-1}\frac{\sum_{i=1}^{\infty}\frac{a_ix^{i-1}}{i}}{\sum_{i=1}^{\infty}a_ix^{i-1} }
$$

那么显然 $[x^{-1}]\frac{F'(x)}{F(x)}=1$。

回到原证明，已知

$$
F(G(x))=x
$$

那么两边分别求导。

$$
F'(G(x))G'(x)=1
$$

把 $F'(G(x))$ 展开。

$$
\sum_{i} i([x^i]F(x))G^{i-1} G'=1
$$

左右同时乘 $G^{-n}$。

$$
\sum_{i} i([x^i]F(x))G^{i-1-n} G'=G^{-n}
$$
$$
[x^{-1}]\sum_{i} i([x^i]F(x))G^{i-1-n} G'=[x^{-1}]G^{-n}
$$

此时用上面的引理，$G^{i-1-n}G'$ 只需要留下 $x^{-1}$ 项即可，也就是留下 $i=n$

$$
n[x^n]F(x)=[x^{-1}]G^{-n}
$$
$$
[x^n]F(x)=\frac{1}{n}[x^{n-1}] (\frac{x}{G(x)})^n
$$



### 例子：卡特兰数

我们知道卡特兰数 $C_n$ 的一个意义是 $n$ 个点的二叉树数量。

所以可以得到

$$
F(x)=x(F(x)+1)^2
$$

令 $G(x)=\frac{x}{(1+x)^2}$，那么$G(F(x))=x$。

直接用定理，可以得到

$$
\begin{aligned}
C_n=&\frac{1}{n}[x^{n-1}](1+x)^{2n}\\
=&\frac{1}{n}\binom{2n}{n-1}=\frac{1}{n+1}\binom{2n}{n}
\end{aligned}
$$

我们就得到了卡特兰数的通项。

回到原题，式子是：

$$
F(x)=x(1+3F(x)+F^2(x))^2
$$

那么

$$
G(x)=\frac{x}{(1+3x+x^2)^2}
$$

带入式子，得到

$$
a_n=\frac{1}{n}[x^{n-1}](1+3x+x^2)^{2n}
$$

因此直接枚举选几个 $x^2$ 就可以得到答案的式子：

$$
a_n=\frac{1}{n}\sum_{i=0}^n \binom{2n}{i}\binom{2n-i}{n-1-2i}3^{n-1-2i}
$$

[code](https://atcoder.jp/contests/abc222/submissions/35260985)

### 一些类似的题

- [CF 438E](https://codeforces.com/problemset/problem/438/E)
- [CF 1349F2](https://codeforces.com/contest/1349/problem/F2)
- [TCO19 *** (avoiding spoiler)](https://community.topcoder.com/tc?module=ProblemDetail&rd=17726&pm=15759)
- [CF 1479E](https://codeforces.com/contest/1479/problem/E)

### 扩展阅读资料

- [maspy, 形式的べき級数解説（日语）](https://maspypy.com/category/%e5%bd%a2%e5%bc%8f%e7%9a%84%e3%81%b9%e3%81%8d%e7%b4%9a%e6%95%b0%e8%a7%a3%e8%aa%ac)
 经典的入门资料。
 - [37zigen, 指数型母関数入門 （日语）)](https://37zigen.com/exponential-generating-function/)
EGF（指数型生成函数）。
- [zscoder, Generating Functions in Competitive Programming (Part 2)（英文）](https://codeforces.com/blog/entry/77551)
拉格朗日反演相关
- [Retired_MiFaFaOvO, A problem collection of ODE and differential technique（英文）](https://codeforces.com/blog/entry/76447)
- [Elegia, Athekatelan, 信息学竞赛中的生成函数计算理论框架 （中文）](https://github.com/EntropyIncreaser/ioi2021-homework/tree/master/thesis) 
看作者识内容，懂得都懂。

### 安利私货

[link](https://www.cnblogs.com/houzhiyuan/p/16169177.html)，解释了多项式计数的各种入门技巧，以及很多题目。

(by houzhiyuan)

