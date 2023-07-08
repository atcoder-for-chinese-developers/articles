---
title: "ABC271_D_solution.md"
tags: []
author: ""
created: ""
---

考虑直接 DP。设 $f_{i,j}$ 表示决定前 $i$ 张卡片以后能否到达和为 $S$ 的状态，转移的时候同时用 $p_{i,j}$ 表示当前状态由上一张牌的正面还是反面转移而来。

输出方案的时候通过 $p$ 数组一步步倒推即可。

```cpp
#include<bits/stdc++.h>
using namespace std;
int const N=105,M=10010;
int n,s,a[N],b[N],f[N][M],p[N][M];
signed main(){
	ios::sync_with_stdio(0);
	cin>>n>>s;
	for(int i=1;i<=n;i++)
		cin>>a[i]>>b[i];
	f[0][0]=1;
	for(int i=1;i<=n;i++)
		for(int j=0;j<M;j++){
			if(j>=a[i]&&f[i-1][j-a[i]])
				f[i][j]=1,p[i][j]=0;
			if(j>=b[i]&&f[i-1][j-b[i]])
				f[i][j]=1,p[i][j]=1;
		}
	if(!f[n][s])
		cout<<"No\n",exit(0);
	cout<<"Yes\n";
	string res;
	for(int i=n,j=s;i;i--){
		if(p[i][j])
			j-=b[i],res+="T";
		else
			j-=a[i],res+="H";
		if(i==1)
			assert(!j);
	}
	reverse(res.begin(),res.end());
	cout<<res<<"\n";
	return 0;
}
```

