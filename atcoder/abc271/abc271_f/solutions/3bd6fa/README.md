---
title: "ABC271_F_solution.md"
tags: []
author: ""
created: ""
---

meet-in-the-middle 板子题。

考虑如果直接搜索往右走还是往下走，时间复杂度为 $O(\text C^n_{2n})$，无法承受。

于是考虑我们把搜索过程分成两部分。定义 $(i,j)(i+j=n+1)$ 为中间点，在网格上表示为右上到左下的一斜列格子。

第一次搜索从 $(1,1)$ 开始向下向右走到中间点上，第二次搜索从 $(n,n)$ 开始向上向左走到中间点上，在中间点上记录到达该格路径的异或和即出现次数。

由于异或具有自反性 （$x\oplus x=0$），所以记录异或和和查询异或和使用一样的操作即可。

```cpp
#include<bits/stdc++.h>
#define int long long
using namespace std;
int const N=25;
int n,ans,a[N][N];
map<int,int>f[N];
void dfs1(int x,int y,int c){
	c^=a[x][y];
	if(x+y==n+1)
		return f[x][c]++,void();
	dfs1(x+1,y,c);
	dfs1(x,y+1,c);
}
void dfs2(int x,int y,int c){
	if(x+y==n+1)
		return ans+=f[x][c],void();
	c^=a[x][y];
	dfs2(x-1,y,c);
	dfs2(x,y-1,c);
}
signed main(){
	ios::sync_with_stdio(0);
	cin>>n;
	for(int i=1;i<=n;i++)
		for(int j=1;j<=n;j++)
			cin>>a[i][j];
	dfs1(1,1,0);
	dfs2(n,n,0);
	cout<<ans<<"\n";
}
```

