---
title: "ABC276_C_solution.md"
tags: []
author: "Binary_1110011_"
created: "2022.11.16"
---

枚举全排列时我们常用 `next_permutation` 函数，与之相对的有一个 `prev_permutation` 函数，可以求出一个排列的前一个排列。所以直接用即可。

AC Code

```cpp
#include<bits/stdc++.h>
#define IOS ios::sync_with_stdio(false)
#define TIE cin.tie(0),cout.tie(0)
#define int long long
using namespace std;
int n,a[105];
signed main(){
	IOS;TIE;
	cin>>n;
	for(int i=1;i<=n;i++) cin>>a[i];
	prev_permutation(a+1,a+n+1);
	for(int i=1;i<=n;i++) cout<<a[i]<<' ';
	cout<<endl; 
	return 0;
} 

```
