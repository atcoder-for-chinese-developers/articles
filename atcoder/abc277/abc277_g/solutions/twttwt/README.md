---
title: "ABC277_G_solution.md.md"
tags: []
author: "Acfboy"
created: "2022.11.13 15:28"
---

一个显然的 $\Theta(n^3)$ 做法是对所有 $i, j, k$ 求走了 $i$ 次到达 $j$ 等级为 $k$ 的概率。状态数 $n^3$ 不行，考虑怎么把 $k$ 这一维去掉。  

设某个时刻到达某个点的等级为 $1$ 的概率为 $a$，等级为 $2$ 的概率为 $b$，以此类推，那么这个时刻这个点的贡献是 $a + 4b + 9c + \dots$，如果遇上了一个让其等级提升的点，则贡献变成了 $4 a + 9b + 16c + \dots$，再加上这个时刻走到这个点等级为 $0$ 的概率。  

贡献增加了 $3a + 5b + 7c + \dots$（因为 $(i + 1)^2 - i^2 = 2i + 1$），如果能维护这个东西就能维护贡献了。  
接着考虑等级提升时这个东西怎么变化，即增加了 $2(a + b + c + \dots)$。  

那么维护 $a + b + c + \dots, a + 3b + 5c + \dots, a + 4b + 9c + \dots$ 的值就行了。

```cpp
void main() {
    std::cin >> n >> m >> k;
    for (int i = 1, x, y; i <= m; i++) {
        std::cin >> x >> y;
        g[x].push_back(y), g[y].push_back(x);
    }
    for (int i = 1; i <= n; i++) std::cin >> c[i];
    zro[0][1] = 1;
    for (int i = 1; i <= n; i++) ind[i] = Pow(g[i].size(), P - 2);
    for (int i = 1; i <= k; i++) 
        for (int u = 1; u <= n; u++)
            for (int v : g[u]) 
                if (c[u] || (i == 1 && u == 1)) 
                    add(zro[i][v], 1ll * zro[i - 1][u] * ind[u] % P);
    for (int i = 1; i <= k; i++) {
        for (int u = 1; u <= n; u++)
            for (int v : g[u]) {
                add(sm[i][v], 1ll * sm[i - 1][u] * ind[u] % P);
                add(ts[i][v], 1ll * ts[i - 1][u] * ind[u] % P);
                add(sq[i][v], 1ll * sq[i - 1][u] * ind[u] % P);
            }
        for (int j = 1; j <= n; j++)
            if (c[j]) add(ans, 1ll * sq[i][j] % P);
            else {
                add(ts[i][j], 2ll * sm[i][j] % P);
                add(ts[i][j], zro[i][j]);
                add(sq[i][j], ts[i][j]);
                add(sm[i][j], zro[i][j]);
            }
    }
    std::cout << ans;
}
```
