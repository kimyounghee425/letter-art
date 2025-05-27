// 컴포넌트화
import { useEffect, useState } from 'react';
import { charsetPresets } from '../presets/charset';

interface AsciiArtProps {
    src: string;
    width?: number;
    preset?: keyof typeof charsetPresets; // charsetPresets 의 key 값들만 추출해 union 타입으로 만든 것
    endpoint?: string;
}

export default function AsciiArt({
    src,
    width = 80,
    preset = 'default',
    endpoint = '/api/ascii', // 엔드포인트도 동적으로 받는데 일단 fix
}: AsciiArtProps) {
    const [ascii, setAscii] = useState<string>('');

    useEffect(() => {
        const load = async () => {
            try {
                const params = new URLSearchParams({
                    src,
                    width: width.toString(),
                    preset,
                });
                const res = await fetch(`${endpoint}?${params.toString()}`);
                const text = await res.text();
                setAscii(text);
            } catch (err) {
                setAscii('Error loading ASCII art');
            }
        };
        load();
    }, [src, width, preset, endpoint]);

    return (
        <pre
            style={{
                fontFamily: 'monospace',
                fontSize: '10px',
                whiteSpace: 'pre-wrap',
                lineHeight: '1.1em',
            }}
        >
            {ascii}
        </pre>
    );
}
