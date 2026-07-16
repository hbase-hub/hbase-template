import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 模板自身仅用于本地预览，base 用根路径。
// 各演示仓的 vite.config.ts 由 init-repo.sh 用 base: '/<repo>/' 独立生成（同步脚本不覆盖）。
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 54300,
  },
})
