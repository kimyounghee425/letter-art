// 사용할 문자셋 프리셋 정의 (명암용 문자들)

export const charsetPresets: Record<string, string> = {
    default: '@%#*+=-:. ', // 가장 흔한 기본값
    bold: '@$B%8WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\' ', // 고해상도
    light: ' .:-=+*#%@', // 반전된 순서
    blocks: '█▓▒░ ', // 유니코드 블록 전용
    emoji: '🤍🩶🩶🤎🖤', // 감성용 (터미널 대응 안 좋음)
    ascii: '#WMBRXVYIti+=~-,. ', // 고전 ASCII 스타일
};