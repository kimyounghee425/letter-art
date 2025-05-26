https://www.npmjs.com/package/letter-art

이미지를 텍스트 문자로 표현해주는 간단한 아스키 아트 렌더링 라이브러리입니다. 
명암도 기반으로 픽셀을 문자로 매핑하며 몇 가지 문자 프리셋을 지원합니다.

---

## 사용법 (Next.js 기준)
### 1. /api/ascii/route.ts 생성
아래 코드를 작성
```
// src/app/api/ascii/route.ts
export { GET } from "letter-art/next-api";
```
이 경로는 자동적으로 `/api/ascii` 엔드포인트로 사용됨

### 2. 클라이언트에서 사용
```
"use client";

import { AsciiArt } from "letter-art/react";

export default function Page() {
  return (
    <AsciiArt
      src="/SeolYoon1.jpeg"   // 반드시 public 폴더 기준 경로
      width={200}             // 선택: 출력 너비 (기본값: 80)
      preset="ascii"          // 선택: 문자 스타일 (하단 참고)
    />
  );
}

```

**preset 종류**
```
  default: '@%#*+=-:. ', // 가장 흔한 기본값
    bold: '@$B%8WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\' ', // 고해상도
    light: ' .:-=+*#%@', // 반전된 순서
    blocks: '█▓▒░ ', // 유니코드 블록 전용
    emoji: '🤍🩶🩶🤎🖤', // 감성용 (터미널 대응 안 좋음)
    ascii: '#WMBRXVYIti+=~-,. ', // 고전 ASCII 스타일
```

### 주의 사항

src는 반드시 public/ 폴더 기준 경로여야 하며, 내부적으로 process.cwd() 기반으로 파일을 로드합니다.
이 패키지는 sharp를 사용하므로 브라우저 환경에서는 동작하지 않습니다.
Next.js 서버에서만 사용 가능합니다.


## 결과 예시

<img width="1032" alt="image" src="https://github.com/user-attachments/assets/9ea431ca-7970-426f-aa63-cc5e90754ff7" />



