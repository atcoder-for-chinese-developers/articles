---
title: "ABC009_D_solution.md"
tags: []
author: ""
created: ""
---

$K\le 100,M\le 10^9$ 可以想到矩阵乘法。

我们可以把矩阵乘法中的加法改为按位异或，乘法改为按位与，即 $C_{i,j}=\bigoplus\limits_{k=1}^{m}(A_{i,k}\And B_{k,j})$（与上文是 $A,C$ 无关，$C$ 为答案，$A,B$ 为相乘的两个矩阵）。

设答案数组为 $S_{1,1}\dots S_{k,1}$，分别存 $A_p,A_{p-1}...A_{p-k+1}$，更新成最新答案，${S'}_{1,1}=\bigoplus\limits_{i=1}^{m}(S_{i,1}\And C_i)$（根据题意 求 $A_{p+1}$）。

然后 ${S'}_{2,1}$ 要改为 ${S}_{1,1}$ 怎么用按位异或、按位与实现呢？考虑我们在对 $S$ 中的一个数 $S_{x,1}$ 选择，如果我们不需要这个数，我们就把它在单位矩阵中对应位置赋为 $0$（$x\And0=0,x\oplus0=x$），如果要取就把它在单位矩阵中对应位置赋为 $2^{\log {S_{x,1}}+1}-1$，在二进制下每一位都是 $1$，保证  $\And$ 起来是原数。因为我们在算 ${S'}_{i,1}(i>1)$ 的时候，只会取一个数，所以异或起来就是我们要取的那个数。

综上所述 $K\times K$ 的单位矩阵 $B$ 为：

$$\begin{pmatrix}
C_1 & C_2 &\dots & C_{k-1} & C_k\\
2^{32}-1 & 0&\dots& 0 & 0\\
0& 2^{32}-1 &\dots& 0 & 0\\
\vdots&\vdots&\ddots&\vdots&\vdots\\

0& 0 &\dots& 2^{32}-1 & 0\\
\end{pmatrix}$$

矩阵中赋 $2^{32}-1$ 的原因是题目中说最大值为 $32$ 为**无**符号整数，当然你也可以赋个更大的值，如 $2^{50}-1$。


$K\times 1$ 的初始答案矩阵为：

$$\begin{pmatrix}
A_K\\
A_{K-1}\\
\vdots\\
A_2\\
A_1\\
\end{pmatrix}$$
代码：

```cpp
struct Matrix{//矩阵
    int p[105][105],n,m;
    void clear(int XX,int YY){
        n=XX,m=YY;
        memset(p,0,sizeof p);
    }
    Matrix operator*(const Matrix&a){
        Matrix q;q.clear(a.n,a.m);
        for(int i=1;i<=n;i++){
            for(int j=1;j<=a.m;j++)
                for(int k=1;k<=m;k++)q.p[i][j]^=(s&a.p[k][j]);//分别把假和乘改为按位异或和按位与
            }
        return q;
    }
};
Matrix ans,a;//ans是上文的B，a是上文是S
signed main(){
    int k=read(),n=read();
    a.clear(k,1);
    for(int i=1;i<=k;i++)a.p[k-i+1][1]=read();//我构造的矩阵从S1,1开始，所以要倒过来
    ans.clear(k,k);
    for(int i=1;i<=k;i++)ans.p[1][i]=read();
    for(int i=1;i<k;i++)ans.p[i+1][i]=(1ll<<50)-1;
    if(n<=k){cout<<a.p[k-n+1][1]<<'\n';return 0;}
    n-=k;
    while(n){//快速幂
        if(n&1)a=ans*a;
        ans=ans*ans;n>>=1;
    }
    cout<<a.p[1][1]<<'\n';
}
```

