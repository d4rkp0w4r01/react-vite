import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dns from 'dns'
// https://vitejs.dev/config/server-options.html#server-options
dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:`192.168.1.4`,
    port: 3000,
  },
})
