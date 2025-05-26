// 컴포넌트화
import React, { useEffect, useState } from 'react';
import { renderImageToAscii } from '../core/renderText';
import { charsetPresets } from '../presets/charset';

interface AsciiArtProps {
    src: string;
    width?: number;
    preset?: keyof typeof charsetPresets;
    endpoint?: string;
}

export default function AsciiArt({
    src,
    width = 80,
    preset = 'default',
    endpoint = '/api/ascii',
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
