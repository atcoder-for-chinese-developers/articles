---
title: "ABC271_A_solution.md"
tags: []
author: ""
created: ""
---

想怎么做大概都可以，在这里介绍一下 `printf` 特有的格式指示符。

先放代码（C 语言注意）：

```
main(n){
	scanf("%d",&n);
	printf("%02X\n",n);
}
```

其中 `%02X` 表示输出十六进制整数，字母大写（`X`），往前补齐到两位（`2X`），不足用 `0` 补齐（`02X`）。

