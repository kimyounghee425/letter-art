// 픽셀 -> 문자 변환 로직
import { charsetPresets } from '../presets/charset';

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
