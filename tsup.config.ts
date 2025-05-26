import { defineConfig } from 'tsup';

export default defineConfig([
    {
        entry: ['src/index.ts'],
        format: ['esm'],
        outDir: 'dist',
        dts: true,
        outExtension: () => ({ js: '.mjs' }),
    },
    {
        entry: ['src/react/index.ts'],
        format: ['esm'],
        outDir: 'dist/react',
        dts: true,
        outExtension: () => ({ js: '.mjs' }),
    },
    {
        entry: ['src/api/asciiHandler.ts'],
        format: ['esm'],
        outDir: 'dist/api',
        dts: true,
        outExtension: () => ({ js: '.mjs' }),
    },
    {
        entry: ['src/api/next-api.ts'],
        format: ['esm'],
        outDir: 'dist/api',
        dts: true,
        outExtension: () => ({ js: '.mjs' }),
    },
]);
