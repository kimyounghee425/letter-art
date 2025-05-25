import { defineConfig } from 'tsup';

export default defineConfig([
    {
        entry: ['src/index.ts'],
        format: ['esm'],
        outDir: 'dist',
        dts: true,
    },
    {
        entry: ['src/react/AsciiArt.tsx'],
        format: ['esm'],
        outDir: 'dist/react',
        dts: true,
    },
]);
