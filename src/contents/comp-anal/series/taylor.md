---
title: 泰勒级数
order: 1
---

# 泰勒级数
## 泰勒定理
$\bold{定理}\ \ 设f(z)在区域D内解析,z_0 \in D.只要圆盘K:|z - z_0| < R包含在D内,\ 则在该圆盘内f(z)可以展开为唯一的幂级数$
$$f(z) = \sum\limits_{n=0}^{\infty} a_n {(z - z_0)}^n$$
$其中系数a_n= \frac{f^{(n)}(z_0)}{n!},\ 这个级数称为f(z)在z_0处的\bold{泰勒级数}或\bold{泰勒展开式}.\ 特别地,\ 当z_0=0时,\ 称为\bold{麦克劳林级数}或\bold{麦克劳林展开式}.$

$\bold{注}:\ 若D内包含奇点,\ 设最近的奇点为\alpha,\ 则R=|z_0-\alpha|$

## 将函数展开成泰勒级数
### 1. 直接法：
由泰勒定理计算系数，然后写出泰勒级数
<Collapsible title="例">
$求\displaystyle {e^z}, \sin z, \cos z在z=0处的泰勒展开式.$
<Collapsible title="解">
$$&{\left(e^z\right)}^{(n)}=e^z\\
&{\left(e^z\right)}^{(n)}\bigg|_{z=0} = 1$$

$$e^z=1+z+\frac{z^2}{2!}+\cdots+\frac{z^n}{n!}+\cdots=\sum\limits_{n=0}^\infty \frac{z^n}{n!}$$

$因为$
$$e^z在复平面处处解析$$
$所以$
$$级数的收敛半径R = \infty$$

$仿照上例,\ 可得\sin z,\ \cos z的泰勒展开式$

$$&\sin z = z-\frac{z^3}{3!}+\cdots+\frac{(-1)^n z^{2n+1}}{(2n+1)!}+\cdots= \sum\limits_{n=0}^{\infty} \frac{(-1)^n z^{2n+1}}{(2n+1)!}\\
&\cos z = 1-\frac{z^2}{2!}+\cdots+\frac{(-1)^n z^{2n}}{(2n)!}+\cdots= \sum\limits_{n=0}^{\infty} \frac{(-1)^n z^{2n}}{(2n)!}$$
</Collapsible>
</Collapsible>

### 2. 间接法：
借助于一些已知函数的展开式 , 结合解析函数的性质,  幂级数运算性质 (逐项求导, 积分等)和其它数学技巧 (代换等) , 求函数的泰勒展开式.
<Collapsible title="例">
$利用间接法求\sin z在z=0处的泰勒展开式.$
<Collapsible title="解">
$因为$ 
$$\sin z = \frac{e^{iz} - e^{-iz}}{2i},\ 且 e^z = \sum\limits_{n=0}^\infty \frac{z^n}{n!}$$

$所以 $
$$\sin z = \frac{1}{2i} \sum\limits_{n=0}^\infty \frac{(iz)^n - (-iz)^n}{n!}$$

$当n为偶数时$
$$(iz)^n - (-iz)^n = 0$$

$所以只需讨论n为奇数时的情况,\ 令n=2k+1,\ 则$

$$\sin z &= \frac{1}{2i} \sum\limits_{k=0}^\infty \frac{2(iz)^{2k+1}}{(2k+1)!}= \sum\limits_{k=0}^\infty \frac{(-1)^k z^{2k+1}}{(2k+1)!}$$
</Collapsible>
</Collapsible>

## 常见函数的泰勒展开式
$\displaystyle e^z =1+z+\frac{z^2}{2!}+\cdots+\frac{z^n}{n!}+\cdots=\sum\limits_{n=0}^{\infty} \frac{z^n}{n!}$

$\displaystyle \frac{1}{1-z} = 1+z+z^2+\cdots+z^n+\cdots= \sum\limits_{n=0}^{\infty} z^n,\ |z|<1$

$\displaystyle \frac{1}{1+z} =1-z+z^2-\cdots+(-1)^n z^n+\cdots= \sum\limits_{n=0}^{\infty} (-1)^n z^n,\ |z|<1$

$\displaystyle \sin z = z-\frac{z^3}{3!}+\cdots+\frac{(-1)^n z^{2n+1}}{(2n+1)!}+\cdots= \sum\limits_{n=0}^{\infty} \frac{(-1)^n z^{2n+1}}{(2n+1)!}$

