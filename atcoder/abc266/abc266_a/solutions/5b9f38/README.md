---
title: "ABC266_A_solution.md"
tags: []
author: ""
created: ""
---

根据题意，输出 $S$ 的第 $\left\lceil\frac{size}2 \right\rceil$ 位即可。

$size$ 为 $S$ 的位数。

```cpp
#include<bits/stdc++.h>
using namespace std;
string a;
signed main(){
    cin>>a;
    cout<<a[(a.s)]<<'\n';
    return 0;
}
```


