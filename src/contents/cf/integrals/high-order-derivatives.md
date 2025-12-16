---
title: 解析函数的高阶导数
order: 1
---

# 高阶导数

## 高阶导数公式

设$f(z)$在区域$D$内解析，那么$f(z)$的导函数仍满足解析条件，且它的$n$阶导数为：

$$ 
f^{(n)}(z_0)=\frac{n!}{2\pi i}\oint\limits_C\frac{f(z)}{(z-z_0)^{\color{olive} n+1}}dz\ (n=1, 2, \cdots) 
$$

$$ \fcolorbox{#8b4513}{#fffaf0}{ \displaystyle{z^{n+1}} } $$

其中$C$为在函数$f(z)$的解析区域$D$内围绕$z_0$的任何一条正向简单闭曲线，而且该曲线围成的区域全含于$D$
