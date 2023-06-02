import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   base: '/admin',
//   server: {
//     port: 3002,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:4000/api',
//         changeOrigin: true,
//         rewrite: path => path.replace(/^\/api/, '')
//       }
//     },
//   },
// })

const defaultConfig = {
  plugins: [vue()],
  base: '/admin',
}

export default defineConfig(({ mode }) => {
  const isDev = ['development', 'dev'].includes(mode);

  return {
    ...defaultConfig,
    server: {
      port: 3002,
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
