---
title: "ABC271_Ex_solution.md"
tags: []
author: ""
created: ""
---

考虑一个事实：两个不共线的向量 $\vec i,\vec j$ 可以把平面内的任意一个向量表示成 $x\vec i+y\vec j$ 的形式，其中 $x,y\in\mathbb R$。

回到本题中，这里我们只能取 $x,y\in \mathbb N$，所以表示的向量集合会有变化：只能表示出这两个向量夹角内的向量。

但是有一种特殊情况，形如：$\vec i=(1,1),\vec j=(-1,1),G=(0,3)$。这个时候会解得 $x=y=1.5$，不是整数，所以需要加上一个长度为 $1$ 的向量来补齐，比如 $(0,1)$。

综上，满足条件的情况一共有三种：

- 只用一种向量表示。
- 只用两种不共线的向量表示。
- 用两种长度为 $\sqrt 2$，夹角为 $90^\circ$ 的向量，再加上一个长度为 $1$ 的向量来补齐。

剩下的只需要解个方程就好了。

```cpp
#include<bits/stdc++.h>
#define int long long
using namespace std;
int const INF=0x3f3f3f3f3f3f3f3fll,dx[]={1,1,0,-1,-1,-1,0,1},dy[]={0,1,1,1,0,-1,-1,-1};
int t,x,y;
string s;
int solve(int i,int j,int x,int y){
	if(~s[i]&1||~s[j]&1||j==i+4||(x*dy[j]-y*dx[j])%(dx[i]*dy[j]-dy[i]*dx[j])||
		(x*dy[i]-y*dx[i])%(dy[i]*dx[j]-dx[i]*dy[j]))
		return INF;
	int a=(x*dy[j]-y*dx[j])/(dx[i]*dy[j]-dy[i]*dx[j]),
		b=(x*dy[i]-y*dx[i])/(dy[i]*dx[j]-dx[i]*dy[j]);
	return a<0||b<0?INF:a+b;
}
signed main(){
	ios::sync_with_stdio(0);
	for(cin>>t;t--;){
		cin>>x>>y>>s;
		if(!x&&!y){
			cout<<"0\n";
			continue;
		}
		int res=INF;
		for(int i=0;i<8;i++)
			if(s[i]&1){
				int k=dx[i]?x/dx[i]:y/dy[i];
				if(k<0||k*dx[i]!=x||k*dy[i]!=y)
					continue;
				res=min(res,k);
			}
		for(int i=0;i<8;i++)
			for(int j=i+1;j<8;j++){
				res=min(res,solve(i,j,x,y));
				for(int t=0;t<8;t+=2)
					if(s[t]&1)
						res=min(res,solve(i,j,x-dx[t],y-dy[t])+1);
			}
		cout<<(res<INF?res:-1)<<"\n";
	}
}
```

