import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

// Minimal Vite config enabling UnoCSS. React works with Vite's JSX transform.
export default defineConfig({
  plugins: [
    UnoCSS(),
  ],
})
