const preprocessMarkdown = (text) => {
    if (!text) return text;

    let processed = text.replace(/\$\$([\s\S]+?)\$\$/g, (match, p1) => {
        const trimmed = p1.trim();
        if (trimmed.startsWith('\\begin{aligned}') || trimmed.startsWith('\\begin{equation}')) {
            return match;
        }
        return `\n$$\n\\begin{aligned}\n${trimmed}\n\\end{aligned}\n$$\n`;
    });

    processed = processed.replace(/(?<![\\\$])\$([^\$]+?)\$(?!\$)/g, (match, p1) => {
        const trimmed = p1.trim();
        if (trimmed.startsWith('\\displaystyle')) {
            return match;
        }
        return `$\\displaystyle ${trimmed}$`;
    });

    return processed;
};

const tests = [
    {
        input: '$$f(z)&=\\frac{1}{z-2}$$',
        expected: '\n$$\n\\begin{aligned}\nf(z)&=\\frac{1}{z-2}\n\\end{aligned}\n$$\n'
    },
    {
        input: '$$\\begin{aligned} already \\end{aligned}$$',
        expected: '$$\\begin{aligned} already \\end{aligned}$$'
    },
    {
        input: 'Text\n$$\na=b\n$$\nMore text',
        expected: 'Text\n\n$$\n\\begin{aligned}\na=b\n\\end{aligned}\n$$\n\nMore text'
    }
];

tests.forEach((t, i) => {
    const result = preprocessMarkdown(t.input);
    if (result === t.expected) {
        console.log(`Test ${i + 1} PASSED`);
    } else {
        console.log(`Test ${i + 1} FAILED`);
        console.log(`  Input:    ${t.input}`);
        console.log(`  Expected: |${t.expected}|`);
        console.log(`  Result:   |${result}|`);
    }
});
