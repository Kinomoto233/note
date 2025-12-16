// ============================================
// 笔记数据文件 / Note Data File
// ============================================
// 如何添加新笔记 / How to add a new note:
// 1. 在 'catalog' 数组中找到对应章节，在 'notes' 里添加 { id: 'your-id', title: '标题' }
// 2. 在 'notesContent' 对象中添加 'your-id': `Markdown内容...`
// 详情请见项目根目录下的 HowToAddNotes.md
// ============================================

export const catalog = [
    {
        id: 'math',
        title: '高等数学',
        chapters: [
            {
                id: 'calc-1',
                title: '第一章：极限与连续',
                notes: [
                    { id: 'limits', title: '极限的定义与性质' },
                    { id: 'continuity', title: '函数的连续性' }
                ]
            },
            {
                id: 'calc-2',
                title: '第二章：导数与微分',
                notes: [
                    { id: 'derivatives', title: '导数的几何意义' }
                ]
            }
        ]
    },
    {
        id: 'cf',
        title: '复变函数',
        chapters: [
            {
                id: 'cf-3',
                title: '第三章 复变函数的积分',
                notes: [
                    { id: 'cf-c-6', title: '解析函数的高阶导数' }
                ]
            }
        ]
    },
    {
        id: 'em-fields',
        title: '电磁场与电磁波',
        chapters: [
            {
                id: 'em-1',
                title: '第一章：矢量分析',
                notes: [
                    { id: 'vectors', title: '矢量代数' },
                    { id: 'gradient', title: '梯度的物理意义' }
                ]
            },
            {
                id: 'em-2',
                title: '第二章：静电场',
                notes: [
                    { id: 'coulomb', title: '库仑定律' }
                ]
            }
        ]
    },
    {
        id: 'comm-princ',
        title: '通信原理',
        chapters: [
            {
                id: 'comm-1',
                title: '第一章：绪论',
                notes: [
                    { id: 'intro-comm', title: '通信系统模型' }
                ]
            }
        ]
    },
    {
        id: 'dsp',
        title: '数字信号处理',
        chapters: [
            {
                id: 'dsp-1',
                title: '第一章：离散时间信号',
                notes: [
                    {id: 'discrete-signals', title: '序列的运算'}
                ]
            }
        ]
    }
];

export const notesContent = {
    'limits': `
# 极限的定义与性质

如果当 $x$ 足够接近 $x_0$ 时，我们可以使 $f(x)$ 任意接近 $A$，那么函数 $f(x)$ 当 $x$ 趋近于 $x_0$ 时的极限就是 $A$。

$$ \\lim\\limits_{x \\to x_0} f(x) = A $$

<Collapsible title="例题：基本极限计算">
求 $\\lim\\limits_{x \\to 1} (x^2 + 2x)$。

<Collapsible title="查看解答">
$$ 1^2 + 2(1) = 3 $$
</Collapsible>
</Collapsible>
  `,
    'continuity': `
# 函数的连续性

若 $\\lim\\limits_{x \\to x_0} f(x) = f(x_0)$，则称 $f(x)$ 在 $x_0$ 处连续。
  `,
    'derivatives': `
# 导数的几何意义

导数 $f'(x_0)$ 表示曲线 $y=f(x)$ 在点 $(x_0, f(x_0))$ 处的切线斜率。
  `,
    'vectors': `
# 矢量代数

矢量具有大小和方向。
$$ \\vec{A} \\cdot \\vec{B} = |A||B|\\cos\\theta $$
  `,
    'gradient': `
# 梯度

标量场 $\\phi$ 的梯度是一个矢量场，指向 $\\phi$ 变化最快的方向。
$$ \\nabla \\phi = \\frac{\\partial \\phi}{\\partial x}\\vec{i} + \\frac{\\partial \\phi}{\\partial y}\\vec{j} + \\frac{\\partial \\phi}{\\partial z}\\vec{k} $$
  `,
    'coulomb': `
# 库仑定律

真空中两个静止点电荷之间的相互作用力：
$$ F = k \\frac{q_1 q_2}{r^2} $$
  `,
    'intro-comm': `
# 通信系统模型

基本模型包括：信源 -> 发送设备 -> 信道 -> 接收设备 -> 信宿。
  `,
    'discrete-signals': `
# 序列的运算

离散时间信号通常用序列 $x[n]$ 表示。
  `,
    'cf-c-6': `
# 高阶导数
## 高阶导数公式
设$f(z)$在区域$D$内解析，那么$f(z)$的导函数仍满足解析条件，且它的$n$阶导数为：

$$ f^{(n)}(z_0)=\\frac{n!}{2\\pi i}\\oint\\limits_C\\frac{f(z)}{(z-z_0)^{n+1}}dz\\ (n=1, 2, \\cdots) $$

$$ \\boxed{ \\displaystyle \\int_a^b f(x)dx } $$

其中$C$为在函数$f(z)$的解析区域$D$内围绕$z_0$的任何一条正向简单闭曲线，而且该曲线围成的区域全含于$D$
  `,
};
