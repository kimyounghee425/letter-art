// 이미지 -> 아스키 문자열 출력 로직
import { loadImage } from './imageLoader';
import { pixelToChar } from './pixelToChar';
import { charsetPresets } from '../presets/charset';
import sharp from 'sharp';

export const renderImageToAscii = async function (
    filePath: string,
    targetWidth: number = 80, // 단독 호출 대비 기본값 설정
    preset: keyof typeof charsetPresets = 'default',
): Promise<string> {
    // 세로 문자 비율 조정
    const CHAR_RATIO = 0.5;

    const metadata = await sharp(filePath).metadata();

    // 혹시 모를 width, height 가 없을 경우 방지
    const originalWidth = metadata.width || 1;
    const originalHeight = metadata.height || 1;
    const aspectRatio = originalHeight / originalWidth;

    const newWidth = targetWidth;
    const newHeight = Math.floor(newWidth * aspectRatio * CHAR_RATIO);

    const { width, height, pixels } = await loadImage(filePath, newWidth, newHeight);

    const asciiLines: string[] = [];

    for (let y = 0; y < newHeight; y++) {
        const lineChars: string[] = [];

        for (let x = 0; x < newWidth; x++) {
            // 원본 이미지에 대응하는 가로, 세로 픽셀 좌표 계산
            const srcX = Math.floor((x / newWidth) * width);
            const srcY = Math.floor((y / newHeight) * height);
            const i = srcY * width + srcX;

            if (i + 3 >= pixels.length) {
                lineChars.push('');
                continue;
            }

            const gray = pixels[i];
            const char = pixelToChar(gray, preset);
            lineChars.push(char);
        }
        asciiLines.push(lineChars.join(''));
    }

    return asciiLines.join('\n');
};
