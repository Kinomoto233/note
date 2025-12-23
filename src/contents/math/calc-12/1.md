---
title: 一般级数
---

# 一般级数
## 常数项级数
**性质1**（级数收敛的必要条件）如果级数$\sum\limits_{n=1}^{\infty} a_n$收敛，那么$\lim\limits_{n\to\infty} a_n=0$

**性质5**（级数的结合律）若级数$\sum\limits_{n=1}^{\infty} a_n$收敛，那么其按某一规律加括号后所成的级数仍收敛于原级数的和

**推论**：若级数$\sum\limits_{n=1}^{\infty} a_n$按某一规律加括号后所成的级数发散，则原级数必发散

## 正项级数
**定义** 级数$\sum\limits_{n=1}^{\infty} a_n$的项$a_n\ge0$的级数称为正项级数

**定理1**（正项级数收敛的充要条件）正项级数$\sum\limits_{n=1}^{\infty} a_n$收敛的充要条件是它的部分和数列$\{S_n\}$有界

**定理2**（比较审敛法）设$\sum\limits_{n=1}^{\infty} a_n$和$\sum\limits_{n=1}^{\infty} b_n$是两个正项级数，且$\forall n\in\mathbb{N}^*$，$a_n\le b_n$，则

（1）$\sum\limits_{n=1}^{\infty} b_n$收敛，则$\sum\limits_{n=1}^{\infty} a_n$收敛

（2）$\sum\limits_{n=1}^{\infty} a_n$发散，则$\sum\limits_{n=1}^{\infty} b_n$发散

**定理3**（比较审敛法的极限形式）设$\sum\limits_{n=1}^{\infty} a_n$和$\sum\limits_{n=1}^{\infty} b_n$是两个正项级数，且$\lim\limits_{n\to\infty} \frac{a_n}{b_n}=c$，则

（1）$c<\infty$，则$\sum\limits_{n=1}^{\infty} a_n$和$\sum\limits_{n=1}^{\infty} b_n$同敛散性

（2）$c=0$，且$\sum\limits_{n=1}^{\infty} b_n$收敛，则$\sum\limits_{n=1}^{\infty} a_n$收敛

（3）$c=\infty$，且$\sum\limits_{n=1}^{\infty} b_n$发散，则$\sum\limits_{n=1}^{\infty} a_n$发散

**定理4**（比值审敛法）设$\sum\limits_{n=1}^{\infty} a_n$是正项级数，且$\lim\limits_{n\to\infty} \frac{a_{n+1}}{a_n}=c$，则

（1）$c<1$，则$\sum\limits_{n=1}^{\infty} a_n$收敛

（2）$c>1$或$c=\infty$，则$\sum\limits_{n=1}^{\infty} a_n$发散

**定理5**（根值审敛法）设$\sum\limits_{n=1}^{\infty} a_n$是正项级数，且$\lim\limits_{n\to\infty} \sqrt[n]{a_n}=c$，则

（1）$c<1$，则$\sum\limits_{n=1}^{\infty} a_n$收敛

（2）$c>1$，则$\sum\limits_{n=1}^{\infty} a_n$发散

## 交错级数
**定义** 级数$\sum\limits_{n=1}^{\infty} (-1)^{n+1} a_n$称为交错级数，其中$a_n>0$

**定理1**（莱布尼兹判别法）设$\sum\limits_{n=1}^{\infty} a_n$是交错级数，且满足：

（1）$a_n$单调递减

（2）$\lim\limits_{n\to\infty} a_n=0$

则$\sum\limits_{n=1}^{\infty} a_n$收敛，且其和$S\le a_1$，其余项满足：$|r_n|\le a_{n+1}$

## 级数的绝对收敛和条件收敛
**定义**：对级数$\sum\limits_{n=1}^{\infty} a_n$，若$\sum\limits_{n=1}^{\infty} |a_n|$收敛，则称$\sum\limits_{n=1}^{\infty} a_n$绝对收敛；若$\sum\limits_{n=1}^{\infty} a_n$收敛，但$\sum\limits_{n=1}^{\infty} |a_n|$发散，则称$\sum\limits_{n=1}^{\infty} a_n$条件收敛

**定理1**（绝对收敛一定收敛）若级数$\sum\limits_{n=1}^{\infty} a_n$绝对收敛，则$\sum\limits_{n=1}^{\infty} a_n$收敛

**$\star$定理2**（交换律）若级数$\sum\limits_{n=1}^{\infty} a_n$绝对收敛，则$\sum\limits_{n=1}^{\infty} a_n$的任意项可以任意调换顺序，且和不变

**$\star$定理3**（乘法法则）若级数$\sum\limits_{n=1}^{\infty} a_n$和$\sum\limits_{n=1}^{\infty} b_n$绝对收敛，则对所有乘积$a_ib_j$按任意顺序排列得到的级数$\sum\limits_{n=1}^{\infty} a_ib_j$绝对收敛，且$\sum\limits_{n=1}^{\infty} a_ib_j=\left(\sum\limits_{n=1}^{\infty} a_n\right)\left(\sum\limits_{n=1}^{\infty} b_n\right)$

## 幂级数
**定义** 形如$\sum\limits_{n=0}^{\infty} a_n {(x-x_0)}^n = a_0 + a_1 (x-x_0) + a_2 {(x-x_0)}^2 + \cdots + a_n {(x-x_0)}^n + \cdots$的级数称为幂级数，其中$a_n$称为幂级数的系数

**定理1**（Abel定理）若幂级数$\sum\limits_{n=0}^{\infty} a_n x^n$在$x=x_0$处收敛，则对满足不等式$|x|<|x_0|$的一切$x$，幂级数都绝对收敛; 反之，若幂级数在$x=x_0$处发散，则对满足不等式$|x|>|x_0|$的一切$x$，该幂级数也发散

**求收敛半径**

**法1**（比值法）若幂级数$\sum\limits_{n=0}^{\infty} a_n x^n$的系数$a_n$满足$\lim\limits_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right|=\rho$,则：

（1）$\rho\neq0$，$R=\frac{1}{\rho}$

（2）$\rho=0$，$R=\infty$

（3）$\rho=\infty$，$R=0$

**法2**（根值法）若幂级数$\sum\limits_{n=0}^{\infty} a_n x^n$的系数$a_n$满足$\lim\limits_{n\to\infty} \sqrt[n]{|a_n|}=\rho$，则：

（1）$\rho\neq0$，$R=\frac{1}{\rho}$

（2）$\rho=0$，$R=\infty$

（3）$\rho=\infty$，$R=0$

**定理2**（逐项求导和积分）若幂级数$\sum\limits_{n=0}^{\infty} a_n x^n$的收敛半径$R>0$，则其和函数$S(x)$在收敛域上连续，且在收敛区间内可逐项求导和积分，收敛半径不变：

$S'(x)=\sum\limits_{n=0}^{\infty}(a_n x^{n})'=\sum\limits_{n=1}^{\infty} na_n x^{n-1}$

$\int_{0}^{x} S(x)dx=\sum\limits_{n=0}^{\infty}\int_{0}^{x}(a_n x^{n})dx=\sum\limits_{n=0}^{\infty} \frac{a_n}{n+1} x^{n+1}$