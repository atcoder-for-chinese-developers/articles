---
title: "ABC276_D_solution.md"
tags: []
author: "Binary_1110011_"
created: "2022.11.16"
---

因为要使所有数边相同，所以在可行的情况下，要操作次数最少，就要把所有数变成所有数的最大公约数。

然后只要依次判断每一个 $a_i$ 变成整个数列的最大公约数要除几次 $2$ 、几次 $3$ 即可。若怎么除都不能变成整个数列的最大公约数，则直接无解。

AC Code

```cpp
#include<bits/stdc++.h>
#define IOS ios::sync_with_stdio(false)
#define TIE cin.tie(0),cout.tie(0)
#define int long long
using namespace std;
int n,a[1005],g,ans;
signed main(){
	IOS;TIE;
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>a[i];
		g=__gcd(g,a[i]);
	}
	for(int i=1;i<=n;i++) a[i]/=g;
	for(int i=1;i<=n;i++){
		while(a[i]%2==0) a[i]/=2,ans++;
		while(a[i]%3==0) a[i]/=3,ans++;
		if(a[i]>1){
			cout<<-1<<endl;
			return 0;
		}
	}
	cout<<ans<<endl;
	return 0;
} 

```