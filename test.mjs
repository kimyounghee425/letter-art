import { renderImageToAscii } from './dist/index.mjs';
import fs from 'fs';

const main = async () => {
    const filePath = './image/ronaldo.png'; // 실제 이미지 경로
    const width = 440;
    const preset = 'ascii'; // default, bold, light, blocks, emoji, ascii 가능

    try {
        const ascii = await renderImageToAscii(filePath, width, preset);
        fs.writeFileSync('ascii-art.txt', ascii, 'utf-8');
        console.log(ascii);
    } catch (err) {
        console.error('변환 실패:', err.message);
    }
};

main();