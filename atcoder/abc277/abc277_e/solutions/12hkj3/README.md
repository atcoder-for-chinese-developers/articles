---
title: "ABC277_E_solution.md"
tags: []
author: "Binary_1110011_"
created: "2022.11.12"
---

考虑当成普通的 $\text{BFS}$ 求最短路来做。

不同之处在于，边是否可走与当前开关状态有关。想到，每个点在一种状态下应当只被访问一次，因为相同状态多次访问情况会变得相同。所以只需要把原先的 $vis$ 数组改成二维，记 $vis_{0/1,i}$ 表示边为 $0/1$ 状态时是否更新过 $i$。所以在 $\text{BFS}$ 的队列中也要再加入一个参数 $now$ 表示当前状态。

设初始状态为 $0$， $k.to$ 为当前队首， $k.now$ 为当前队首状态， $tmp.fl$ 为走向某一条边的初始状态， $mark_i$ 为点 $i$ 是否有开关，则有：

- 若 $k.now\oplus tmp.fl=1$，则可以不更改状态更新

- 否则，若 $mark_{k.to}=1$，则可以更改状态更新

AC Code

```cpp
#include<bits/stdc++.h>
#define IOS ios::sync_with_stdio(false)
#define TIE cin.tie(0),cout.tie(0)
#define int long long
using namespace std;
int n,m,k,s,u,v,t,ans=1e18;
bool mark[200005],vis[2][200005];
struct node{
	int to,fl;
};
vector<node> a[200005];
struct Node{
	int to,ans,now;
};
queue<Node> q;
signed main(){
	IOS;TIE;
	cin>>n>>m>>k;
	for(int i=1;i<=m;i++){
		cin>>u>>v>>t;
		a[u].push_back({v,t});
		a[v].push_back({u,t});
	}
	for(int i=1;i<=k;i++) cin>>s,mark[s]=1;
	vis[0][1]=1;
	q.push({1,0,0});
	while(q.size()){
		Node k=q.front();q.pop();
		if(k.to==n){
			cout<<k.ans<<endl;
			return 0;
		}
		for(int i=0;i<a[k.to].size();i++){
			node tmp=a[k.to][i];
			if(k.now^tmp.fl){
				if(!vis[k.now][tmp.to]){
					vis[k.now][tmp.to]=1;
					q.push({tmp.to,k.ans+1,k.now});
				}
			}
			else if(mark[k.to]){
				if(!vis[k.now^1][tmp.to]){
					vis[k.now^1][tmp.to]=1;
					q.push({tmp.to,k.ans+1,k.now^1});
				}
			}
		}
	}
	cout<<-1<<endl;
	return 0;
} 
```
