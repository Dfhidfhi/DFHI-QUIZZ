import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { configDefaults } from 'vitest/dist/config'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    root: fileURLToPath(new URL('./', import.meta.url)),
    exclude: [...configDefaults.exclude,'e2e/*'],
    globals: true,
    include: ['src/**/*.{test,spec}.{js,ts}'],
    environment: 'happy-dom', // or 'jsdom', 'node',
    coverage: {
      reporter: ['text', 'html', ], // <-- ***
  }
  },
})