import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'fs'

const prismPkg = JSON.parse(readFileSync('./node_modules/prism-ui/package.json', 'utf-8'))

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  define: {
    __PRISM_VERSION__: JSON.stringify(prismPkg.version),
  },
})
