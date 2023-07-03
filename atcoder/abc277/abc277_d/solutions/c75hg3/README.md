---
title: "ABC277_D_solution.md"
tags: []
author: "Binary_1110011_"
created: "2022.11.12"
---

实际上就是求排序后最大连续整数段和。

但是有一个取模的条件，也就是说可以是 $m-2,m-1,0,1,2,\dots$ 这样的一段，所以考虑复制一遍排序后的数组。同时数列末尾放一个未出现数，防止最后一段取不到。

设这样求出的最大连续整数段和为 $mx$，原先所有数之和为 $sum$，则最后答案为 $\max(0,sum-mx)$。和 $0$ 取 $\max$ 是为了防止整段形成一个环，使得有些数取了两次。

AC Code

```cpp
#include<bits/stdc++.h>
#define IOS ios::sync_with_stdio(false)
#define TIE cin.tie(0),cout.tie(0)
#define int long long
using namespace std;
int n,a[400005],m,sum;
signed main(){
	IOS;TIE;
	cin>>n>>m;
	for(int i=1;i<=n;i++) cin>>a[i],sum+=a[i];
	sort(a+1,a+n+1);
	int tmp=0,mx=0;
	a[0]=a[1];
	for(int i=n+1;i<=n*2;i++) a[i]=a[i-n];
	a[n*2+1]=-1;
	for(int i=1;i<=n*2+1;i++){
		if(a[i]==a[i-1]||a[i]==(a[i-1]+1)%m) tmp+=a[i];
		else{
			mx=max(mx,tmp);
			tmp=a[i];
		}
	}
	cout<<max(sum-mx,0ll)<<endl;
	return 0;
} 

```