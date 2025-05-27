import { renderImageToAscii } from '../core/renderText';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const src = searchParams.get("src");
        const width = parseInt(searchParams.get("width") ?? "80");
        const preset = searchParams.get("preset") ?? "default";

        if (!src) {
            return new Response("Missing src", { status: 400 });
        }

        // src 파일이 실제로 존재하는지 확인
        const localPath = path.join(process.cwd(), "public", decodeURIComponent(src));
        await fs.access(localPath);

        const ascii = await renderImageToAscii(localPath, width, preset);
        return new Response(ascii, {
            headers: { "Content-Type": "text/plain" },
        });
    } catch (err) {
        console.error("ASCII render error:", err);
        return new Response("Internal Server Error", { status: 500 });
    }
}

export default GET;