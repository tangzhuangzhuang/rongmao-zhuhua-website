import vue from '@vitejs/plugin-vue'
import { codeInspectorPlugin } from 'code-inspector-plugin'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    vue({
      template: {
        transformAssetUrls: false,
      },
    }),
    ...(command === 'serve'
      ? [
          codeInspectorPlugin({
            bundler: 'vite',
            editor: 'webstorm',
            launchType: 'open',
            showSwitch: true,
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
