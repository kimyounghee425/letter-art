// 사용할 문자셋 프리셋 정의 (명암용 문자들)

export const charsetPresets: Record<string, string> = {
    default: '@%#*+=-:. ', // 기본값
    bold: '@$B%8WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\' ', // 고해상도
    light: ' .:-=+*#%@', // 반전
    blocks: '█▓▒░ ', // 유니코드 블록 전용
    emoji: '🤍🩶🩶🤎🖤', // 하트
    ascii: '#WMBRXVYIti+=~-,. ', // 고전 ASCII 스타일
};
