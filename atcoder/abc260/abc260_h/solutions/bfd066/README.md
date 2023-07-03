---
title: "ABC260_Ex_solution.md"
tags: []
author: ""
created: ""
---

第一印象是题面看上去不是很复杂，但是却没有什么可以切入的地方。

显然无论如何都不可能直接枚举每一种排列方案，因为有 $n!$ 种。尝试求贡献，令 $A_i$ 表示有多少种（排列）方案分值为 $i$，状态只有 $n$ 个。问题就变成了两部分：求 $A$；通过 $A$ 快速求出 $m$ 个答案。

## 容斥原理

令 $p_i$ 表示有多少种排列方案有 $i$ 对相邻的球上面的数相同，$q_i$ 表示有多少种排列方案有**至少** $i$ 对相邻的球上面的数相同。

根据定义，可以用 $p$ 表示 $q$：
$$
q_i=\sum_{l=i}^{n-1}\binom{l}{i}p_l
$$
进行二项式反演可得：
$$
\begin{align}
p_i&=\sum_{l=i}^{n-1}(-1)^{l-i}\binom{l}{i}q_l\\
&={\sum_{l=i}^{n-1}((-1)^{l-i}(l-i)!)(l!q_l)\over i!}
\end{align}
$$


预处理出 $p_0(i)=(-1)^ii!$ 和 $p_1(i)=q_{n-i}(n-i)!$，那么 $p$ 可以看作 $p_0$ 和 $p_1$ 的卷积，可以在 $\Theta(n \log n)$ 的时间内算出来，前提是要把 $q$ 算出来。

~~于是便把一个比较难求的问题变成了另一个比较难求的问题~~

## 指数生成函数（EGF）

先不区分标有相同数的小球（设为 $q'$）。将标有相同的数的小球放到一块去，设标有 $c$ 的小球有 $m_c$ 个，其中钦定 $k_c$ 对相邻，则有 $\binom {m_c-1}{k_c}$ 种选法，设为 $a_{c,k}$。确定了相邻的位置，可以将钦定相邻的小球捆绑在一起，即 $m_c-k_c$ 个捆绑段，则：
$$
q'_i=\sum_{k_1,k_2,\dots,k_n,\sum_ck_c=i}\Bigg(\binom {n-i}{m_1-k_1,m_2-k_2,\dots,m_n-k_n}\prod_ca_{c,k}\Bigg)
$$
令 $r_0=0,r_i=q'_{n-i}(i\ge1)$，可以将原式化简：
$$
r_i=\sum_{k_1,k_2,\dots,k_n,\sum_ck_c=i}\Bigg(\binom i {k_1,k_2,\dots,k_n}\prod_ca_{c,k}\Bigg)
$$
这个和 EGF 的乘法形式的系数很像，具体来说，令 $g_c(x)=\sum_{k=0}^{m_c}\frac {a_{c,k}} {k!}x^k$.
$$
\prod_c g_c=\sum_{i=0}^{\infty}\Bigg(\sum_{k_1,k_2,\dots,k_n,\sum_ck_c=i}\binom i{k_1,k_2,\dots,k_n}\prod_c a_{c,k}\Bigg){x^i\over i!}
$$
可以看出，$r_i=i!\times[x^i]\prod_cg_c$。

$g_c$ 的系数很容易求，累乘的过程可以通过归并的方法高效地算出，时间复杂度为 $\Theta(n \log^2n)$。

由于 $q'$ 是不关心标有相同的数的小球的顺序的，因此还要再乘上 $\prod_c m_c!$ 才是 $q$。然后能用上面提到的方法算出 $p$，根据定义，$A_i=p_{n-i-1}$，我们终于完成了做法的前半部分。

## 普通生成函数（OGF）

我一开始看完求 $A$ 的部分后，心想终于结束了，直接 $\Theta(n)$ 计算即可，完全没有想起是要求 $m$ 个值。显然对于每个 $k\in[1,m]$ 来说，答案可以表示为 $F(k)=\sum_{i=0}^{n-1} i^kA_i$，但是不同的 $k$ 没啥办法直接递推啊。此时便需要考虑再次使用生成函数，将 $F(k)$ 转化为某一函数的第 $k$ 项系数，如果能求出这个函数，把一次项到 $m$ 次项拿出来就可以得到答案。

令 $f(x)=\sum_{i=0}^\infty F(i)x^i$，则
$$
\begin{align}
f(x)&=\sum_{i=0}^\infty F(i)x^i\\
&=\sum_{i=0}^\infty \bigg(\sum_{k=0}^{n-1}k^iA_k\bigg)x^i\\
&=\sum_{k=0}^{n-1}A_k\bigg(\sum_{i=0}^\infty k^ix^i\bigg)\\
&=\sum_{k=0}^{n-1}{A_k\over1-kx}
\end{align}
$$
同样是 $n$ 个多项式相加的结果，因此仍然可以用上面所说的归并思路在 $\Theta(n\log^2n)$ 的运算量内完成，由于是一个分式，所以要用到多项式求逆。

最后，终于把这道看似很简洁的题目做出来了，时间复杂度为 $\Theta(n \log^2n)$。虽然说目前人均代码量都在4k+，但是大多数地方实现起来都不难，我交了将近 10 次才通过，原因全部是因为最后多项式求逆这一块的问题，可能是因为以前没有写过，特此记录一下。

## 多项式求逆

给定多项式 $f(x)$，求多项式 $f^{-1}(x)$，使得 $f(x)\times f^{-1}(x)\equiv1(\bmod x^k)$.

可以肯定的一点是，如同整数在模意义下才存在逆元，多项式求逆也一定是在模 $x^k$ 意义下进行的。

当 $k=1$ 时，$f^{-1}(x)$ 就是 $[x^0]f(x)$ 的逆元。

假设现在已经求出了模 $x^{\lceil \frac k 2\rceil}$ 意义下的逆元 $f_0^{-1}(x)$，如何才能得到 $f^{-1}(x)$？首先有以下等式成立：
$$
\begin{aligned}
f(x)f_0^{-1}(x)\equiv&1\pmod{x^{\lceil \frac k 2\rceil}}\\
f(x)f^{-1}(x)\equiv&1\pmod{\bmod x^{\lceil \frac k 2\rceil}}\\
f_0^{-1}(x)-f^{-1}x\equiv&0\pmod{\bmod x^{\lceil \frac k 2\rceil}}
\end{aligned}
$$
两边平方可得：
$$
f_0^{-2}(x)-2f_0^{-1}(x)f^{-1}(x)+f^{-2}(x)\equiv0(\bmod x^k)
$$
两边同乘 $f(x)$ 并移项可得：
$$
f^{-1}(x)=2f_0^{-1}(x)-(f_0^{-1}(x))^2f(x)
$$
因此每次原问题会被归化成一个完全相同的子问题，数据规模为一半，因此时间复杂度为 $\Theta(k\log^2k)$

看了一下别人的代码，发现可以在最后求 $f^{-1}(x)$ 时候将 $f_0^{-1}(x),f(x)$ 先化为点值形式去做运算，最后再 DFT 回来，而不是在每次都做多项式乘法。这样可以减少一半的常数。

此外我在实现的时候还发现一个问题，初始的多项式 $x$ 长度是 $O(m)$ 的，每次做乘法都会把长度增倍，但是多出来的长度是不会用上的，记录下来反而会造成数组越界，可以在每次做乘法时进行判断，求 $f^{-1}(x)$ 时只保留前 $k$ 项，我一开始没有很好地处理这个问题，导致一直无法通过较大的数据。

(-by shmilyty)
