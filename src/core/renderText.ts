// 이미지 -> 아스키 문자열 출력 로직
import { loadImage } from './imageLoader';
import { rgbToGray, pixelToChar } from './pixelToChar';
import { charsetPresets } from '../presets/charset';

export const renderImageToAscii = async function (
    filePath: string,
    targetWidth: number = 80,
    preset: keyof typeof charsetPresets = 'default',
): Promise<string> {
    const image = await loadImage(filePath);
    const { width, height, pixels } = image;

    const aspectRatio = height / width;
    const newWidth = targetWidth;
    const newHeight = Math.floor(targetWidth * aspectRatio * 0.5); // 세로 줄 조정

    const asciiLines: string[] = [];

    for (let y = 0; y < newHeight; y++) {
        let line = '';
        for (let x = 0; x < newWidth; x++) {
            const srcX = Math.floor((x / newWidth) * width);
            const srcY = Math.floor((y / newHeight) * height);
            const i = (srcY * width + srcX) * 4;

            const r = pixels[i];
            const g = pixels[i + 1];
            const b = pixels[i + 2];

            const gray = rgbToGray(r, g, b);
            const char = pixelToChar(gray);
            line += char;
        }
        asciiLines.push(line);
    }

    return asciiLines.join('\n');
};
