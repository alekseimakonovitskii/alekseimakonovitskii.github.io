import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

const PX = 'https://pxl-amxahsfuf4gfyd74.dev.altcraft.com'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  base: '/',
  server: {
    // same-origin проксирование: весь трафик пикселя/попапа ходит через локальный
    // dev-сервер, CORS отсутствует, бэк не меняется
    proxy: {
      '/pixel': { target: PX, changeOrigin: true, secure: false },
      '/popup': { target: PX, changeOrigin: true, secure: false },
      '/event': { target: PX, changeOrigin: true, secure: false },
    },
  },
})
