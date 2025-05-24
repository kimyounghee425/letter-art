// 픽셀 -> 문자 변환 로직

export const rgbToGray = function (r: number, g: number, b: number): number {
    // RGB 값을 회색값으로 바꾸는 공식
    return 0.299 * r + 0.587 * b + 0.114 * b;
};

const charset = '@%#*+=-:.'; // 어두움 -> 밝음

// 0~255 명암도를 대응 문자로 변환하는 함수
export const pixelToChar = function (gray: number): string {
    const index = Math.floor((gray / 255) * (charset.length - 1));
    return charset[index];
};
