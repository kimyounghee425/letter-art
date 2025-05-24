import { patterns } from '../patterns';

const render = (text: string): string => {
    const chars = text.toLowerCase().split('');
    const lines: string[] = [];

    for (let row = 0; row < 7; row++) {
        const line = chars
            .map((char) => patterns[char]?.[row] ?? ' '.repeat(12)) // 없으면 빈칸
            .join('  '); // 문자 간 공백
        lines.push(line);
    }

    return lines.join('\n');
};

export default render;
