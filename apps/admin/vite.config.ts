import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import devtools from 'solid-devtools/vite'
export default defineConfig({
  plugins: [
    devtools({
      /* additional options */
      autoname: true, // e.g. enable autoname
      locator: {
        targetIDE: 'vscode',
        componentLocation: true,
        jsxLocation: true,
      },
    }),
    solidPlugin(),
    nxViteTsPaths(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
