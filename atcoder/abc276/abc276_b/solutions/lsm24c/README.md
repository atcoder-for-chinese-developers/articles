---
title: "ABC276_B_solution.md"
tags: []
author: "Binary_1110011_"
created: "2022.11.16"
---

使用 $\text{vector}$ 存图（双向边），对每个点连出的点排序，再输出即可。

AC Code

```cpp
#include<bits/stdc++.h>
#define IOS ios::sync_with_stdio(false)
#define TIE cin.tie(0),cout.tie(0)
#define int long long
#define all(x) x.begin(),x.end()
using namespace std;
int n,m,u,v;
vector<int> a[200005];
signed main(){
	IOS;TIE;
	cin>>n>>m;
	while(m--){
		cin>>u>>v;
		a[u].push_back(v);
		a[v].push_back(u);
	}
	for(int i=1;i<=n;i++){
		sort(all(a[i]));
		cout<<a[i].size()<<' ';
		for(int j=0;j<a[i].size();j++) cout<<a[i][j]<<' ';
		cout<<endl;
	}
	return 0;
} 

```