// 픽셀 -> 문자 변환 로직
import { charsetPresets } from '../presets/charset';

export const rgbToGray = (r: number, g: number, b: number): number => {
    // RGB 값을 회색값으로 바꾸는 공식
    return 0.299 * r + 0.587 * g + 0.114 * b;
};

// 0~255 명암도를 대응 문자로 변환하는 함수
export const pixelToChar = (
    gray: number,
    preset: keyof typeof charsetPresets = 'default',
): string => {
    const charset = charsetPresets[preset];
    const index = Math.floor((gray / 255) * (charset.length - 1));

    // 방어 코드: 범위 초과 시 ? 반환
    if (!charset || index < 0 || index >= charset.length) {
        return '?';
    }

    return charset[index];
};
