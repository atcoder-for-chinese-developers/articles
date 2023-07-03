---
title: "ABC271_B_solution.md"
tags: []
author: ""
created: ""
---

直接开 $N\times \max L$ 的二维数组太占空间了，于是考虑使用变长数组，可用 `std::vector` 实现。

```cpp
#include<bits/stdc++.h>
using namespace std;
int const N=200010;
int n,q;
vector<int>a[N];
int main(){
	ios::sync_with_stdio(0);
	cin>>n>>q;
	for(int i=1,l;i<=n;i++){
		cin>>l,a[i].resize(l+1);
		for(int j=1;j<=l;j++)
			cin>>a[i][j];
	}
	for(int x,y;q--;)
		cin>>x>>y,cout<<a[x][y]<<"\n";
}
```

