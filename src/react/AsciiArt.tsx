// 컴포넌트화
import React, { useEffect, useState } from 'react';
import { renderImageToAscii } from '../core/renderText';
import { charsetPresets } from '../presets/charset';

interface AsciiArtProps {
    src: string;
    width?: number;
    preset?: keyof typeof charsetPresets;
}

export const AsciiArt = ({ src, width = 80, preset = 'default' }: AsciiArtProps) => {
    const [ascii, setAscii] = useState<string>('');

    useEffect(() => {
        const render = async () => {
            const art = await renderImageToAscii(src, width, preset);
            setAscii(art);
        };
        render();
    }, [src, width, preset]);

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
};
