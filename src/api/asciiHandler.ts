import { renderImageToAscii } from '../core/renderText';
import type { IncomingMessage, ServerResponse } from 'http';
import url from 'url';

export type AsciiHandler = (req: IncomingMessage, res: ServerResponse) => Promise<void>;

export const asciiHandler: AsciiHandler = async (req: IncomingMessage, res: ServerResponse) => {
    const parsed = url.parse(req.url || '', true);
    const { src, width = '100', preset = 'default' } = parsed.query;

    if (!src || typeof src !== 'string') {
        res.statusCode = 400;
        res.end('Missing src');
        return;
    }

    try {
        const ascii = await renderImageToAscii(src, parseInt(width as string), preset as any);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(ascii);
    } catch (err: any) {
        res.statusCode = 500;
        res.end('Failed to render ASCII');
    }
};


export default asciiHandler;