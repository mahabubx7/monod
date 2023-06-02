import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3001,
//     proxy: {
//       '/api': {
//         target: isProd ? '/api' : 'http://localhost:4000/api',
//         changeOrigin: true,
//         rewrite: path => path.replace(/^\/api/, '')
//       }
//     },
//   },
// })

const defaultConfig = {
  plugins: [react()],
}

export default defineConfig(({ mode }) => {
  const isDev = ['development', 'dev'].includes(mode);

  return {
    ...defaultConfig,
    server: {
      port: 3001,
      proxy: {
        '/api': {
          target: isDev ? 'http://127.0.0.1:4000/api' : '/api',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
