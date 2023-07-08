---
title: "ABC266_Ex_solution.md"
tags: []
author: ""
created: ""
---

不是很难的题。

考虑设 $f_i$ 表示最后一个拿的球是 $i$ ，最多可以拿多少个球，那么考虑 $i$ 可以向 $j$ 转移的条件是什么，可以列一下：

$$
\begin{cases}y_i\le y_j\\t_i\le t_j\\ |x_i-x_j|+y_j-y_i\le t_j-t_i \end{cases}
$$

然后考虑如果 $t_i>t_j$，第三个等式右边 $<0$，显然不合法，因此这个条件可以扔掉。

然后考虑绝对值的意义，就是 $|a-b|=\max(a-b,b-a)$，所以可以直接拆成两个式子，然后可以得到：

$$
\begin{cases}y_i\le y_j\\ x_i-x_j+y_j-y_i\le t_j-t_i\\ x_j-x_i+y_j-y_i\le t_j-t_i \end{cases}
$$

移项一下，就可以发现本质上是一个关于 $i,j$ 的三维偏序，因此考虑 cdq。

直接先做左边，然后考虑左边转移右边的，再做右边的。注意转移完了序列需要回复到开始状态。

[code](https://atcoder.jp/contests/abc266/submissions/34489521)

也可以直接用二维线段树维护。

[code](https://atcoder.jp/contests/abc266/submissions/34262996)