$\displaystyle \cos z = 1-\frac{z^2}{2!}+\cdots+\frac{(-1)^n z^{2n}}{(2n)!}+\cdots= \sum\limits_{n=0}^{\infty} \frac{(-1)^n z^{2n}}{(2n)!}$

$\displaystyle \ln(1+z) = z-\frac{z^2}{2}+\frac{z^3}{3}-\cdots+\frac{(-1)^n z^{n+1}}{n+1}+\cdots= \sum\limits_{n=0}^{\infty} \frac{(-1)^n z^{n+1}}{n+1},\ |z|<1$

$\displaystyle (1+z)^\alpha =1+ \alpha z + \frac{\alpha(\alpha-1)}{2!}z^2 + \cdots + \frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}z^n + \cdots = \sum\limits_{n=0}^{\infty} \frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}z^n,\ |z|<1$

## 典例
<Collapsible title="例1">
$把函数\frac{1}{{(1+z)}^2}展开成z的幂级数.$
<Collapsible title="解">
$因为$ 
$$\frac{1}{{(1+z)}^2}有一奇点z=-1，且在|z|<1时解析$$

$所以$
$$\frac{1}{1+z}=\sum\limits_{n=0}^\infty (-1)^n z^n$$
$又$
$$\frac{1}{{(1+z)}^2}=-(\frac{1}{1+z})'$$

$所以$
$$\frac{1}{{(1+z)}^2}&=-\left(\sum\limits_{n=0}^\infty (-1)^n z^n\right)'=-\sum\limits_{n=0}^\infty \left[(-1)^nz^n\right]'\\
&=\sum\limits_{n=1}^\infty (-1)^{n-1} n z^{n-1},\ |z|<1$$
</Collapsible>
</Collapsible>

<Collapsible title="例2">
$求对数函数的主值\ln {(1+z)}在z=0处的泰勒展开式.$
<Collapsible title="解">
$因为$
$$奇点z=-1,\ 且在|z|<1时解析$$

$所以$
$$\frac{1}{1+z}=\sum\limits_{n=0}^\infty {(-1)^n z^n}$$

又$
$$\ln {(1+z)}=\int_{0}^{z} {\frac{1}{1+z}}dz$$

$所以$
$$\ln {(1+z)}&=\int_{0}^{z} {\left(\sum\limits_{n=0}^\infty {(-1)^n z^n}\right)}dz=\sum\limits_{n=0}^\infty {\left(\int_{0}^{z} {(-1)^n z^n }dz\right)}\\
&=\sum\limits_{n=0}^\infty {\frac{(-1)^n z^{n+1}}{n+1}},\ |z|<1$$
</Collapsible>
</Collapsible>

<Collapsible title="例3">
$求\arctan z在z=0处的幂级数展开式.$
<Collapsible title="解">
$因为$
$$\arctan z=\int_{0}^{z} {\frac{1}{1+z^2}}dz,$$
$$\frac{1}{1+z^2}=\frac{1}{1-(-z)^2}=\sum\limits_{n=0}^\infty {(-z)^{2n}},\ |z|<1$$

$所以$ 
$$\arctan z&=\int_{0}^{z} {\left(\sum\limits_{n=0}^\infty {(-1)^n z^{2n}}\right)}dz=\sum\limits_{n=0}^\infty {\left(\int_{0}^{z} {(-1)^n z^{2n} }dz\right)}\\
&=\sum\limits_{n=0}^\infty {\frac{(-1)^n z^{2n+1}}{2n+1}},\ |z|<1$$
</Collapsible>
</Collapsible>

<Collapsible title="例4">
$求{\cos}^2z在z=0处的幂级数展开式.$
<Collapsible title="解">
$因为$
$${\cos}^2z=\frac{1+\cos 2z}{2}$$

$又$
$$\cos 2z=\sum\limits_{n=0}^\infty \frac{(-1)^n (2z)^{2n}}{(2n)!}$$

$所以$
$${\cos}^2z=\frac{1}{2}+\frac{1}{2}\sum\limits_{n=0}^\infty \frac{(-1)^n (2z)^{2n}}{(2n)!}$$
</Collapsible>
</Collapsible>