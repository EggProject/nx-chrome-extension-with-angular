import { defineConfig } from 'vite';

import viteTsConfigPaths from 'vite-tsconfig-paths';
import { crx } from '@crxjs/vite-plugin';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import manifest from './src/manifest';

export default defineConfig({
  build: {
    minify: false,
    target: 'esnext',
    emptyOutDir: true,
    outDir: 'build',
    rollupOptions: {
      preserveEntrySignatures: 'exports-only',
      output: {
        chunkFileNames: 'assets/chunk-[hash].js',
      },
    },
  },

  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: '../../dist/apps/app-dev-tools-panel/**',
          dest: 'assets/ngapp',
        },
        // {
        //   src: '../../dist/libs/inject-js-library/src/index.js',
        //   dest: 'grpc_interceptor_index.js',
        // },
        {
          src: 'devtools-panel.html',
          dest: '',
        },
      ],
    }),
    crx({
      manifest,
    }),
    viteTsConfigPaths({
      root: './',
    }),
  ],
});
