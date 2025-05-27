https://www.npmjs.com/package/letter-art

A simple ASCII art rendering library that converts images into text-based representations.
It maps pixel brightness to characters based on grayscale values and supports multiple character presets.

## Usage (for Next.js)

### Create /api/ascii/route.ts

Since letter-art performs image processing on the server side, you need to set up an API route using Next.js App Router.
To set it up at the /api/ascii endpoint, create the following file:
```
// src/app/api/ascii/route.ts
export { GET } from "letter-art/next-api";
```

You are not required to use /api/ascii specifically.
For example, you can configure the API route directly at /api like this:
```
// src/app/api/route.ts
export { GET } from "letter-art/next-api";
```

---

### Use on the client

```
"use client";

import { AsciiArt } from "letter-art/react";

export default function Page() {
  return (
    <AsciiArt
      src="/image.jpeg"       // Must be relative to the public folder
      width={200}             // Optional: output width (default is 80)
      preset="ascii"          // Optional: character preset (see below
      endpoint="/api/ascii"   // API endpoint on the server (default: /api/ascii)
    />
    />
  );
}
```

**Preset options**
```
default: '@%#*+=-:. ', // default
bold: '@$B%8WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\' ', // High detail
light: ' .:-=+*#%@', // Inverted order
blocks: '█▓▒░ ', // Unicode block style
emoji: '🤍🩶🩶🤎🖤', // heart
ascii: '#WMBRXVYIti+=~-,. ', // Classic ASCII style
```

### Notes

src must point to a file inside the public/ folder.
Internally, the server resolves it using process.cwd().

This package uses sharp, and does not run in the browser.

You must run it on the Next.js server environment (e.g., via app/api/)

### Output Example

<img width="1032" alt="image" src="https://github.com/user-attachments/assets/9ea431ca-7970-426f-aa63-cc5e90754ff7" />

<br />

---

<br />

이미지를 텍스트 문자로 표현해주는 간단한 아스키 아트 렌더링 라이브러리입니다. 
명암도 기반으로 픽셀을 문자로 매핑하며 몇 가지 문자 프리셋을 지원합니다.

---

## 사용법 (Next.js 기준)
### 1. /api/ascii/route.ts 생성
letter-art 는 서버에서 이미지 처리를 수행하므로, Next.js 의 App Router 기반 API 라우트를 설정해야 합니다.
`/api/ascii` 엔드포인트로 설정하려면 다음과 같이 구성하세요.
```
// src/app/api/ascii/route.ts
export { GET } from "letter-art/next-api";
```

꼭 /api/ascii를 쓸 필요는 없습니다. 예를 들어, 다음처럼 API 라우트를 /api로 설정이 가능합니다.
```
// src/app/api/route.ts
export { GET } from "letter-art/next-api";
```



### 2. 클라이언트에서 사용
```
"use client";

import { AsciiArt } from "letter-art/react";

export default function Page() {
  return (
    <AsciiArt
      src="/image.jpeg"       // 반드시 public 폴더 기준 경로
      width={200}             // 선택: 출력 너비 (기본값: 80)
      preset="ascii"          // 선택: 문자 스타일 (하단 참고)
      endpoint="/api/ascii"   // 서버 API 엔드포인트 (기본값: /api/ascii)    
    />
  );
}

```

**preset 종류**
```
  default: '@%#*+=-:. ', // 기본값
    bold: '@$B%8WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\' ', // 고해상도
    light: ' .:-=+*#%@', // 반전
    blocks: '█▓▒░ ', // 유니코드 블록 전용
    emoji: '🤍🩶🩶🤎🖤', // 하트
    ascii: '#WMBRXVYIti+=~-,. ', // 고전 ASCII 스타일
```

### 주의 사항

src는 반드시 public/ 폴더 기준 경로여야 하며, 내부적으로 process.cwd() 기반으로 파일을 로드합니다.
이 패키지는 sharp를 사용하므로 브라우저 환경에서는 동작하지 않습니다.
Next.js 서버에서만 사용 가능합니다.





