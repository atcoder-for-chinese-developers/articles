---
title: "ABC274_B_solution.md"
tags: []
author: "Binary_1110011_"
created: "2022.10.23"
---

直接用二维数组存下图形，每一列扫一遍计数。

AC Code

```cpp
#include<bits/stdc++.h>
#define IOS ios::sync_with_stdio(false)
#define TIE cin.tie(0),cout.tie(0) 
#define int long long
using namespace std;
int n,m,ans[1005];
char c[1005][1005];
signed main(){
	IOS;TIE;
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m;j++) cin>>c[i][j];
	}
	for(int i=1;i<=m;i++){
		for(int j=1;j<=n;j++){
			if(c[j][i]=='#') ans[i]++;
		}
	}
	for(int i=1;i<=m;i++) cout<<ans[i]<<' ';
	cout<<endl;
	return 0;
} 



```

