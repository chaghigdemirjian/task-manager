// below code helps configure our Vite project in a more type-safe way.
import { defineConfig } from 'vite'  

// importing official react plugin for Vite, enabling support for React JSX syntax. 
// and fast refresh for react components during development.
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // development server will run on port 3000 (Vite uses 5173 by default).
    port: 3000, 
    // below sets up a proxy for API requests during development (allows front-end to make resquests to a different server (localhost:5000)).
    proxy: { 
      '/api': {
        // any request to API will be forwarded to (localhost:5000), this would typically be backend server where API is running instead of our current mock json backend.
        target: 'http://localhost:5000', 
        changeOrigin: true, 
        // removes API from url before the request is sent to the target server.
        rewrite: (path) => path.replace(/^\/api/,''),  
      }
    }
  },
})
