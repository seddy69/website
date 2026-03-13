import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // ── BASE URL ──────────────────────────────────────────────────────────────
  // If you're using a custom domain (e.g. tristateislamic.center):
  base: '/website/',
  //
  // If you're deploying to a GitHub Pages subfolder (username.github.io/repo):
  // base: '/your-repo-name/',
  // ─────────────────────────────────────────────────────────────────────────
})
