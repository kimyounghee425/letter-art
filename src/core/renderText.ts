// 이미지 -> 아스키 문자열 출력 로직
import { loadImage } from './imageLoader';
import { rgbToGray, pixelToChar } from './pixelToChar';
import { charsetPresets } from '../presets/charset';
import sharp from 'sharp';

export const renderImageToAscii = async function (
    filePath: string,
    targetWidth: number = 80,
    preset: keyof typeof charsetPresets = 'default',
): Promise<string> {
    const CHAR_RATIO = 0.5;

    const metadata = await sharp(filePath).metadata();
    const originalWidth = metadata.width || 1;
    const originalHeight = metadata.height || 1;
    const aspectRatio = originalHeight / originalWidth;
    console.log("원래 비율", originalHeight, originalWidth)
    const newWidth = targetWidth;
    const newHeight = Math.floor(newWidth * aspectRatio * CHAR_RATIO);
    console.log("새 비율", newHeight, newWidth)
    const { width, height, pixels } = await loadImage(
        filePath,
        newWidth,
        newHeight,
    );

    const asciiLines: string[] = [];

    for (let y = 0; y < newHeight; y++) {
        let line = '';
        for (let x = 0; x < newWidth; x++) {
            const srcX = Math.floor((x / newWidth) * width);
            const srcY = Math.floor((y / newHeight) * height);
            const i = (srcY * width + srcX);
            if (i + 2 >= pixels.length) {
                line += '?'; // 또는 ' ' 공백 문자
                break;
            }

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
