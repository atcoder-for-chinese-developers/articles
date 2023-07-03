---
title: "ABC271_C_solution.md"
tags: []
author: ""
created: ""
---

看到题目考虑二分答案，假设当前需要检查是否能读到第 $k$ 本，只需要把编号大于 $k$ 的或者重复的交换掉即可。

```cpp
#include<bits/stdc++.h>
#define int long long
using namespace std;
int const N=3000010;
int n,ans,a[N];
int check(int x){
	int c=0;
	for(int i=1;i<=n;i++)
		c+=1+(a[i-1]<a[i]&&a[i]<=x);
	return c/2>=x;
}
signed main(){
	ios::sync_with_stdio(0);
	cin>>n;
	for(int i=1;i<=n;i++)
		cin>>a[i];
	sort(a+1,a+1+n);
	int l=-1,r=n+1;
	while(l<r-1){
		int mid=(l+r)>>1;
		if(check(mid))l=mid;else r=mid;
	}
	cout<<l<<"\n";
	return 0;
}
```

